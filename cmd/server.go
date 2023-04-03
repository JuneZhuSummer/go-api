package main

import (
	"fmt"
	"go-api/pkg/config"
	"go-api/pkg/log"
	"go-api/router"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

type Server struct {
	engine    *gin.Engine
	apiRouter *router.Router
}

func (s *Server) Start() *http.Server {
	routerGroup := s.engine.Group("/api")
	s.apiRouter.Register(routerGroup)

	return &http.Server{
		Addr:         config.Configs.Server.Addr,
		Handler:      s.engine,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
	}
}

func New(apiRouter *router.Router) *Server {
	var ginMode string
	if config.Configs.Server.Log {
		ginMode = gin.DebugMode
	} else {
		ginMode = gin.ReleaseMode
	}
	gin.SetMode(ginMode)
	engine := gin.New()
	engine.Use(gin.Recovery())
	if ginMode != gin.ReleaseMode {
		handlerFunc := gin.LoggerWithConfig(gin.LoggerConfig{
			Formatter: func(params gin.LogFormatterParams) string {
				return fmt.Sprintf("%s|%s|%d|%s\n",
					params.Method,
					params.Path,
					params.StatusCode,
					params.ClientIP,
				)
			},
			Output: &log.ZapOutput{Logger: log.Zap()},
		})
		engine.Use(handlerFunc)
	}

	return &Server{
		engine:    engine,
		apiRouter: apiRouter,
	}
}
