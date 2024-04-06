package mapper

type Account struct {
	ID       int64  `json:"ID,omitempty"`
	Nickname string `json:"nickname,omitempty"`
	Avatar   string `json:"avatar,omitempty"`
}
