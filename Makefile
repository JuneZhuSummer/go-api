.PHONY: install
install:
	go install github.com/xxjwxc/gormt@master
	go install github.com/google/wire/cmd/wire@latest
	go install github.com/golang/mock/mockgen


.PHONY: swagger
swagger:
	swag init -g ./cmd/main.go -o ./docs --generatedTime
	swag fmt

.PHONY: generate
generate:
	go generate ./..
