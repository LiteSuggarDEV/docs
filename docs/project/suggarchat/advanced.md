# Sugarchat API 文档

::: details

## Config 类

### get_config()

**参数**

- `value` (str | None): 配置键（可选）

**返回**

- dict | Any: 所有配置字典或指定键的值

**异常**

- KeyError: 指定键不存在时抛出

---

### set_config()

**参数**

- `key` (str): 配置键
- `value` (str): 配置值

---

### add_model()

**参数**

- `file_name` (str): 模型文件名（不带后缀）
- `data` (dict): 模型配置数据

**异常**

- FileExistsError: 模型文件已存在时抛出

---

### get_models()

**返回**

- list: 模型列表

---

### reg_config()

**参数**

- `key` (str): 配置项名

**异常**

- Exception: 配置项已存在时抛出

---

### reg_model_config()

**参数**

- `key` (str): 配置项名

**异常**

- Exception: 配置项已存在时抛出

---

## Menu 类

### reg_menu()

**参数**

- `cmd_name` (str): 命令名称
- `describe` (str): 描述文本

**返回**

- Menu: 支持链式调用的实例

---

## Admin 类

### send_with()

**参数**

- `msg` (str): 消息内容

**返回**

- Admin: 支持链式调用的实例

---

### send_error()

**参数**

- `msg` (str): 错误消息内容

**返回**

- Admin: 支持链式调用的实例

---

### is_admin()

**参数**

- `user_id` (int): 用户 ID

**返回**

- bool: 管理员状态

---

### add_admin()

**参数**

- `user_id` (int): 用户 ID

**返回**

- Admin: 支持链式调用的实例

---

## Chat 类

### get_msg()

**参数**

- `prompt` (str): 提示词
- `message` (list): 消息列表

**返回**

- Any: LLM 响应内容

---

### get_msg_on_list()

**参数**

- `message` (list): 消息列表

**返回**

- Any: LLM 响应内容

:::

## 适配器

什么是适配器？
适配器是 SuggarChat 与模型接口沟通的桥梁，协议依靠适配器

### 规范

适配器规范定义了适配器应该实现的功能，用作与模型沟通的桥梁，在 3.2.0 进行了重构。继承自 ModelAdapter 时会自动注册模型适配器，您无需手动实现注册。

exapmle:

```python
from nonebot import require
from typing import Any, Iterable
require("amrita.plugins.chat")

from amrita.plugins.chat.API import ModelAdapter, UniResponse

class YourAdapter(ModelAdapter):
    # 需要实现call_api方法以及get_adapter_protocol()静态方法

    async def call_api(self, messages: Iterable[Any]) -> UniResponse:
        ...

    async def call_tools(self, tools: Iterable[Any], tool_choice: ...) -> UniResponse:
        ...
        # 可选实现

    def get_adapter_protocol() -> str | tuple[str, ...]:
        ...

```

## SuggarMatcher

- Suggar 聊天事件钩子实现了一个简单的依赖注入 Matcher 功能，可以注册处理器函数，并进行额外处理，可以实现对于 SuggarChat 功能的扩展。

```python
from nonebot import logger
from nonebot.plugin import require

require("amrita.plugins.chat")
from amrita.plugins.chat.event import (
    BeforeChatEvent,
    BeforePokeEvent,
    ChatEvent,
    PokeEvent,
)
from amrita.plugins.chat.on_event import (
    on_before_chat,
    on_before_poke,
    on_chat,
    on_poke,
)


@on_poke(priority=10).handle()
async def _(event: PokeEvent):
    logger.info("戳了！")
    logger.info(event)


@on_before_poke(priority=10).handle()
async def _(event: BeforePokeEvent):
    logger.info("现在在获取模型的回复之前！")
    logger.info(event)


@on_before_chat(priority=10).handle()
async def _(event: BeforeChatEvent):
    logger.info("现在在获取模型的回复之前！")
    logger.info(event)


@on_chat(priority=10).handle()
async def _(event: ChatEvent):
    logger.info("收到聊天事件!")
    logger.info(event)


```

## Function Calling(`amrita.plugins.chat.API`)

请见[Function Calling](./function_calling)一章