package request

import "github.com/gin-gonic/gin"

type IRequest[T any] interface {
	Validate(ctx *gin.Context) (*T, error)
}
