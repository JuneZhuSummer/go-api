package config

import (
	"go-api/pkg/app"
	config2 "go-api/pkg/config"
	"testing"
)

func TestConfig(t *testing.T) {
	app.Init("dev")
	config2.InitViper()
	t.Logf("%+v", config2.Configs)
}
