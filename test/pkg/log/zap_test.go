package log

import (
	config2 "go-api/pkg/config"
	log2 "go-api/pkg/log"
	"testing"
)

func TestZap(t *testing.T) {
	config2.InitViper("dev")

	log2.Zap().Infof("%s", "这是默认日志")
	log2.Zap().Errorf("%s", "这是错误日志")
	log2.Zap().Debugf("%s", "这是debug日志")
	log2.Zap().Fatalf("%s", "这是fatal日志")

	log2.GetZap("test").Infof("%s", "这是默认日志")
	log2.GetZap("test").Errorf("%s", "这是错误日志")
	log2.GetZap("test").Debugf("%s", "这是debug日志")
	log2.GetZap("test").Fatalf("%s", "这是fatal日志")
}
