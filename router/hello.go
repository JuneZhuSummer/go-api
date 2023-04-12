package router

import (
	"github.com/gin-gonic/gin"
	"go-api/middleware"
)

func (r *Router) setHelloRouter(router *gin.RouterGroup) {

	router.Use()
	router.GET("hello", middleware.Binding(r.helloHandler.Hello))

}
