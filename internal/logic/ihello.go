package logic

import (
	"context"
	"go-api/internal/types/request"
	"go-api/internal/types/response"
)

type HelloLogic interface {
	HelloAPI() (resp *response.HelloResponse, errCode int)
	HelloMock(ctx context.Context, request *request.HelloMockRequest) (resp *response.HelloMockResponse, errCode int)
}
