package middleware

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"time"
)

func Cors() gin.HandlerFunc {
	c := cors.Config{
		// AllowAllOrigins: true,
		// 接受哪些域名的请求
		AllowOrigins:  []string{"http://localhost:8867"},
		AllowMethods:  []string{"GET", "POST", "PUT", "DELETE", "PATCH"},
		AllowHeaders:  []string{"Content-Type", "Access-Token", "Authorization"},
		ExposeHeaders: []string{"Content-Length"},
		// 是否允许发送Cookie
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "https://github.com"
		},
		MaxAge: 6 * time.Hour,
	}

	return cors.New(c)
}
