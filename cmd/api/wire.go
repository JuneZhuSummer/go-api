//go:build wireinject
// +build wireinject

package main

import (
	"go-api/internal/handler"
	"go-api/internal/logic"
	"go-api/internal/mapper"
	"go-api/router"

	"github.com/google/wire"
)

// 初始化服务器
func initServer() (s *Server, cancel func(), err error) {
	panic(wire.Build(
		mapper.Set,
		logic.Set,
		handler.Set,
		New,
		router.New,
	))
	return
}
