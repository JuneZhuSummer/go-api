package config

import (
	config2 "go-api/pkg/config"
	"testing"
)

func TestConfig(t *testing.T) {
	config2.InitViper("dev")
	t.Logf("%+v", config2.ApiPath)
	t.Logf("%+v", config2.Configs)
}
