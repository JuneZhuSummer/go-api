package http

import (
	"go-api/errors"
	"go-api/internal/types/request"
	"go-api/pkg/log"
	"net/http"
	"reflect"

	"github.com/gin-gonic/gin"
)

type BindingFunc[TReq request.IRequest[TReq], TResp any] func(ctx *gin.Context, req *TReq) (resp TResp, status *Status)

func Binding[TReq request.IRequest[TReq], TResp any](binding BindingFunc[TReq, TResp]) gin.HandlerFunc {
	return func(ctx *gin.Context) {

		var reqT TReq

		// 参数绑定与校验
		req, err := reqT.Validate(ctx)
		if err != nil {
			log.Zap().Debugf("requestUrl: %s, validate err: %s", ctx.Request.URL.String(), err)
			AbortWithError(ctx, &Status{
				HttpStatus: http.StatusOK,
				ErrorCode:  errors.ErrorParamInvalid,
				ErrorMsg:   "",
			})
			return
		}
		if req == nil {
			log.Zap().Debugf("requestUrl: %s, req nil: %s", ctx.Request.URL.String(), reflect.TypeOf(reqT).String())
			AbortWithError(ctx, &Status{
				HttpStatus: http.StatusOK,
				ErrorCode:  errors.ErrorUnknown,
				ErrorMsg:   "",
			})
			return
		}

		data, status := binding(ctx, req)

		if status == nil {
			status = &Status{
				HttpStatus: http.StatusOK,
				ErrorCode:  errors.ErrorUnknown,
				ErrorMsg:   "",
			}
		}

		if status.ErrorCode != errors.StatusSuccess {
			RetError(ctx, data, status)
		} else {
			Ret(ctx, data)
		}
	}
}
