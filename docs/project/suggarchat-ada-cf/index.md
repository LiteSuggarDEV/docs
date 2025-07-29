# nonebot_plugin_suggarex_cf

Cloudflare Workers AI 协议适配器，用于 [SuggarChat](https://github.com/LiteSuggarDEV/nonebot_plugin_suggarchat)

> 为 SuggarChat 提供 Cloudflare Workers AI 接入支持

## 📦 安装

提供两种安装方式：

- 方法一（推荐）：

  ```bash
  nb plugin install nonebot-plugin-suggarex-cf
  ```

- 方法二（手动安装）：

  ```bash
  uv add nonebot_plugin_suggarex_cf
  ```

  若使用方法二，还需在 `pyproject.toml` 中手动添加插件名：

  ```toml
  plugins = ["nonebot_plugin_suggarex_cf"]
  ```

## ⚙️ 配置

在模型预设配置文件中新增了以下字段：

| 配置项       | 说明                                                                                                          | 默认值 |
| ------------ | ------------------------------------------------------------------------------------------------------------- | ------ |
| `cf_user_id` | Cloudflare Workers AI 用户 ID，请前往 [Workers AI 控制台](https://developers.cloudflare.com/workers-ai/) 获取 | `null` |

---

## 🚀 使用说明

将 Suggar 配置文件中的 `protocol` 字段设为：

```toml
protocol = "cf"
```

并配置好 `token` 与模型名称。模型字段填写 Cloudflare Workers AI 的文本生成模型 ID，例如：

```toml
model = "llama-3.2-xxxx"
```

无需使用 `@` 进行拼接，为了兼容性使用@也会被接受。具体参数与格式请参考 [SuggarChat 官方文档](/project/suggarchat/readme.md)。

---

如果你有任何建议或问题，欢迎提 Issue 或 PR！
