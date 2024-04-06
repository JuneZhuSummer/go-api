package main

import (
	"context"
	"flag"
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
}

func main() {
	flag.Parse()

	app.Init(env)
	CustomViper = config.InitCustomViper("cron", "")
	log.InitZap()
	logger = log.GetZap("cron")

	logger.Info(CustomViper.Get("foo"))

	signal.Notify(signalChan, os.Interrupt, syscall.SIGTERM)
	go gracefulShutdown()

	for {
		select {
		case <-ticker.C:
			logger.Info("Hello Cron!")
		}
	}

}

func gracefulShutdown() {
	select {
	case msg := <-signalChan:
		switch msg {
		case syscall.SIGHUP, syscall.SIGINT, syscall.SIGQUIT, syscall.SIGKILL, syscall.SIGTERM:
			logger.Info("Cron Shutdown......")
			_, cancel := context.WithTimeout(context.Background(), 10*time.Second)
			defer cancel()
		}
		ticker.Stop()
		os.Exit(0)
	}
}
