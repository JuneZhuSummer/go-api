package app

import (
	"os"
	"path/filepath"
)

var (
	APP *app
)

type app struct {
	ENV      string
	Hostname string
	Path     string
	FileName string
}

func Init(env string) {
	hostname, err := os.Hostname()
	if err != nil {
		panic(err)
	}

	abspath, err := filepath.Abs(os.Args[0])
	if err != nil {
		panic(err)
	}

	dir, file := filepath.Split(abspath)

	APP = &app{
		ENV:      env,
		Hostname: hostname,
		Path:     dir[:len(dir)-1],
		FileName: file,
	}
}
