package mapper

import (
	"context"
	"errors"
	"go-api/internal/model/gorm/model"
	"go-api/pkg/cache"
	"go-api/pkg/data"
	"go-api/pkg/log"
	"go.uber.org/zap"

	"github.com/go-redis/redis/v8"
	"gorm.io/gorm"
)

type helloMapper struct {
	db  *gorm.DB
	rdb *redis.Client

	logger *zap.SugaredLogger
}

func NewHelloMapper() HelloMapper {
	return &helloMapper{
		db:  data.Gorm(),
		rdb: cache.Redis(),

		logger: log.Zap(),
	}
}

func (m *helloMapper) GetHelloWorld() (string, error) {
	return "Hello Go-API!", nil
}

func (m *helloMapper) GetAccountByNickname(ctx context.Context, nickname string) (a *Account, err error) {

	user := model.APIUser{}

	err = m.db.Table("api_user").Where("nick = ?", nickname).First(&user).Error
	if err != nil && !errors.Is(err, gorm.ErrRecordNotFound) {
		m.logger.Warn(err)
		return nil, err
	}
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, nil
	}

	a = &Account{
		ID:       int64(user.ID),
		Nickname: user.Nick,
		Avatar:   user.Avatar,
	}

	return a, nil
}
