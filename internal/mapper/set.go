package mapper

import (
	"github.com/google/wire"
)

var Set = wire.NewSet(
	NewHelloMapper,
)
