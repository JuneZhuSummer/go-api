package data

import (
	"go-api/pkg/app"
	config2 "go-api/pkg/config"
	"go-api/pkg/data"
	"testing"
)

func TestGorm(t *testing.T) {
	app.Init("dev")
	config2.InitViper()
	data.InitGorm()
	db := data.Gorm()
	var res int
	if err := db.Raw("select 1").Scan(&res).Error; err != nil {
		t.Error(err)
	}
	t.Log(res)

	dbApi := data.GetGorm(data.GormDefaultAlias)

	if err := dbApi.Raw("select 1").Scan(&res).Error; err != nil {
		t.Error(err)
	}
	t.Log(res)
}
