package config

import "os"

var (
	ApiPath string
)

func init() {
	pwd, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	ApiPath = pwd
}
