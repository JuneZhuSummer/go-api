package request

import (
	"github.com/gin-gonic/gin"
	"strings"
)

type HelloRequest struct {
}

func (r HelloRequest) Validate(ctx *gin.Context) (*HelloRequest, error) {
	return &r, nil
}

type HelloMockRequest struct {
	Nickname string
}

func (r HelloMockRequest) Validate(ctx *gin.Context) (*HelloMockRequest, error) {
	r.Nickname = strings.TrimSpace(r.Nickname)
	return &r, nil
}
