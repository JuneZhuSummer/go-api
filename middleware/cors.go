package middleware

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"go-api/pkg/config"
	"net/http"
)

var (
	//todo 可在配置文件读取允许跨域列表
	allowOrigins = []string{
		"http://127.0.0.1:8867",
		"https://127.0.0.1:8867",
		"http://127.0.0.1:8868",
		"https://127.0.0.1:8868",
	}

	allowMethods = []string{
		http.MethodGet,
		http.MethodPost,
		http.MethodPut,
		http.MethodDelete,
		http.MethodOptions,

		http.MethodPatch, // RFC 5789
	}

	allowHeaders = []string{
		"Content-Type",
		"Access-Token",
		"Authorization",
	}

	exposeHeaders = []string{
		"Content-Length",
	}
)

func Cors() gin.HandlerFunc {
	c := cors.Config{
		AllowMethods: allowMethods,
		AllowHeaders: allowHeaders,
		//安全的头参数
		ExposeHeaders: exposeHeaders,
		//请求是否包含用户凭证
		AllowCredentials: true,
	}

	//开启debug则默认不阻止任何跨域请求
	if config.Configs.Server.Debug {
		c.AllowAllOrigins = true
	} else {
		c.AllowOrigins = allowOrigins
	}

	return cors.New(c)
}
