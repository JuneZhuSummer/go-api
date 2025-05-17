//go:build unix

package log

import (
	"fmt"
	"go-api/pkg/app"
	"os"
	"syscall"
)

func initPanicLog() {
	filepath := app.APP.Path + DefaultLogPath
	e, _ := os.OpenFile(fmt.Sprintf("%s/panic.log", filepath), os.O_WRONLY|os.O_APPEND|os.O_CREATE|os.O_SYNC, 0755)
	err := syscall.Dup2(int(e.Fd()), 2)
	if err != nil {
		panic(err)
	}
}
