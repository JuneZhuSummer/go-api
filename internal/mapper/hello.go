package mapper

import (
	"go-api/pkg/cache"
	"go-api/pkg/data"

	"github.com/go-redis/redis/v8"
	"gorm.io/gorm"
)

type helloMapper struct {
	db  *gorm.DB
	rdb *redis.Client
}

func NewHelloMapper() HelloMapper {
	return &helloMapper{
		db:  data.Gorm(),
		rdb: cache.Redis(),
	}
}

func (m *helloMapper) GetHelloWorld() (string, error) {
	return "Hello Go-API!", nil
}
