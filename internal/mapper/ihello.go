package mapper

type HelloMapper interface {
	GetHelloWorld() (string, error)
}
