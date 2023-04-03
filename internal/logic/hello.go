package logic

import (
	"go-api/errors"
	"go-api/internal/mapper"
	"go-api/internal/types/response"
)

type helloLogic struct {
	helloMapper mapper.HelloMapper
}

func NewHelloLogic(helloMapper mapper.HelloMapper) HelloLogic {
	return &helloLogic{helloMapper: helloMapper}
}

func (l *helloLogic) HelloAPI() (resp *response.HelloResponse, errCode int) {
	res, err := l.helloMapper.GetHelloWorld()
	if err != nil {
		return nil, errors.ErrorUnknown
	}

	return &response.HelloResponse{Word: res}, errors.StatusSuccess
}
