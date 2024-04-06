package cache

import (
	"context"
	"go-api/pkg/app"
	"go-api/pkg/cache"
	config2 "go-api/pkg/config"
	"testing"
)

func TestGoRedis(t *testing.T) {
	app.Init("dev")
	config2.InitViper()
	cache.InitGoRedis()
	rdb := cache.Redis()
	res, err := rdb.Ping(context.Background()).Result()
	if err != nil {
		t.Error(err)
	}
	t.Log(res)

	rdb7 := cache.GetRedis(cache.RedisDefaultAlias, 1)
	res, err = rdb7.Ping(context.Background()).Result()
	if err != nil {
		t.Error(err)
	}
	t.Log(res)
}
