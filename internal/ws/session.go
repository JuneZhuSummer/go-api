package ws

import (
	"context"
	"github.com/gorilla/websocket"
	"go-api/pkg/log"
	"go.uber.org/zap"
)

type Session struct {
	ctx    context.Context
	cancel context.CancelFunc

	wsConn *websocket.Conn

	ch chan []byte

	lastPushTS int64

	logger *zap.SugaredLogger
}

func Run(ctx context.Context, wsConn *websocket.Conn) {

	c, cancel := context.WithCancel(ctx)

	s := &Session{
		ctx:        c,
		cancel:     cancel,
		wsConn:     wsConn,
		ch:         make(chan []byte, 1000),
		lastPushTS: 0,
		logger:     log.GetZap("session"),
	}

	//处理请求
	s.deal()

	//主动推送数据
	go s.push()

	//other...
}

func (s *Session) deal() {

	defer func() {
		if err := recover(); err != nil {
			s.logger.Errorf("session deal error: %v", err)
			return
		}
	}()

	for {
		select {
		case <-s.ctx.Done():
			s.wsConn.Close()
			return
		default:
			//todo
		}
	}

}

func (s *Session) push() {

	defer func() {
		if err := recover(); err != nil {
			s.logger.Errorf("session push error: %v", err)
			return
		}
	}()

	for {
		select {
		case <-s.ctx.Done():
			close(s.ch)
			return
		case msg, ok := <-s.ch:
			if !ok {
				s.logger.Warn("session push channel closed")
				return
			}
			err := s.wsConn.WriteMessage(websocket.BinaryMessage, msg)
			if err != nil {
				s.logger.Errorf("session write message error: %v", err)
				return
			}
		}
	}
}
