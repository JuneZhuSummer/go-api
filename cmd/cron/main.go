package main

import (
	"context"
	"flag"
	"github.com/robfig/cron/v3"
	"github.com/spf13/viper"
	"go-api/pkg/app"
	"go-api/pkg/config"
	"go-api/pkg/log"
	"go.uber.org/zap"
	"os"
	"os/signal"
	"syscall"
	"time"
)

var (
	env string

	signalChan = make(chan os.Signal, 1)

	CustomViper *viper.Viper

	logger *zap.SugaredLogger

	ticker = time.NewTicker(time.Second)
)

func init() {
	flag.StringVar(&env, "env", "dev", "obtain the current environment parameters e.g. 'prod','test','dev'")

	flag.Parse()

	app.Init(env)
	CustomViper = config.InitCustomViper("cron", "")
	log.InitZap()
	logger = log.GetZap("cron")
}

func main() {

	logger.Info(CustomViper.Get("foo"))

	c := cron.New()

	_, err := c.AddFunc("@every 1s", func() {
		logger.Info("Hello Go-Cron!")
	})
	if err != nil {
		logger.Error(err)
	}

	c.Start()

	signal.Notify(signalChan, syscall.SIGHUP, syscall.SIGINT, syscall.SIGQUIT, syscall.SIGKILL, syscall.SIGTERM)
	go app.GracefulShutdown(signalChan, Shutdown)

	for {
		select {
		case <-ticker.C:
			logger.Info("Hello Cron!")
		}
	}
}

func Shutdown() {
	logger.Info("Cron Shutdown......")
	_, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	ticker.Stop()
}
