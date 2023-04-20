.PHONY: install
install:
	go install github.com/xxjwxc/gormt@master
	go install github.com/google/wire/cmd/wire@latest


.PHONY: swagger
swagger:
	swag init -g ./cmd/main.go -o ./docs --generatedTime
	swag fmt
