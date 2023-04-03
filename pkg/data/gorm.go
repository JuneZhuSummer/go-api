package data

import (
	"context"
	"fmt"
	"go-api/pkg/config"
	"go-api/pkg/log"
	"sync"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"go.uber.org/zap"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

const (
	GormDefaultAlias = "api"

	GormLogName = "gorm"
)

var (
	dbMap  *sync.Map
	dbOnce sync.Once
)

func InitData() {
	if dbMap == nil {
		dbOnce.Do(func() {
			initDBMap()
		})
	}
}

func Gorm() *gorm.DB {
	return GetGorm(GormDefaultAlias)
}

func GetGorm(tag string) *gorm.DB {
	if db, exist := dbMap.Load(tag); exist {
		return db.(*gorm.DB)
	}
	return nil
}

func initDBMap() {
	if config.Configs.DB.Mysql == nil {
		return
	}

	dbMap = &sync.Map{}
	for _, c := range config.Configs.DB.Mysql {
		if c.Tag == "" {
			continue
		}

		dsn := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=%s&loc=%s&timeout=%ds&parseTime=%v",
			c.Attr.Username, c.Attr.Password, c.Attr.Host,
			c.Attr.Port, c.Attr.Schema, c.Attr.Charset,
			c.Attr.Location, c.Attr.Timeout, c.Attr.ParseTime)
		gormDb, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
			Logger: &Logger{
				SugaredLogger: log.GetZap(GormLogName),
			},
		})
		if err != nil {
			panic(err)
		}

		if c.Attr.ConnMaxLifetime == 0 {
			c.Attr.ConnMaxLifetime = 3600 * 6
		}
		if c.Attr.MaxOpenConn == 0 {
			c.Attr.MaxOpenConn = 20
		}
		if c.Attr.MaxIdleConn == 0 {
			c.Attr.MaxIdleConn = 10
		}
		sqlDb, _ := gormDb.DB()
		sqlDb.SetConnMaxLifetime(time.Duration(c.Attr.ConnMaxLifetime) * time.Second)
		sqlDb.SetMaxOpenConns(c.Attr.MaxOpenConn)
		sqlDb.SetMaxIdleConns(c.Attr.MaxIdleConn)
		dbMap.Store(c.Tag, gormDb)
		log.Zap().Infof("mysql %s init: %+v", c.Tag, c)
	}

	return
}

// Logger 自定义日志
type Logger struct {
	*zap.SugaredLogger
}

func (t *Logger) LogMode(logger.LogLevel) logger.Interface {
	return nil
}
func (t *Logger) Info(c context.Context, s string, i ...interface{}) {
}
func (t *Logger) Warn(c context.Context, s string, i ...interface{}) {
}
func (t *Logger) Error(c context.Context, s string, i ...interface{}) {
}
func (t *Logger) Trace(c context.Context, begin time.Time, fc func() (sql string, rowsAffected int64), err error) {
	s, r := fc()
	log.GetZap(GormLogName).Debugf("%dms, sql: %s rowsAffected: %d", time.Now().Sub(begin).Milliseconds(), s, r)
}
