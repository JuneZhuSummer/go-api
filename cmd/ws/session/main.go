package main

import (
	"context"
	"flag"
	"github.com/gorilla/websocket"
	"github.com/spf13/viper"
	"go-api/internal/ws"
	"go-api/pkg/app"
	"go-api/pkg/config"
	"go-api/pkg/log"
	"go.uber.org/zap"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"
)

var (
	upgrader = websocket.Upgrader{
		ReadBufferSize:  1024,
		WriteBufferSize: 1024,
		//允许跨域
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}

	WsViper *viper.Viper

	env string

	addr string

	path string

	signalChan = make(chan os.Signal, 1)

	logger *zap.SugaredLogger
)

func init() {
	flag.StringVar(&env, "env", "dev", "obtain the current environment parameters e.g. 'prod','test','dev'")

	flag.Parse()

	app.Init(env)
	WsViper = config.InitCustomViper("ws", "")
	log.InitZap()
	logger = log.GetZap("ws")

	addr = WsViper.GetString("server.addr")
	path = WsViper.GetString("server.path")
}

func handler(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		logger.Warnf("upgrade err:%v", err)
		return
	}
	//创建session
	ctx := context.Background()

	ws.Run(ctx, conn) //这里启动了多个协程，通过ctx控制关闭
}

// 会话主程
func main() {
	signal.Notify(signalChan, syscall.SIGHUP, syscall.SIGINT, syscall.SIGQUIT, syscall.SIGKILL, syscall.SIGTERM)
	go app.GracefulShutdown(signalChan, Shutdown)

	logger.Infof("Starting Ws Server at [%s%s]", addr, path)
	http.HandleFunc(path, handler)
	err := http.ListenAndServe(addr, nil)
	if err != nil {
		panic(err)
	}
}

func Shutdown() {
	logger.Info("Ws Server Shutdown......")
	_, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
}
