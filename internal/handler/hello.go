package handler

import (
	"go-api/errors"
	"go-api/internal/logic"
	"go-api/internal/types/request"
	"go-api/internal/types/response"
	"go-api/pkg/http"

	"github.com/gin-gonic/gin"
)

type HelloHandler struct {
	helloLogic logic.HelloLogic
}

func NewHelloHandler(helloLogic logic.HelloLogic) *HelloHandler {
	return &HelloHandler{
		helloLogic: helloLogic,
	}
}

// Hello
// @Summary 你好
// @Description 你好
// @Tags Hello
// @Success 200 {object} http.RetMsg{data=response.HelloResponse}
// @Router /hello [GET]
func (h *HelloHandler) Hello(ctx *gin.Context, req *request.HelloRequest) (resp *response.HelloResponse, status *http.Status) {
	resp, errCode := h.helloLogic.HelloAPI()
	if errCode != errors.StatusSuccess {
		return nil, &http.Status{
			ErrorCode: errCode,
			ErrorMsg:  errors.ErrorCodeMessage[errCode],
		}
	}

	return resp, http.StatusOK
}
