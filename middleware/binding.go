package middleware

import (
	"go-api/errors"
	"go-api/internal/types/request"
	http2 "go-api/pkg/http"
	"go-api/pkg/log"
	"net/http"
	"reflect"

	"github.com/gin-gonic/gin"
)

type BindingFunc[TReq request.IRequest[TReq], TResp any] func(ctx *gin.Context, req *TReq) (resp TResp, status *http2.Status)

func Binding[TReq request.IRequest[TReq], TResp any](binding BindingFunc[TReq, TResp]) gin.HandlerFunc {
	return func(ctx *gin.Context) {

		var reqT TReq

		// 参数绑定与校验
		req, err := reqT.Validate(ctx)
		if err != nil {
			log.Zap().Debugf("requestUrl: %s, validate err: %s", ctx.Request.URL.String(), err)
			http2.AbortWithError(ctx, &http2.Status{
				HttpStatus: http.StatusOK,
				ErrorCode:  errors.ErrorParamInvalid,
				ErrorMsg:   "",
			})
			return
		}
		if req == nil {
			log.Zap().Debugf("requestUrl: %s, req nil: %s", ctx.Request.URL.String(), reflect.TypeOf(reqT).String())
			http2.AbortWithError(ctx, &http2.Status{
				HttpStatus: http.StatusOK,
				ErrorCode:  errors.ErrorUnknown,
				ErrorMsg:   "",
			})
			return
		}

		data, status := binding(ctx, req)

		if status == nil {
			status = &http2.Status{
				HttpStatus: http.StatusOK,
				ErrorCode:  errors.ErrorUnknown,
				ErrorMsg:   "",
			}
		}

		if status.ErrorCode != errors.StatusSuccess {
			http2.RetError(ctx, data, status)
		} else {
			http2.Ret(ctx, data)
		}
	}
}
