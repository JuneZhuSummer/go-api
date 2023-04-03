package request

import "github.com/gin-gonic/gin"

type HelloRequest struct {
}

func (r HelloRequest) Validate(ctx *gin.Context) (*HelloRequest, error) {
	return &r, nil
}
