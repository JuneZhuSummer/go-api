package router

import (
	"go-api/pkg/http"

	"github.com/gin-gonic/gin"
)

func (r *Router) setHelloRouter(router *gin.RouterGroup) {

	router.Use()
	router.GET("hello", http.Binding(r.helloHandler.Hello))

}
