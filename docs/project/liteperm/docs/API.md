# API文档


`nonebot-plugin-liteperm.api.rules`

## `PermissionChecker` 基类

- **功能**：权限检查器的抽象基类
- **参数**：
  - `permission: str` - 要检查的权限节点
- **方法**：
  - `checker() -> Callable[[Event, str], Awaitable[bool]]`  
    📌 生成供 NoneBot Matcher Permission检查 使用的检查器闭包  

    ```python
    async def _checker(event: Event, current_perm=current_perm) -> bool:
        return await self._check_permission(event, current_perm)
    ```

  - `_check_permission(event: Event, perm: str) -> bool`  
    ⚠️ 需子类实现的权限检查核心方法

## `UserPermissionChecker` 用户权限检查器

- **继承**：`PermissionChecker`
- **功能**：检查用户权限
- **检查逻辑**：
  1. 获取事件中的用户ID
  2. 查询用户数据
  3. 遍历用户的权限组
  4. 检查权限组中是否包含目标权限
  5. 最后检查用户自身的权限
- **示例**：

  ```python
  user_check = UserPermissionChecker(permission="admin.access") # 实际替换为你的权限节点
  permission = user_check.checker()


## `GroupPermissionChecker` 群组权限检查器

- **继承**：`PermissionChecker`
- **参数**：
  - `only_group: bool = True` - 是否仅限群组事件
- **功能**：检查群组权限
- **检查逻辑**：
  1. 验证事件是否为群组事件
  2. 获取群组ID
  3. 查询群组数据
  4. 遍历群组的权限组
  5. 检查权限组中是否包含目标权限
  6. 最后检查群组自身的权限
- **示例**：

  ```python
  group_check = GroupPermissionChecker(permission="group.manage") # 实际替换为你的权限节点
  permission = group_check.checker()


## 类型定义

```python
GroupEvent: TypeAlias = (
    GroupIncreaseNoticeEvent
    | GroupAdminNoticeEvent
    | GroupBanNoticeEvent
    | GroupDecreaseNoticeEvent
    | GroupMessageEvent
    | GroupRecallNoticeEvent
    | GroupRequestEvent
    | GroupUploadNoticeEvent
)
```

## 使用示例

```python
from nonebot_plugin_liteperm.rules import UserPermissionChecker, GroupPermissionChecker

# 创建用户权限检查器
user_perm_checker = UserPermissionChecker(permission="plugin.admin")

# 创建群组权限检查器
group_perm_checker = GroupPermissionChecker(permission="group.manage", only_group=True)

# 在事件处理器中使用
@matcher.handle(permission=user_perm_checker.checker())
async def handle_admin_command():
    ...

@matcher.handle(permission=group_perm_checker.checker())
async def handle_group_manage():
    ...
```

## 调试日志

权限检查过程会输出调试日志：

```shell
DEBUG: checking user permission 123456 plugin.admin
DEBUG: checking group permission 789012 group.manage
```
