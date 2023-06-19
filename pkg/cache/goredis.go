package cache

import (
	"fmt"
	"go-api/pkg/config"
	"go-api/pkg/log"
	"sync"
	"time"

	"github.com/go-redis/redis/v8"
)

var (
	redisMap  map[string]map[int]*redis.Client
	redisMu   sync.RWMutex
	redisOnce sync.Once
)

const (
	RedisDefaultAlias = "api"
)

func InitGoRedis() {
	if redisMap == nil {
		redisOnce.Do(func() {
			initRedis()
		})
	}
}

func Redis() *redis.Client {
	return GetRedis(RedisDefaultAlias, 0)
}

func GetRedis(alias string, db int) *redis.Client {
	redisMu.RLock()
	defer redisMu.RUnlock()
	if redisClient, ok := redisMap[alias][db]; ok {
		return redisClient
	}
	return nil
}

func initRedis() {
	if config.Configs.Cache.Redis == nil {
		return
	}

	redisMap = make(map[string]map[int]*redis.Client)
	for _, c := range config.Configs.Cache.Redis {
		redisMap[c.Tag] = make(map[int]*redis.Client)
		for _, db := range c.Attr.SupportDb {
			redisMap[c.Tag][db] = redis.NewClient(&redis.Options{
				Addr:        fmt.Sprintf("%s:%d", c.Attr.Host, c.Attr.Port),
				Password:    c.Attr.Password,
				DB:          db,
				DialTimeout: time.Duration(c.Attr.DailTimeout) * time.Second,
			})
		}
		log.Zap().Infof("redis %s init: %+v", c.Tag, c)
	}
}
