# Suggar-NEO

![Suggar](https://raw.githubusercontent.com/LiteSuggarDEV/Suggar-NEO/refs/heads/main/readme_res/b_e0baa0b6de88513d9714babeffb39f37.jpg)

---

> Suggar 重构版

### 如何开始？

1. 克隆仓库 `git clone https://github.com/LiteSuggarDEV/Suggar-NEO.git`
2. 打开文件夹 `cd LiteBot-NEO`
3. 使用 `uv sync` 安装所有依赖
4. 运行 Bot `uv run bot.py`

### 配置

### 配置文件

我们有两个配置文件，一个是 dotenv 文件，一个是 yaml 文件。

**1.dotenv 文件**

参考.env.example（bot 启动时会自动创建基于.env.example 的.env，请不要修改.env.example，这可能会为后期更新带来麻烦）

```dotenv
DRIVER=~fastapi
HOST=0.0.0.0
PORT=54321
LOCALSTORE_CONFIG_DIR=./config
LOCALSTORE_USE_CWD=true
COMMAND_SEP=[".", " ",""]
SQLALCHEMY_DATABASE_URL=sqlite+aiosqlite:///data.db
```

说明：

1. `DRIVER`: 运行时使用的 Nonebot 驱动器，LiteBot 仅支持 fastapi
2. `HOST`: 运行时监听的地址
3. `PORT`: 运行时监听的端口（反向 WebSocket）
4. `LOCALSTORE_CONFIG_DIR`: 配置文件存储目录
5. `LOCALSTORE_USE_CWD`: 是否使用当前目录作为配置文件存储目录
6. `COMMAND_SEP`: 命令分隔符
7. `SQLALCHEMY_DATABASE_URL`: 数据库连接字符串

**2.yaml**

```
admins: []
cookies:
  block_msg: []
  cookie: ""
  cookie_check: true
llm_extension:
  avaliable_presets: []
  enable_auto_switch: true
llm_tools:
  enable_report: true
  require_tools: false
notify_group: []
public_group: 0
rate_limit: 6
rate_reply: []
tools_calling: true

```

说明：

1. `admins`: 管理员 QQ（给出了一个示例）
2. `notify_group`: 日志推送群
3. `rate_limit`: 命令频率限制(秒)W
4. `cookies`: Cookie相关配置
   - `block_msg`: 被拦截消息列表
   - `cookie`: Cookie值
   - `cookie_check`: 是否启用Cookie检查
5. `llm_extension`: LLM扩展配置
   - `avaliable_presets`: 可用预设列表
   - `enable_auto_switch`: 是否启用自动切换
6. `llm_tools`: LLM工具配置
   - `enable_report`: 是否启用报告功能
   - `require_tools`: 是否需要工具调用
7. `public_group`: 公共群组ID
8. `rate_reply`: 频率限制回复消息列表
9. `tools_calling`: 是否启用工具调用功能

**3.suggarchat 配置文件**

**[请参考 SuggarChat 文档](https://github.com/LiteSuggarDEV/nonebot_plugin_suggarchat/wiki)**

#### 数据库

- 1. 全新配置

  数据库会自动创建，但是您仍需要注意数据库创建的位置（参考.env.example）。

  e.g.

  ```dotenv
  SQLALCHEMY_DATABASE_URL=sqlite+aiosqlite:///data.db
  ```

- 2. 旧数据库更新/迁移

  **常规迁移更新：**

  开启时 ORM 插件会询问是否更新数据库，勾选 Y 继续。或者使用 nb-cli

  ```shell
  nb orm upgrade
  ```

## 注意事项

**Tools调用**不支持非OPENAI以外的其他协议
