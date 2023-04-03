package http

import (
	"go-api/errors"
	"net/http"

	"github.com/gin-gonic/gin"
)

var StatusOK = &Status{
	HttpStatus: http.StatusOK,
	ErrorCode:  errors.StatusSuccess,
}

type Status struct {
	HttpStatus int
	ErrorCode  int
	ErrorMsg   string
}

type RetMsg struct {
	Code    int         `json:"errcode"`
	Message string      `json:"msg"`
	Data    interface{} `json:"data"`
}

type EmptyRetData struct{}

func Ret(ctx *gin.Context, data interface{}) {
	if data == nil {
		data = EmptyRetData{}
	}

	ctx.JSON(http.StatusOK, RetMsg{
		Code:    errors.StatusSuccess,
		Message: errors.ErrorCodeMessage[errors.StatusSuccess],
		Data:    data,
	})
}

func RetError(ctx *gin.Context, data interface{}, status *Status) {
	if status.ErrorMsg == "" {
		if _, ok := errors.ErrorCodeMessage[status.ErrorCode]; ok {
			status.ErrorMsg = errors.ErrorCodeMessage[status.ErrorCode]
		}
	}

	if data == nil {
		data = EmptyRetData{}
	}

	ctx.JSON(http.StatusOK, RetMsg{
		Code:    status.ErrorCode,
		Message: status.ErrorMsg,
		Data:    data,
	})
}

func AbortWithError(ctx *gin.Context, status *Status) {
	if status.ErrorMsg == "" {
		if _, ok := errors.ErrorCodeMessage[status.ErrorCode]; ok {
			status.ErrorMsg = errors.ErrorCodeMessage[status.ErrorCode]
		}
	}

	ctx.AbortWithStatusJSON(http.StatusOK, RetMsg{
		Code:    status.ErrorCode,
		Message: status.ErrorMsg,
		Data:    EmptyRetData{},
	})
}
