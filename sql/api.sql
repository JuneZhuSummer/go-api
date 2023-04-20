DROP TABLE if EXISTS api_user;

CREATE TABLE `api_user`
(
    `id`          int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
    `openid`      varchar(255) NOT NULL DEFAULT '' COMMENT '公开id',
    `email`       varchar(255) NOT NULL DEFAULT '' COMMENT '邮箱',
    `nick`        varchar(255) NOT NULL DEFAULT '' COMMENT '昵称',
    `avatar`      varchar(255) NOT NULL DEFAULT '' COMMENT '头像',
    `type`        tinyint(3) unsigned NOT NULL DEFAULT '1' COMMENT '账号类型 1-普通用户 2-企业用户 3-内部用户',
    `status`      tinyint(3) unsigned NOT NULL DEFAULT '1' COMMENT '账号状态 1-开启 2-冻结 3-注销',
    `reg_ip`      varchar(255) NOT NULL DEFAULT '' COMMENT '注册IP',
    `reg_device`  varchar(255) NOT NULL DEFAULT '' COMMENT '注册设备标识',
    `reg_time`    datetime(3) NOT NULL ON UPDATE CURRENT_TIMESTAMP (3) COMMENT '注册时间',
    `create_time` datetime(3) NOT NULL ON UPDATE CURRENT_TIMESTAMP (3) COMMENT '记录创建时间',
    `update_time` datetime(3) NOT NULL ON UPDATE CURRENT_TIMESTAMP (3) COMMENT '记录修改时间',
    PRIMARY KEY (`id`),
    UNIQUE KEY `idx_openid` (`openid`) COMMENT 'openid索引',
    UNIQUE KEY `idx_email` (`email`) COMMENT '邮箱索引',
    UNIQUE KEY `idx_nick` (`nick`) COMMENT '昵称索引'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';