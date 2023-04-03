package logic

import "go-api/internal/types/response"

type HelloLogic interface {
	HelloAPI() (resp *response.HelloResponse, errCode int)
}
