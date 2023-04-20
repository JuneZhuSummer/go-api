package errors

var ErrorCodeMessage = map[int]string{
	StatusSuccess: "Success",
	ErrorUnknown:  "Unknown Error",
}

const (
	StatusSuccess = 0
	ErrorUnknown  = -1
)

// 后端基础错误

const (
	ErrorParamInvalid = 100001
)
