package mapper

//go:generate mockgen -source=./ihello.go -destination=../mock/hello_mock.go -package=mock

import "context"

type HelloMapper interface {
	GetHelloWorld() (string, error)
	GetAccountByNickname(ctx context.Context, nickname string) (*Account, error)
}
