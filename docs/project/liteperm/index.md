# NoneBot Plugin LitePerm 文档

<div align="center">
  <a href="https://github.com/JohnRichard4096/nonebot_plugin_liteperm/">
    <img src="https://github.com/user-attachments/assets/b5162036-5b17-4cf4-b0cb-8ec842a71bc6" width="200" alt="SuggarChat Logo">
  </a>
  <h1>LitePerm</h1>
  <h3>权限节点权限管理插件</h3>
</div>


基于权限节点+特殊权限+权限组的依赖权限管理插件！

>本项目灵感来自于[LuckPerms](https://github.com/LuckPerms/LuckPerms)

## 特性

- 节点权限管理
- 特殊权限管理
- 权限组管理
- 用户/群 权限分配

## 快速开始

### 安装

- 使用nb-cli安装

  ```bash
  nb plugin install nonebot-plugin-liteperm
  ```

- 使用uv安装

  ```bash
  uv add nonebot-plugin-liteperm
  ```

### 启用

修改`pyproject.toml`，在`[tool.nonebot]`下的`plugins = ["nonebot_plugin_liteperm"]`添加插件


## [指令文档](docs/commands.md)

## [API文档](docs/API.md)

## 内置权限节点

| 权限节点 | 权限描述 |
| --- | --- |
| `liteperm.admin` | LitePerm管理员 |
