package main

import (
	"context"
	"flag"
	_ "go-api/docs"
	"go-api/pkg/cache"
	"go-api/pkg/config"
	"go-api/pkg/data"
	"go-api/pkg/log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"
)

// @title 接口文档
// @version 1.0.0
// @description 接口文档

// @host api.xxx.com
// @BasePath /api

var (
	env string

	signalChan = make(chan os.Signal, 1)

	server *http.Server
)

func init() {
	flag.StringVar(&env, "env", "prod", "obtain the current environment parameters e.g. 'prod','test','dev'")
}

func main() {
	flag.Parse()

	config.InitViper(env)
	data.InitData()
	cache.InitCache()

	signal.Notify(signalChan, os.Interrupt, syscall.SIGTERM)
	go gracefulShutdown()

	app, cancel, err := initServer()
	defer cancel()
	if err != nil {
		panic(err)
	}

	server = app.Start()
	log.Zap().Infof("API Server start at %s", server.Addr)
	if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Zap().Fatalf("start gamefi openapi server failed, err: %s", err)
	}
}

func gracefulShutdown() {
	select {
	case msg := <-signalChan:
		switch msg {
		case syscall.SIGHUP, syscall.SIGINT, syscall.SIGQUIT, syscall.SIGKILL, syscall.SIGTERM:
			log.Zap().Info("API Server Shutdown......")
			ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
			defer cancel()
			if err := server.Shutdown(ctx); err != nil {
				log.Zap().Errorf("API Server Shutdown Error: %+v", err)
			}
		}
		os.Exit(0)
	}
}
