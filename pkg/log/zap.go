package log

import (
	"go-api/pkg/config"
	"os"
	"sync"
	"time"

	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
	"gopkg.in/natefinch/lumberjack.v2"
)

const (
	DefaultLogPath     = "/../runtime/log/"
	DefaultLogFilename = "api"
	DefaultLogSize     = 256 //MB
	DefaultLogBackup   = 20
	DefaultLogLevel    = -1 //debug -1, info 0, warn 1, error 2, dPanic 3, panic 4, fatal 5
	DefaultLogMaxDay   = 15
)

var (
	zapMap  sync.Map //map[filename]*zap.SugaredLogger
	zapOnce sync.Once
)

func init() {
	zapOnce.Do(func() {
		zapMap = sync.Map{}
	})
}

func Zap() *zap.SugaredLogger {
	return GetZap(DefaultLogFilename)
}

func GetZap(filename string) *zap.SugaredLogger {

	if zapper, exist := zapMap.Load(filename); exist {
		return zapper.(*zap.SugaredLogger)
	}

	filepath := config.ApiPath + DefaultLogPath

	if filename == "" {
		filename = config.Configs.Log.Name
		if filename == "" {
			filename = DefaultLogFilename
		}
	}

	maxSize := config.Configs.Log.MaxSize
	if maxSize == 0 {
		maxSize = DefaultLogSize
	}

	maxBackup := config.Configs.Log.MaxBackup
	if maxBackup == 0 {
		maxBackup = DefaultLogBackup
	}

	logLevel := zapcore.Level(config.Configs.Log.Level)
	if logLevel == any(nil) {
		logLevel = zapcore.Level(DefaultLogLevel)
	}

	maxDay := config.Configs.Log.MaxDay
	if maxDay == 0 {
		maxDay = DefaultLogMaxDay
	}

	absolutePath := filepath + filename

	zapper := initZap(absolutePath, maxSize, maxBackup, maxDay, logLevel)
	zapMap.Store(filename, zapper)

	return zapper
}

func initZap(path string, maxSize, maxBackups, maxDay int, logLevel zapcore.Level) *zap.SugaredLogger {
	fileRotateInfo := &lumberjack.Logger{
		Filename:   path + ".log",
		MaxSize:    maxSize,
		MaxAge:     maxDay,
		MaxBackups: maxBackups,
		LocalTime:  true,
	}

	fileRotateError := &lumberjack.Logger{
		Filename:   path + ".error.log",
		MaxSize:    maxSize,
		MaxAge:     maxDay,
		MaxBackups: maxBackups,
		LocalTime:  true,
	}

	WriterSyncersInfo := []zapcore.WriteSyncer{
		zapcore.AddSync(fileRotateInfo),
	}
	WriterSyncersError := []zapcore.WriteSyncer{
		zapcore.AddSync(fileRotateError),
	}

	if config.Configs.Server.Log {
		logLevel = zapcore.DebugLevel
		WriterSyncersInfo = append(WriterSyncersInfo, zapcore.AddSync(os.Stdout))
	}

	coreInfo := zapcore.NewCore(
		zapcore.NewConsoleEncoder(zapcore.EncoderConfig{
			TimeKey:       "T",
			LevelKey:      "L",
			NameKey:       "N",
			CallerKey:     "C",
			MessageKey:    "M",
			StacktraceKey: "S",
			LineEnding:    zapcore.DefaultLineEnding,
			EncodeLevel:   zapcore.CapitalLevelEncoder,
			EncodeTime: func(t time.Time, enc zapcore.PrimitiveArrayEncoder) {
				enc.AppendString(t.Format("2006-01-02 15:04:05.000"))
			},
			EncodeDuration: zapcore.StringDurationEncoder,
			EncodeCaller:   zapcore.ShortCallerEncoder,
		}),
		zapcore.NewMultiWriteSyncer(WriterSyncersInfo...),
		zap.NewAtomicLevelAt(logLevel),
	)
	coreError := zapcore.NewCore(
		zapcore.NewConsoleEncoder(zapcore.EncoderConfig{
			TimeKey:       "T",
			LevelKey:      "L",
			NameKey:       "N",
			CallerKey:     "C",
			MessageKey:    "M",
			StacktraceKey: "S",
			LineEnding:    zapcore.DefaultLineEnding,
			EncodeLevel:   zapcore.CapitalLevelEncoder,
			EncodeTime: func(t time.Time, enc zapcore.PrimitiveArrayEncoder) {
				enc.AppendString(t.Format("2006-01-02 15:04:05.000"))
			},
			EncodeDuration: zapcore.StringDurationEncoder,
			EncodeCaller:   zapcore.ShortCallerEncoder,
		}),
		zapcore.NewMultiWriteSyncer(WriterSyncersError...),
		zap.NewAtomicLevelAt(zap.ErrorLevel),
	)
	core := zapcore.NewTee(coreInfo, coreError)

	return zap.New(core, zap.AddCaller()).Sugar()
}

type ZapOutput struct {
	Logger *zap.SugaredLogger
}

func (t *ZapOutput) Write(p []byte) (n int, err error) {
	t.Logger.Info(string(p))
	return len(p), nil
}
