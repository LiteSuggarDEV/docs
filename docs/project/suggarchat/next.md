# 对于已对本插件有所熟悉用户，这个页面将提供更多的功能说明

传入 LLM 的信息格式如下，（这里我提供了 use_base_prompt 选项，如果启用了可以忽略，这个选项将自动在你的 prompt 前插入内容，对消息段作出解释）：

~~不会写就来 QQ 群问群主吧（~~

<details><summary>点击查看详细格式</summary>
可解析的消息段：文字，at，合并转发

<hr />

at+文字：

```plaintext
你好世界@Somebody
```

合并转发（暂不支持解析**嵌套的合并转发消息**）：

```plaintext
\（合并转发
[YYYY-MM-DD hh:mm:ss PM/AM][昵称(QQ号)]说：<内容>
[[YYYY-MM-DD hh:mm:ss PM/AM][昵称(QQ号)]说：<内容>]
）\
......以此类推
```

<hr />

私聊普通消息：

```plaintext
[YYYY-MM-DD weekday hh:mm:ss AM/PM]用户昵称（QQ号）：<内容>
```

私聊引用消息：

```plaintext
私聊普通消息格式+ （（（引用的消息）））：引用消息内其他消息段解析后内容
```

私聊合并转发消息：

```plaintext
私聊普通消息格式+合并转发消息格式
```

<hr />

聊群普通消息：

```plaintext
[管理员/群主/自己/群员][YYYY-MM-DD weekday hh:mm:ss AM/PM][昵称（QQ号）]说:<内容>
```

聊群引用消息：

```plaintext
聊群普通消息格式+ （（（引用的消息）））：引用消息内其他消息段解析后内容
```

聊群合并转发消息：

```plaintext
聊群普通消息格式+合并转发消息格式
```

<hr />

戳一戳消息：

```plaintext
\(戳一戳消息\) 昵称(QQ:qq号) 戳了戳你
```

</details>

### **配置项完整说明**

#### 配置文件(3.1.0+)

```toml
# 基本配置
enable = false # 是否启用 SuggarChat
parse_segments = true # 是否解析消息段（@/合并转发等）
matcher_function = true # 是否启用 SuggarMatcher 功能
preset = "default" # 预设模型配置名称
group_prompt_character = "default" # 群聊提示词模板名称
private_prompt_character = "default" # 私聊提示词模板名称

[preset_extension]
backup_preset_list = [] # 自动切换的备选模型（预设名称）

[default_preset] # 默认预设设置
model = "" # 使用的模型选择
name = "default" # 预设名称
base_url = "" # API 基础地址
api_key = "" # API 密钥
protocol = "__main__" # 协议适配器
thought_chain_model = false # 是否启用特殊的思维链模型优化
multimodal = false # 是否支持多模态模型传图

[default_preset.extra] # 默认预设扩展部分

[session] # 会话控制相关设置
session_control = false # 是否启用会话超时控制
session_control_time = 60 # 会话超时时间（分钟）
session_control_history = 10 # 保留的会话历史最大条数
session_max_tokens = 5000 # 上下文最大 token 数

[cookies] # Cookies 设置，用于检测提示词是否泄露
cookie = "" # Cookie 字符串
enable_cookie = false # 是否启用 Cookie 检测
block_msg = [ # 检测到 Cookie 输出熔断会话时输出的内容
    "喵呜～这个问题有点超出Suggar的理解范围啦(歪头)",
    "（耳朵耷拉）这个...Suggar暂时回答不了呢＞﹏＜",
    "喵？这个话题好像不太适合讨论呢～",
    "（玩手指）突然有点不知道该怎么回答喵...",
    "唔...这个方向Suggar还没学会呢(脸红)",
    "喵～我们聊点别的开心事好不好？",
    "（眨眨眼）这个话题好像被魔法封印了喵！",
    "啊啦～Suggar的知识库这里刚好是空白页呢",
    "（竖起尾巴）检测到未知领域警报喵！",
    "喵呜...这个问题让Suggar的CPU过热啦(＞﹏＜)",
    "（躲到主人身后）这个...好难回答喵...",
    "叮！话题转换卡生效～我们聊点别的喵？",
    "（猫耳抖动）信号接收不良喵...换个频道好吗？",
    "Suggar的喵星语翻译器好像故障了...",
    "（转圈圈）这个问题转晕Suggar啦～",
    "喵？刚才风太大没听清...主人再说点别的？",
    "（翻书状）Suggar的百科全书缺了这一页喵...",
    "啊呀～这个话题被猫毛盖住了看不见喵！",
    "（举起爪子投降）这个领域Suggar认输喵～",
    "检测到话题黑洞...紧急逃离喵！(＞人＜)",
    "（尾巴打结）这个问题好复杂喵...解不开啦",
    "喵呜～Suggar的小脑袋暂时处理不了这个呢",
    "（捂耳朵）不听不听～换话题喵！",
    "这个...Suggar的猫娘执照没覆盖这个领域喵",
    "叮咚！您的话题已进入Suggar的认知盲区～",
    "（装傻）喵？Suggar突然失忆了...",
    "警报！话题超出Suggar的可爱范围～",
    "（数爪子）1、2、3...啊数错了！换个话题喵？",
    "这个方向...Suggar的导航仪失灵了喵(´･_･`)",
    "喵～话题防火墙启动！我们聊点安全的？",
    "（转笔状）这个问题...考试不考喵！跳过～",
    "啊啦～Suggar的答案库正在升级中...",
    "（做鬼脸）略略略～不回答这个喵！",
    "检测到超纲内容...启动保护模式喵！",
    "（抱头蹲防）问题太难了喵！投降～",
    "喵呜...这个秘密要等Suggar升级才能解锁",
    "（举白旗）这个话题Suggar放弃思考～",
    "叮！触发Suggar的防宕机保护机制喵",
    "（装睡）Zzz...突然好困喵...",
    "喵？Suggar的思维天线接收不良...",
    "（画圈圈）这个问题在Suggar的知识圈外...",
    "啊呀～话题偏离主轨道喵！紧急修正～",
    "（翻跟头）问题太难度把Suggar绊倒了喵！",
    "这个...需要猫娘高级权限才能解锁喵～",
    "（擦汗）Suggar的处理器过载了...",
    "喵呜～问题太深奥会卡住Suggar的猫脑",
    "（变魔术状）看！话题消失魔术成功喵～",
]

[encoding_settings]
force_utf8 = true # 是否启用编码强制转换（转换为 UTF-8）

[autoreply] # 自动回复设置
enable = false # 是否允许启用自动回复模式支持
global_enable = false # 是否全局启用自动回复模式
probability = 0.01 # 随机回复概率（0.01 表示 1%）
keyword = "at" # 触发方式：at=被 @ 时触发

[function] # 功能开关
synthesize_forward_message = true # 合成转发消息
nature_chat_style = true # 是否启用自然对话风格
poke_reply = true # 是否启用戳一戳回复功能
enable_group_chat = true # 是否启用群聊功能
enable_private_chat = true # 是否启用私聊功能
allow_custom_prompt = true # 是否允许用户自定义提示词补充部分
use_user_nickname = false # 使用用户QQ昵称而不是群内昵称（仅群聊时）

[extended] # 扩展设置
say_after_self_msg_be_deleted = false # 消息被删除后是否自动回复
group_added_msg = "你好，我是Suggar，欢迎使用SuggarAI聊天机器人..." # 被拉入群组时发送的欢迎消息
send_msg_after_be_invited = false # 被邀请进群后是否发送消息
after_deleted_say_what = [ # 消息被删除后的随机回复内容列表
    "Suggar说错什么话了吗～下次我会注意的呢～",
    "抱歉啦，不小心说错啦～",
    "嘿，发生什么事啦？我",
    "唔，我是不是说错了什么？",
    "纠错时间到，如果我说错了请告诉我！",
    "发生了什么？我刚刚没听清楚呢~",
    "我会记住的，绝对不再说错话啦~",
    "哦，看来我又犯错了，真是不好意思！",
    "哈哈，看来我得多读书了~",
    "哎呀，真是个小口误，别在意哦~",
    "Suggar苯苯的，偶尔说错话很正常嘛！",
    "哎呀，我也有尴尬的时候呢~",
    "希望我能继续为你提供帮助，不要太在意我的小错误哦！",
]

[admin] # 管理员设置
allow_send_to_admin = false # 是否允许向管理群组发送消息
admin_group = 0 # 管理群组 ID
admins = [] # 管理员用户 ID 列表

[llm_config] # LLM 配置
stream = false # 是否启用流式传输
memory_lenth_limit = 50 # 单会话允许存储的最大消息数
use_base_prompt = true # 是否使用基础提示词
max_tokens = 100 # 单次对话 LLM 最大生成 token 数
tokens_count_mode = "bpe" # tokens 计算模式：word（词）/bpe（子词）/char（字符）
enable_tokens_limit = true # 是否启用上下文长度限制
llm_timeout = 60 # LLM 请求超时时间（秒）

[llm_config.tools] # 工具调用设置
enable_tools = true # 启用 Tools 调用
enable_report = true # 启用内置的 NSFW 举报工具
report_then_block = true # 消息被检测违规后是否熔断服务
require_tools = false # 是否要求 LLM 调用至少一个 Tool

[extra] # 额外配置
```

#### 旧版(3.0-3.0.1)

<details>

```toml
preset = "default" # 预设模型配置名称（对应models目录下的json文件，default则为默认配置）
model = "" # 模型选择
base_url = "" # API基础地址
api_key = "" # API密钥
protocol = "__main__" # 协议适配器（默认使用主适配器）
thought_chain_model = false #  特殊的思维链模型优化（移除正文的think标签）
multimodal = false # 多模态模型传图支持
memory_lenth_limit = 50 # 单会话允许存储的最大消息数
enable = true # 是否启用SuggarChat
fake_people = false # 是否允许启用自动回复模式支持
global_fake_people = false # 是否全局启用自动回复模式（推荐使用指令控制可选开启，而不是启用这个选项）
synthesize_forward_message = true #
probability = 0.01 # 随机回复概率（0.01表示1%）
keyword = "at" # 触发方式：at=被@时触发，其他值=以该词开头时必定回复
nature_chat_style = false # 是否启用自然对话风格（正则表达式切文段）
poke_reply = true # 是否启用戳一戳回复功能
enable_group_chat = true # 是否启用群聊功能
enable_private_chat = true # 是否启用私聊功能
allow_custom_prompt = true # 是否允许用户自定义提示词的补充部分
allow_send_to_admin = false # 是否允许向管理群组发送消息
use_base_prompt = true # 是否使用基础提示词（让LLM理解消息段解析）
admin_group = 0 # 管理群组ID
admins = [] # 管理员用户ID列表（也可以在SUPERUSERS设置）
stream = true # 是否启用流式传输
max_tokens = 100 # 单次对话LLM最大生成token数
tokens_count_mode = "bpe" # tokens计算模式：word（词）/bpe（子词）/char（字符）
session_max_tokens = 1500 # 上下文最大token数（误差0.01%（中文实际测试结果））
enable_tokens_limit = true # 是否启用上下文长度限制
llm_timeout = 60 # LLM请求超时时间（秒，具体到适配器是否实现）
say_after_self_msg_be_deleted = false # 消息被删除后是否自动回复
group_added_msg = "你好，我是Suggar，欢迎使用SuggarAI聊天机器人..." # 被拉入群组时发送的欢迎消息
send_msg_after_be_invited = false # 被邀请进群后是否发送消息
parse_segments = true # 是否解析消息段（@/合并转发等）
matcher_function = true # 是否启用SuggarMatcher
session_control = false # 是否启用会话超时控制
session_control_time = 60 # 会话超时时间（分钟）
session_control_history = 10 # 保留的会话历史最大条数
group_prompt_character = "default" # 群聊提示词模板名称（对应group_prompts目录下的txt文件）
private_prompt_character = "default" # 私聊提示词模板名称（对应private_prompts目录下的txt文件）
after_deleted_say_what = [ # 消息被删除后的随机回复内容
    "Suggar说错什么话了吗～下次我会注意的呢～",
    "抱歉啦，不小心说错啦～",
    "嘿，发生什么事啦？我",
    "唔，我是不是说错了什么？",
    "纠错时间到，如果我说错了请告诉我！",
    "发生了什么？我刚刚没听清楚呢~",
    "我会记住的，绝对不再说错话啦~",
    "哦，看来我又犯错了，真是不好意思！",
    "哈哈，看来我得多读书了~",
    "哎呀，真是个小口误，别在意哦~",
    "Suggar苯苯的，偶尔说错话很正常嘛！",
    "哎呀，我也有尴尬的时候呢~",
    "希望我能继续为你提供帮助，不要太在意我的小错误哦！",
]

[preset_extension]
backup_preset_list = [] # 自动切换的备选模型（预设名称）

[tools]
enable_tools = true # 启用Tools调用
enable_report = true # 启用内置的NSFW举报工具（需要设置AdminGroup）
require_tools = false # 是否要求LLM调用至少一个的Tool

[cookies] # 检测提示词是否泄露 '电子水印'检测
cookie = "" # Cookie字符串（需要手动注入到提示词）
enable_cookie = false # 启用
block_msg = [] # 检测到Cookie输出熔断会话时输出什么？

[encoding_settings]
force_utf8 = true # 是否启用编码强制转换(转换为UTF-8)？

```

</details>

## 模型预设

预设文件位于将配置文件目录的 models 文件夹下，预设文件为 json 格式，具体格式如下：

```json
{
  "model": "auto",
  "name": "",
  "base_url": "",
  "api_key": "",
  "procotol": "__main__",
  "thought_chain_model": false,
  "multimodal": false,
  "extra": {}
}
```

### 解释：

- `model`: 使用的模型，默认为 auto，即自动选择。
- `name`: 预设的名字，用于在插件中选择使用。
- `base_url`: OpenAI 协议 API URL，默认为空。
- `api_key`: OpenAI 协议 API 密钥，默认为空。
- `procotol`: 预设的协议，默认为****main****，其他协议请阅读对应的文档。
- `extra`: 扩展配置文件

### 模型预设使用方法

1. 在控制台打印的 models 文件夹下，创建一个 json 文件，文件名必须与预设的名字一致。
2. 在 json 文件中，填写预设的内容。
3. 在插件配置文件中，将`preset`的值设置为预设的名字（我们更推荐你使用**指令**来切换而不是直接修改配置文件）。

## 提示词预设

在 config 目录下有`private_prompts`目录与`group_prompts`目录，以 txt 格式存放预设文件。

### 切换方法

参考下文指令部分或上文配置文件部分

## 指令使用方法

| 指令名称                           | 参数                                                                                                 | 解释                                       |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **/聊天菜单** 或 **/chat_menu**    | 无                                                                                                   | 显示完整功能菜单                           |
| **/del_memory** 系列指令           | 无                                                                                                   | 删除当前会话的聊天上下文                   |
| **/enable_chat** 或 **/启用聊天**  | 无                                                                                                   | 在群聊中启用聊天功能（需管理员权限）       |
| **/disable_chat** 或 **/禁用聊天** | 无                                                                                                   | 在群聊中禁用聊天功能（需管理员权限）       |
| **/prompt**                        | `--(show)` 展示当前提示词<br>`--(clear)` 清空提示词<br>`--(set) [文本]` 设置提示词                   | 管理自定义提示词（支持 Markdown 格式）     |
| **/presets**                       | 无                                                                                                   | 查看可用模型预设列表                       |
| **/set_preset** 系列指令           | `[模型预设名称]`                                                                                     | 设置使用的模型预设（不填参数则重置为默认） |
| **/choose_prompt**                 | `group` 查看群组预设<br>`private` 查看私聊预设<br>`[提示词预设名称]` 设置预设                        | 选择群组/私聊提示词预设                    |
| **/sessions**                      | 无                                                                                                   | 查看历史会话列表（含编号和时间戳）         |
| **/sessions** 管理指令             | `set <编号>` 覆盖当前会话<br>`del <编号>` 删除会话<br>`archive` 归档当前会话<br>`clear` 清空所有会话 | 高级会话管理功能（需管理员权限）           |
| **/debug**                         | 无                                                                                                   | 开发者调试模式开关（需管理员权限）         |
| **/fakepeople**                    | on/off                                                                                               | 群内自动回复开关                           |

### 新增特性说明：

1. **双通道提示词系统**：

   - 通过`/choose_prompt`指令可分别为群聊和私聊设置不同的角色预设
   - 预设文件存储在`config/prompt_group`和`config/prompt_private`目录

2. **智能会话管理**：

   - 支持会话存档/恢复功能（自动超时存档 + 手动管理）
   - 上下文长度自动优化（根据 token 计算模式自动裁剪）

3. **权限控制系统**：

   - 分级管理员体系（群管+配置管理员）

4. **多协议支持**：
   - 可通过模型预设配置不同 API 协议
   - 支持扩展自定义协议适配器
