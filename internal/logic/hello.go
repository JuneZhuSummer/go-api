package logic

import (
	"context"
	"go-api/errors"
	"go-api/internal/mapper"
	"go-api/internal/types/request"
	"go-api/internal/types/response"
	"go-api/pkg/log"
	"go.uber.org/zap"
)

type helloLogic struct {
	helloMapper mapper.HelloMapper

	logger *zap.SugaredLogger
}

func NewHelloLogic(helloMapper mapper.HelloMapper) HelloLogic {
	return &helloLogic{
		helloMapper: helloMapper,

		logger: log.Zap(),
	}
}

func (l *helloLogic) HelloAPI() (resp *response.HelloResponse, errCode int) {
	res, err := l.helloMapper.GetHelloWorld()
	if err != nil {
		return nil, errors.ErrorUnknown
	}

	return &response.HelloResponse{Word: res}, errors.StatusSuccess
}

func (l *helloLogic) HelloMock(ctx context.Context, request *request.HelloMockRequest) (resp *response.HelloMockResponse, errCode int) {
	account, err := l.helloMapper.GetAccountByNickname(ctx, request.Nickname)
	if err != nil {
		l.logger.Warn(err)
		return nil, errors.ErrorUnknown
	}
	if account == nil {
		return nil, errors.ErrorUserNotExist
	}
	resp = &response.HelloMockResponse{
		ID:       account.ID,
		Nickname: account.Nickname,
		Avatar:   account.Avatar,
	}
	return resp, errors.StatusSuccess
}
