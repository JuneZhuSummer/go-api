// Code generated by MockGen. DO NOT EDIT.
// Source: ./ihello.go

// Package mock is a generated GoMock package.
package mock

import (
	context "context"
	mapper "go-api/internal/mapper"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
)

// MockHelloMapper is a mock of HelloMapper interface.
type MockHelloMapper struct {
	ctrl     *gomock.Controller
	recorder *MockHelloMapperMockRecorder
}

// MockHelloMapperMockRecorder is the mock recorder for MockHelloMapper.
type MockHelloMapperMockRecorder struct {
	mock *MockHelloMapper
}

// NewMockHelloMapper creates a new mock instance.
func NewMockHelloMapper(ctrl *gomock.Controller) *MockHelloMapper {
	mock := &MockHelloMapper{ctrl: ctrl}
	mock.recorder = &MockHelloMapperMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockHelloMapper) EXPECT() *MockHelloMapperMockRecorder {
	return m.recorder
}

// GetAccountByNickname mocks base method.
func (m *MockHelloMapper) GetAccountByNickname(ctx context.Context, nickname string) (*mapper.Account, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetAccountByNickname", ctx, nickname)
	ret0, _ := ret[0].(*mapper.Account)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetAccountByNickname indicates an expected call of GetAccountByNickname.
func (mr *MockHelloMapperMockRecorder) GetAccountByNickname(ctx, nickname interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetAccountByNickname", reflect.TypeOf((*MockHelloMapper)(nil).GetAccountByNickname), ctx, nickname)
}

// GetHelloWorld mocks base method.
func (m *MockHelloMapper) GetHelloWorld() (string, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetHelloWorld")
	ret0, _ := ret[0].(string)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetHelloWorld indicates an expected call of GetHelloWorld.
func (mr *MockHelloMapperMockRecorder) GetHelloWorld() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetHelloWorld", reflect.TypeOf((*MockHelloMapper)(nil).GetHelloWorld))
}
