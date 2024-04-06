package logic

import (
	"context"
	"github.com/golang/mock/gomock"
	"go-api/errors"
	"go-api/internal/mapper"
	"go-api/internal/mock"
	"go-api/internal/types/request"
	"go-api/internal/types/response"
	"go.uber.org/zap"
	"reflect"
	"testing"
)

func Test_helloLogic_HelloMock(t *testing.T) {
	ctx := context.Background()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	helloMapper := mock.NewMockHelloMapper(ctrl)

	//stubs 1
	order1 := helloMapper.EXPECT().GetAccountByNickname(ctx, gomock.Eq("June")).Return(
		&mapper.Account{
			ID:       1,
			Nickname: "June",
			Avatar:   "/img/1.png",
		},
		nil,
	).AnyTimes()

	//stubs 2
	order2 := helloMapper.EXPECT().GetAccountByNickname(ctx, gomock.Eq("John")).Return(
		nil,
		nil,
	).AnyTimes()

	//...可根据实际情况灵活打桩

	gomock.InOrder(order1, order2)

	type fields struct {
		helloMapper mapper.HelloMapper
		logger      *zap.SugaredLogger
	}
	type args struct {
		ctx     context.Context
		request *request.HelloMockRequest
	}
	tests := []struct {
		name        string
		fields      fields
		args        args
		wantResp    *response.HelloMockResponse
		wantErrCode int
	}{
		{
			name: "case1",
			fields: fields{
				helloMapper: helloMapper,
			},
			args: args{
				ctx: ctx,
				request: &request.HelloMockRequest{
					Nickname: "June",
				},
			},
			wantResp: &response.HelloMockResponse{
				ID:       1,
				Nickname: "June",
				Avatar:   "/img/1.png",
			},
			wantErrCode: errors.StatusSuccess,
		},
		{
			name: "case2",
			fields: fields{
				helloMapper: helloMapper,
			},
			args: args{
				ctx: ctx,
				request: &request.HelloMockRequest{
					Nickname: "John",
				},
			},
			wantResp:    nil,
			wantErrCode: errors.ErrorUserNotExist,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			l := &helloLogic{
				helloMapper: tt.fields.helloMapper,
				logger:      tt.fields.logger,
			}
			gotResp, gotErrCode := l.HelloMock(tt.args.ctx, tt.args.request)
			if !reflect.DeepEqual(gotResp, tt.wantResp) {
				t.Errorf("HelloMock() gotResp = %v, want %v", gotResp, tt.wantResp)
			}
			if gotErrCode != tt.wantErrCode {
				t.Errorf("HelloMock() gotErrCode = %v, want %v", gotErrCode, tt.wantErrCode)
			}
		})
	}
}
