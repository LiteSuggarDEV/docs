# LiteBot 菜单

> 这是 LiteBot 的菜单列表，包含所有可用的功能和用法。

## 模块列表

- **机器人管理插件**: 管理器（TO 超级管理员：您的每一个操作都会让用户发出尖锐的爆鸣声）

- **Web 功能插件插件**: Web 功能插件插件

- **MC 服务器/玩家查询**: 我的世界服务器状态查询或正版玩家信息查询

- **菜单**: 菜单功能管理器

- **数据插件**: 数据处理功能插件

- **群组插件**: 群组管理插件（群管可用）

- **LiteBot 插件**: LiteBot 本体相关功能插件

### 机器人管理插件

> 管理器（TO 超级管理员：您的每一个操作都会让用户发出尖锐的爆鸣声）

- **退出指定聊群**: 用于退出聊群

  - 用法: `/set_leave [<group-id>|--this]`

- **无用群组清理**: 清理人数小于 20 的无效聊群

  - 用法: `/clean_groups`

- **解封群组**: 用于解封群

  - 用法: `/pardon-group <group-id>`

- **封禁群**: 封禁聊群

  - 用法: `/ban.group <group-id> [原因]`

- **列出黑名单**: 用于列出黑名单

  - 用法: `/blacklist`

- **解封用户**: 用于解封用户

  - 用法: `/pardon-user <user-id>`

- **封禁用户**: 用于封禁用户
  - 用法: `/ban.user <user-id> [原因]`

### Web 功能插件插件

> Web 功能插件插件

- **端口扫描**: 扫描指定主机的端口

  - 用法: `/port [ip:port]`

- **nslookup**: 域名记录查询

  - 用法: `/nslookup <域名/子域名>`

- **ping**: 发送 Ping 包

  - 用法: `/ping <ip/domain> [次数（可选，最大5次）]`

- **httping**: Get 一个网站

  - 用法: `/httping <uri>`

- **whois**: 域名 WHOIS 查询
  - 用法: `/whois <top_domain>`

### MC 服务器/玩家查询

> 我的世界服务器状态查询或正版玩家信息查询

- **mc-uuid 获取**: 获取一个正版玩家的 uuid

  - 用法: `/mc_uuid <player_name>`

- **mc 皮肤头像渲染图**: 获取一个正版玩家的皮肤头像渲染图

  - 用法: `/mc_avatar <player_name>`

- **我的世界基岩版服务器查询**: 获取一个基岩版服务器状态

  - 用法: `/mc_be <server_address>`

- **mc 皮肤渲染图**: 获取一个正版玩家的皮肤渲染图

  - 用法: `/mc_body <player_name>`

- **mc 皮肤**: 获取一个正版玩家的皮肤

  - 用法: `/mc_skin <player_name>`

- **我的世界 java 服务器查询**: 获取一个 Java 版服务器状态
  - 用法: `/mc_java <server_address>`

### 菜单

> 菜单功能管理器

- **Menu**: 展示菜单

  - 用法: `/menu`

- **md**: 渲染 Markdown 为图片

  - 用法: `/md <content>`

- **page**: 显示自定义页面
  - 用法: `/page <name|list>`

### 数据插件

> 数据处理功能插件

- **sha1 加密**: sha1 加密

  - 用法: `/sha1 <text>`

- **qr**: 文本->二维码

  - 用法: `/qr <text>`

- **base64**: Base64 编码解码功能

  - 用法: `/base64 encode/decode [content]`

- **md5 加密**: md5 加密

  - 用法: `/md5 <text>`

- **SHA256 加密**: SHA256 加密
  - 用法: `/SHA256 <text>`

## 群组插件

> 群组管理插件（群管可用）

- **踢出群员**: 踢出群内的指定成员，使用--forever 踢出并永久封禁

  - 用法: `/kick @user [--forever]`

- **协管**: 添加群内的协管权限（赋予没有群管的用户使用 LiteBot 所有需要群管权限功能的权限）

  - 用法: `/subadmin [add|remove|has|list] @[用户]|[用户ID]`

- **禁言群员**: 禁言指定群员（分钟）

  - 用法: `/mute @user 10(正整数)`

- **切换 LiteBot 成员变动监听状态**: 切换 LiteBot 成员变动监听状态

  - 用法: `/welcome on/off`

- **取消验证**: 引用机器人发送的验证消息取消单次验证

  - 用法: `/<REPLY> /skip`

- **撤回消息**: 用机器人撤回一条消息

  - 用法: `/<REPLY> /recall`

- **解禁**: 解除指定群员的禁言

  - 用法: `/unmute @user`

- **切换 LiteBot 启用状态**: 切换 LiteBot 启用状态

  - 用法: `/switch on/off`

- **全体禁言**: 设置全员禁言

  - 用法: `/mute-all`

- **验证码设置**: 入群验证码的配置文件设置(format:0:纯数字 1:字母数字混合 2:纯字母 注：字母均为大小写组合)

  - 用法: `/set_captcha <参数[length|timeout|format]> <值>`

- **入群验证**: 入群验证

  - 用法: `/入群验证 [开启|关闭]`

- **设置入群欢迎消息**: 设置入群欢迎消息

  - 用法: `/set_join_msg <text>`

- **全体解禁**: 解除全员禁言

  - 用法: `/unmute-all`

- **验证特定人**: 验证群内特定成员是否为机器人
  - 用法: `/captcha [@user|<user_id>]`

### LiteBot 插件

> LiteBot 本体相关功能插件

- **LiteBot 状态查询**: 查询 LiteBot 的运行状态
  - 用法: `info`
