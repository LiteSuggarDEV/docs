# 指令文档

## 主指令

- **格式**：/lp
- **功能**：显示插件帮助信息
- **响应**：LP LitePerm 请输入参数： lp user lp group lp perm_group lp command

## 用户权限管理

<details>

### `lp user` - 用户权限管理

- **格式**：`lp user <用户ID> <操作类型> <操作> [目标] [值]`
- **操作类型**：
  - `permission` - 权限节点操作
  - `parent` - 权限组继承操作
  - `perm_group` - 权限组管理

#### 用户权限节点操作 (`permission`)

| 操作    | 格式                                              | 示例                                           | 说明             |
| ------- | ------------------------------------------------- | ---------------------------------------------- | ---------------- |
| `set`   | `lp user <ID> permission set <节点> <true/false>` | `lp user 123 permission set admin.access true` | 设置权限节点状态 |
| `del`   | `lp user <ID> permission del <节点>`              | `lp user 123 permission del user.edit`         | 删除权限节点     |
| `check` | `lp user <ID> permission check <节点>`            | `lp user 123 permission check plugin.admin`    | 检查是否拥有权限 |
| `list`  | `lp user <ID> permission list`                    | `lp user 123 permission list`                  | 列出用户所有权限 |

#### 用户权限组继承操作 (`parent`)

| 操作  | 格式                               | 示例                                 | 说明               |
| ----- | ---------------------------------- | ------------------------------------ | ------------------ |
| `add` | `lp user <ID> parent add <权限组>` | `lp user 123 parent add admin_group` | 添加继承的权限组   |
| `del` | `lp user <ID> parent del <权限组>` | `lp user 123 parent del vip_group`   | 移除继承的权限组   |
| `set` | `lp user <ID> parent set <权限组>` | `lp user 123 parent set admin_group` | 覆盖为权限组的权限 |

#### 用户权限组管理 (`perm_group`)

| 操作  | 格式                                   | 示例                               | 说明             |
| ----- | -------------------------------------- | ---------------------------------- | ---------------- |
| `add` | `lp user <ID> perm_group add <权限组>` | `lp user 123 perm_group add vip`   | 添加用户到权限组 |
| `del` | `lp user <ID> perm_group del <权限组>` | `lp user 123 perm_group del guest` | 从权限组移除用户 |

</details>

## 群组权限管理

<details>

### `lp group` - 群组权限管理

- **格式**：`lp group <群组ID> <操作类型> <操作> [目标] [值]`
- **操作类型**：
  - `permission` - 权限节点操作
  - `parent` - 权限组继承操作
  - `perm_group` - 权限组管理

#### 群权限节点操作 (`permission`)

| 操作    | 格式                                               | 示例                                            | 说明             |
| ------- | -------------------------------------------------- | ----------------------------------------------- | ---------------- |
| `set`   | `lp group <ID> permission set <节点> <true/false>` | `lp group 456 permission set group.manage true` | 设置权限节点状态 |
| `del`   | `lp group <ID> permission del <节点>`              | `lp group 456 permission del group.kick`        | 删除权限节点     |
| `check` | `lp group <ID> permission check <节点>`            | `lp group 456 permission check plugin.admin`    | 检查是否拥有权限 |
| `list`  | `lp group <ID> permission list`                    | `lp group 456 permission list`                  | 列出群组所有权限 |

#### 群权限组继承操作 (`parent`)

| 操作  | 格式                                | 示例                                  | 说明               |
| ----- | ----------------------------------- | ------------------------------------- | ------------------ |
| `add` | `lp group <ID> parent add <权限组>` | `lp group 456 parent add group_admin` | 添加继承的权限组   |
| `del` | `lp group <ID> parent del <权限组>` | `lp group 456 parent del group_vip`   | 移除继承的权限组   |
| `set` | `lp group <ID> parent set <权限组>` | `lp group 456 parent set group_admin` | 覆盖为权限组的权限 |

#### 群权限组管理 (`perm_group`)

| 操作  | 格式                                    | 示例                                | 说明             |
| ----- | --------------------------------------- | ----------------------------------- | ---------------- |
| `add` | `lp group <ID> perm_group add <权限组>` | `lp group 456 perm_group add vip`   | 添加群组到权限组 |
| `del` | `lp group <ID> perm_group del <权限组>` | `lp group 456 perm_group del guest` | 从权限组移除群组 |

</details>

## 权限组管理

<details>

### `lp perm_group` - 权限组管理

- **格式**：`lp perm_group <权限组名> <操作类型> <操作> [目标] [值]`
- **操作类型**：
  - `permission` - 权限节点操作
  - `parent` - 权限组继承操作
  - `to` - 权限组管理

#### 权限节点操作 (`permission`)

| 操作    | 格式                                                      | 示例                                                | 说明               |
| ------- | --------------------------------------------------------- | --------------------------------------------------- | ------------------ |
| `set`   | `lp perm_group <组名> permission set <节点> <true/false>` | `lp perm_group admin permission set system.* true`  | 设置权限节点状态   |
| `del`   | `lp perm_group <组名> permission del <节点>`              | `lp perm_group admin permission del user.edit`      | 删除权限节点       |
| `check` | `lp perm_group <组名> permission check <节点>`            | `lp perm_group admin permission check plugin.admin` | 检查是否拥有权限   |
| `list`  | `lp perm_group <组名> permission list`                    | `lp perm_group admin permission list`               | 列出权限组所有权限 |

#### 权限组继承操作 (`parent`)

| 操作  | 格式                                       | 示例                                 | 说明               |
| ----- | ------------------------------------------ | ------------------------------------ | ------------------ |
| `add` | `lp perm_group <组名> parent add <权限组>` | `lp perm_group vip parent add base`  | 添加继承的权限组   |
| `del` | `lp perm_group <组名> parent del <权限组>` | `lp perm_group vip parent del base`  | 移除继承的权限组   |
| `set` | `lp perm_group <组名> parent set <权限组>` | `lp perm_group vip parent set admin` | 覆盖为权限组的权限 |

#### 权限组管理 (`to`)

| 操作     | 格式                             | 示例                                | 说明         |
| -------- | -------------------------------- | ----------------------------------- | ------------ |
| `create` | `lp perm_group <组名> to create` | `lp perm_group new_group to create` | 创建新权限组 |
| `remove` | `lp perm_group <组名> to remove` | `lp perm_group old_group to remove` | 删除权限组   |

</details>

## 通用参数说明

- 用户 ID：QQ 号或其他平台的用户标识
- 群组 ID：QQ 群号或其他平台的群组标识
- 权限组名：自定义的权限组名称
- 命令名：插件中的命令名称（如 lp.user）
- 权限节点：使用点分隔的权限标识（如 plugin.admin）
- 值：true 或 false，表示权限状态

> **注意**：所有指令需要管理员权限（is_lp_admin）才能执行
