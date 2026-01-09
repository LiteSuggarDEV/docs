# Function Calling

SuggarChat 允许您使用 LLM 模型进行函数调用，并返回或自行处理结果。

## 类定义

### 类型定义

```python
T = TypeVar("T", str, int, float, bool, list, dict)
OPEN_AI_PARAM_TYPE = Literal[
    "string", "number", "integer", "boolean", "array", "object"
]
```

### Function 定义类(传入 LLM 模型参数)

```python
class FunctionPropertySchema(BaseModel, Generic[T]):
    """校验函数参数的属性"""

    type: Literal[OPEN_AI_PARAM_TYPE] | list[OPEN_AI_PARAM_TYPE]
    description: str
    enum: list[T] | None
    properties: dict[str, FunctionPropertySchema] | None
    items: FunctionPropertySchema | None
    minItems: int | None
    maxItems: int | None
    uniqueItems: bool | None
    required: list[str] | None
class FunctionParametersSchema(BaseModel):
    """校验函数参数结构"""

    type: Literal["object"] = "object"
    properties: dict[str, FunctionPropertySchema] | None
    required: list[str]


class FunctionDefinitionSchema(BaseModel):
    """校验函数定义结构"""

    name: str
    description: str
    parameters: FunctionParametersSchema


class ToolFunctionSchema(BaseModel):
    """校验完整的function字段结构"""

    function: FunctionDefinitionSchema
    type: Literal["function"] = "function"
    strict: bool
```

### Tool 数据（供 Chat 插件识别）

```python
class ToolData(BaseModel):
    """用于注册Tool的数据模型"""

    data: ToolFunctionSchema = # 工具元数据
    func: (
        Callable[[dict[str, Any]], Awaitable[str]]
        | Callable[[ToolContext], Awaitable[str | None]]
    )
    custom_run: bool# 是否自定义运行，如果启用则会传入Context类而不是dict，并且不会强制要求返回值。
```

### Tool Context (在CustomRun模式下)

```python
@dataclass
class ToolContext:
    data: dict[str, Any] = field() # 函数Arguments
    event: SuggarEvent = field() # 触发事件
    matcher: Matcher = field() # SuggarMatcher实例(并非NoneBot的Matcher)
```

## 调用 Tool

### 在调用之前

在调用之前，您需要定义函数元数据，并注册工具。

```python
from amrita.plugins.chat.API import ToolData, ToolsManager, ToolFunctionSchema

YOUR_TOOL: ToolFunctionSchema = ...

async def YOUR_FUNC(params: dict[str, Any]) -> str: # 函数
    ...

tool_data = ToolData(
    data=YOUR_TOOL, # 我们假设函数元数据已经定义，具体参考下文示例。
    func=YOUR_FUNC,
    )

ToolsManager().register_tool(tool_data)

```

### 常规调用

::: details 点击查看类型

您的函数应为：`Callable[dict[str, Any], Awaitable[str]]`

:::

常规函数调用功能需要您实现一个函数，该函数将接收一个参数，为`dict[str, Any]`，并返回一个字符串，该字符串包含函数调用的返回值，将被加入模型上下文。

```python
from amrita.plugins.chat.API import ToolData, ToolsManager, ToolFunctionSchema

YOUT_META: ToolFunctionSchema = ...

async def YOUR_FUNC(params: dict[str, Any]) -> str: # 函数
    return f"YOUR_FUNC_RESULT: {params}"

tool_data = ToolData(data=YOUR_META, func=YOUR_FUNC)

ToolsManager().register_tool(tool_data)
```

### 自定义运行模式

自定义运行模式允许您更加自由地运行函数，并可选返回值。

::: details 点击查看类型

您的函数应为：`Callable[[ToolContext], Awaitable[str | None]]`

:::

```python
from amrita.plugins.chat.API import ToolData, ToolsManager, ToolFunctionSchema, ToolContext

YOUR_TOOL: ToolFunctionSchema = ...

async def YOUR_FUNC(context: ToolContext) -> str | None:
    ...

DATA = ToolData(data=YOUR_TOOL, func=YOUR_FUNC, custom_run=True)

ToolsManager().register_tool(DATA)
```

## 示例

### 示例 Function 定义

```python
YOUR_TOOL =  ToolFunctionSchema(
    type="function",
    function=FunctionDefinitionSchema(
        description="你好，世界，这里是一个测试函数。",
        name="YOUR_NAME",
        parameters=FunctionParametersSchema(
            properties={
                "content": FunctionPropertySchema(
                    description="YOUR_DESC",
                    type="string",
                ),
            },
            required=["content"],
            type="object",
        ),
    ),
)
```

### 示例ToolData

```python
tool_data = ToolData(data=YOUR_TOOL, func=YOUR_FUNC)
ToolsManager().register_tool(tool_data)
```

### 示例函数

#### 常规Tool

```python
async def YOUR_FUNC(params: dict[str, Any]) -> str:
    return f"YOUR_FUNC_RESULT: {params}"
```

#### 自定义运行

```python
async def YOUR_FUNC(context: ToolContext) -> str | None:
    if context.event.user_id == 123456789:
        return "是我喜欢的用户，直接返回"
    else:
        return None # 这里只是为了显式返回None，用于对比。
```