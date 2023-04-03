package data

import (
	config2 "go-api/pkg/config"
	"go-api/pkg/data"
	"testing"
)

func TestGorm(t *testing.T) {
	config2.InitViper("dev")
	data.InitData()
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
