package logic

import "github.com/google/wire"

var Set = wire.NewSet(
	NewHelloLogic,
)
