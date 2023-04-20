package model

import (
	"time"
)

// APIUser 用户表
type APIUser struct {
	ID         int       `gorm:"autoIncrement:true;primaryKey;column:id;type:int(11) unsigned;not null;comment:'id'" json:"id"`           // id
	Openid     string    `gorm:"unique;column:openid;type:varchar(255);not null;default:'';comment:'公开id'" json:"openid"`                 // 公开id
	Email      string    `gorm:"unique;column:email;type:varchar(255);not null;default:'';comment:'邮箱'" json:"email"`                     // 邮箱
	Nick       string    `gorm:"unique;column:nick;type:varchar(255);not null;default:'';comment:'昵称'" json:"nick"`                       // 昵称
	Avatar     string    `gorm:"column:avatar;type:varchar(255);not null;default:'';comment:'头像'" json:"avatar"`                          // 头像
	Type       uint8     `gorm:"column:type;type:tinyint(3) unsigned;not null;default:1;comment:'账号类型 1-普通用户 2-企业用户 3-内部用户'" json:"type"` // 账号类型 1-普通用户 2-企业用户 3-内部用户
	Status     uint8     `gorm:"column:status;type:tinyint(3) unsigned;not null;default:1;comment:'账号状态 1-开启 2-冻结 3-注销'" json:"status"`   // 账号状态 1-开启 2-冻结 3-注销
	RegIP      string    `gorm:"column:reg_ip;type:varchar(255);not null;default:'';comment:'注册IP'" json:"reg_ip"`                        // 注册IP
	RegDevice  string    `gorm:"column:reg_device;type:varchar(255);not null;default:'';comment:'注册设备标识'" json:"reg_device"`              // 注册设备标识
	RegTime    time.Time `gorm:"column:reg_time;type:datetime(3);not null;comment:'注册时间'" json:"reg_time"`                                // 注册时间
	CreateTime time.Time `gorm:"column:create_time;type:datetime(3);not null;comment:'记录创建时间'" json:"create_time"`                        // 记录创建时间
	UpdateTime time.Time `gorm:"column:update_time;type:datetime(3);not null;comment:'记录修改时间'" json:"update_time"`                        // 记录修改时间
}

// TableName get sql table name.获取数据库表名
func (m *APIUser) TableName() string {
	return "api_user"
}

// APIUserColumns get sql column name.获取数据库列名
var APIUserColumns = struct {
	ID         string
	Openid     string
	Email      string
	Nick       string
	Avatar     string
	Type       string
	Status     string
	RegIP      string
	RegDevice  string
	RegTime    string
	CreateTime string
	UpdateTime string
}{
	ID:         "id",
	Openid:     "openid",
	Email:      "email",
	Nick:       "nick",
	Avatar:     "avatar",
	Type:       "type",
	Status:     "status",
	RegIP:      "reg_ip",
	RegDevice:  "reg_device",
	RegTime:    "reg_time",
	CreateTime: "create_time",
	UpdateTime: "update_time",
}
