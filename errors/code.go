package errors

var ErrorCodeMessage = map[int]string{
	StatusSuccess: "Success",
	ErrorUnknown:  "Unknown Error",
}

const (
	StatusSuccess = 0
	ErrorUnknown  = 500000
)

// 后端基础错误

const (
	ErrorParamInvalid = 100000
)
