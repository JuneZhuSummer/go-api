package response

type HelloResponse struct {
	Word string `json:"word,omitempty"`
}

type HelloMockResponse struct {
	ID       int64  `json:"id"`
	Nickname string `json:"nickname"`
	Avatar   string `json:"avatar"`
}
