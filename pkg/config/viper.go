package config

import (
	"fmt"
	"go-api/pkg/app"

	"github.com/spf13/viper"
)

const (
	defaultConfigFilePath = "/../conf/"
	defaultConfigFilename = "api"
	defaultConfigFileType = "yaml"
)

var (
	Viper = viper.New()

	Configs *Config
)

func InitViper() {
	filename := fmt.Sprintf("%s-%s", defaultConfigFilename, app.APP.ENV)
	Viper.AddConfigPath(app.APP.Path + defaultConfigFilePath)
	Viper.SetConfigFile(app.APP.Path + defaultConfigFilePath + filename + "." + defaultConfigFileType)
	Viper.SetConfigType(defaultConfigFileType)
	if err := Viper.ReadInConfig(); err != nil {
		panic(err)
	}

	if err := Viper.Unmarshal(&Configs); err != nil {
		panic(err)
	}
}

// Config 总配置
type Config struct {
	Server serverConfig `mapstructure:"server"`
	Log    logConfig    `mapstructure:"log"`
	DB     dbConfig     `mapstructure:"db"`
	Cache  cacheConfig  `mapstructure:"cache"`
	Alarm  alarmConfig  `mapstructure:"alarm"`
}

// ServerConfig 服务配置
type serverConfig struct {
	Debug bool   `mapstructure:"debug"` //代码中逻辑使用debug控制不同环境
	Log   bool   `mapstructure:"log"`   //日志单独控制，方便线上随时开启日志，定位问题
	Addr  string `mapstructure:"addr"`  //服务地址
}

// LogConfig 日志配置
type logConfig struct {
	Path      string `mapstructure:"path"`       //日志存放位置
	Name      string `mapstructure:"name"`       //日志默认名称
	MaxSize   int    `mapstructure:"max_size"`   //单个日志文件最大size
	MaxBackup int    `mapstructure:"max_backup"` //日志文件最多存储个数
	Level     int    `mapstructure:"level"`      //日志级别
	MaxDay    int    `mapstructure:"max_day"`    //日志文件最长存储时间
}

// 数据库配置
type dbConfig struct {
	Mysql []mysqlConfig `mapstructure:"mysql"`
}

// mysql配置
type mysqlConfig struct {
	Tag  string    `mapstructure:"tag"`
	Attr mysqlAttr `mapstructure:"attr"`
}

// mysql配置的属性
type mysqlAttr struct {
	Host            string `mapstructure:"host"`              //主机地址
	Port            int    `mapstructure:"port"`              //端口
	Username        string `mapstructure:"username"`          //用户名
	Password        string `mapstructure:"password"`          //密码
	Schema          string `mapstructure:"schema"`            //约束(数据库)
	Charset         string `mapstructure:"charset"`           //字符集
	Location        string `mapstructure:"location"`          //位置
	Timeout         int    `mapstructure:"timeout"`           //连接超时时间
	ParseTime       bool   `mapstructure:"parse_time"`        //是否解析时间
	MaxOpenConn     int    `mapstructure:"max_open_conn"`     //最大连接数
	MaxIdleConn     int    `mapstructure:"max_idle_conn"`     //最大闲置连接数
	ConnMaxLifetime int    `mapstructure:"conn_max_lifetime"` //连接最长维持时间
}

// 缓存配置
type cacheConfig struct {
	Redis []redisConfig `mapstructure:"redis"`
}

// redis配置
type redisConfig struct {
	Tag  string    `mapstructure:"tag"`
	Attr redisAttr `mapstructure:"attr"`
}

// redis配置的属性
type redisAttr struct {
	Host        string `mapstructure:"host"`         //地址
	Port        int    `mapstructure:"port"`         //端口
	Password    string `mapstructure:"password"`     //密码
	DailTimeout int    `mapstructure:"dail_timeout"` //超时时间
	SupportDb   []int  `mapstructure:"support_db"`   //可用库
}

// 告警配置
type alarmConfig struct {
	Dingtalk  dingtalkConfig  `mapstructure:"dingtalk"`
	Larksuite larksuiteConfig `mapstructure:"larksuite"`
	Wechat    wechatConfig    `mapstructure:"wechat"`
}

// 钉钉配置
type dingtalkConfig struct {
	Webhook string `mapstructure:"webhook"` //机器人url
}

// 飞书配置
type larksuiteConfig struct {
	Webhook string `mapstructure:"webhook"` //机器人url
}

// 企业微信配置
type wechatConfig struct {
	Webhook string `mapstructure:"webhook"` //机器人url
}
