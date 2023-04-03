package router

import (
	"github.com/gin-gonic/gin"
	"go-api/internal/handler"
)

var swagHandler gin.HandlerFunc

type Router struct {
	helloHandler *handler.HelloHandler
}

func New(helloHandler *handler.HelloHandler) *Router {
	return &Router{
		helloHandler: helloHandler,
	}
}

func (r *Router) Register(rootGroup *gin.RouterGroup) {
	//doc
	r.setSwaggerRouter(rootGroup)

	//hello
	r.setHelloRouter(rootGroup)

}

func (r *Router) setSwaggerRouter(rootGroup *gin.RouterGroup) {
	if swagHandler != nil {
		rootGroup.GET("swagger/*any", swagHandler)
	}
}
