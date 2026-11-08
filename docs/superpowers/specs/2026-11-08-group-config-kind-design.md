# 通用 `group` 配置 Kind 协议

> 状态：**设计草案，Open Questions 待产品确认后才能拆实现**  
> 日期：2026-11-08  
> 任务：ATOM-17（父需求 ATOM-14）  
> 范围：`termium-proto`（`TeamConfigKind` / `GroupBody`）、`termium-client-proto`（client 消息与 RPC 面）、`termium-svc`（syncable 注册与落库挂接说明）  
> **本文件只定协议与数据模型；不写实现、不改业务代码。**

## 1. 问题与动机

用户希望把多条同步配置（同一设备在不同网络下的多个 Host、相关 Cluster 等）归成一组，便于管理与选择。

现有 Host / Cluster 上的 `tags`（界面「分组标签」）只是扁平字符串元数据，**不是**资源分组实体：没有独立同步 kind、没有成员列表、列表 UI 也不会按 tag 分块。父 issue 已确认主路径是新增通用同步配置 kind，名称就是 **`group`**（不要 `HostGroup`，不在类型名上绑死 Host）。

「单终端多地址 + 尝试优先级」是 ATOM-14 另一条线，**不在本文范围**。

## 2. 决策（已确认）与原则

| # | 决策 |
|---|---|
| 1 | 新增 `TeamConfigKind` 枚举值，名称 **`group`** → `TEAM_CONFIG_KIND_GROUP` |
| 2 | `group` 是**通用资源组**：至少容纳 Host，也要能容纳 Cluster 等已有 config kind |
| 3 | 复用现有 `TeamConfigRecord` envelope + 整包加密 `payload_ciphertext`；不另起同步模型 |
| 4 | `tags` 与 `group` **并存、互不替代**；不得把「按 tag 分块 UI」写成 `group` 的替代方案 |
| 5 | 产品未决项标为 **Open Questions**，确认前不拆实现任务 |

对齐现有接口（设计引用，实现时改这些文件，本文不写补丁）：

- `termium-proto`：`proto/sync/v1/team_config.proto`（`TeamConfigKind`）、`proto/sync/v1/config_body.proto`（各 `*Body`）
- `termium-client-proto`：`proto/client/v1/host.proto` 等同级消息；`client_service.proto` CRUD RPC 模式
- `termium-svc`：`model.RegisterSyncKind` + `Syncable`（`ConfigKind` / `DependsOn` / `EncodePayload`）；`pkg/syncx` Registry；soft-delete + pending 门禁见 wails `docs/sync-safety-design.md`（**已决策不做 Outbox**）

## 3. 枚举与同步 envelope

### 3.1 `TeamConfigKind`

当前末值：`TEAM_CONFIG_KIND_AUDIT_POLICY = 8`。新增：

```protobuf
// proto/sync/v1/team_config.proto
enum TeamConfigKind {
  // ... existing 0..8 unchanged ...
  TEAM_CONFIG_KIND_GROUP = 9;
}
```

- 取值 **9** 为建议；实现时若枚举已前进，取「当前最大 + 1」，并同步 `termium-svc` `model.SyncKindGroup` 常量与 `pkg/syncx` 注册表长度断言。
- BE 对 kind 多为透传 opaque record；新增枚举后需确认 be 侧无硬编码白名单漏接（实现 checklist，见 §8）。

### 3.2 加密 payload 约定

与现有 Host / Cluster 等一致：

1. 本地将 `GroupBody` `proto.Marshal` 为明文 bytes  
2. 用团队 RSA 公钥 `cryptox.EncryptBytes` → `TeamConfigRecord.payload_ciphertext`  
3. Pull 侧私钥解密后 `Unmarshal` 回 `GroupBody`

`GroupBody` 本身通常**不含**密码 / kubeconfig 等机密，仍走同一 envelope，避免 kind 特例与 Registry 分叉。

### 3.3 Outbox / purge

**无特例。**

- Pending 仍以 `synced_at` / `updated_at`（及 soft-delete tombstone）为唯一来源；不引入 `sync_outbox`（见 sync-safety 已决策）。  
- `group` 经 `RegisterSyncKind` 进入 `SyncRegistry` → 自动进入 UploadOrder / `SyncPurgeKinds` / mutation 矩阵覆盖面。  
- 删除 `group`：**只 soft-delete group 自身**；不级联删除成员配置。  
- `beforeTeamConfigDelete`：group 无运行时句柄（无 forward / session），默认空操作即可。

## 4. `GroupBody`（云端 / 同步明文结构）

建议落在 `config_body.proto`（与其它 `*Body` 并列）：

```protobuf
// 成员引用：用「kind + 同步 inner_id」指向同团队其它 TeamConfigRecord。
// inner_id 与 HostBody.key_id / proxy_host_ids 等现有引用约定一致（存同步侧 ID，非本地 SQLite id）。
message GroupMemberRef {
  TeamConfigKind kind = 1; // 禁止 UNSPECIFIED；允许的 kind 集合见 §5.2
  string inner_id = 2;     // 被引用配置的 TeamConfigRecord.inner_id
}

message GroupBody {
  string label = 1;                      // 显示名；空串是否允许 → 实现校验，建议非空
  repeated GroupMemberRef members = 2;   // 组内顺序 = 数组顺序（UI 拖拽即重排数组）
  int64 sort_order = 3;                  // 组与组之间排序（对齐 SnippetBody.sort_order）
}
```

说明：

| 字段 | 约定 |
|------|------|
| `label` | 组名；不设独立 `name` 字段，与 Host `label` 用语一致 |
| `members` | **成员关系只挂在 group 上**（单向）；成员 Body **不**增加 `parent_group_id` / `group_ids` |
| 组内排序 | `members` 数组下标；不在 `GroupMemberRef` 再加 `sort_order`，避免双源 |
| `sort_order` | 仅组列表相对顺序；与成员顺序无关 |
| 嵌套 | **是否允许** `kind = GROUP` 的成员 → Open Q1；协议上 `GroupMemberRef.kind` 类型上可写 GROUP，产品未确认前实现应拒绝或忽略 |

**刻意不放进 Body 的：**

- 图标 / 颜色 / 折叠态 → 未确认；确认前不要塞字段  
- 反向索引、物化路径 → 本地可派生，不进同步明文

## 5. 成员模型

### 5.1 引用方式（推荐，作为实现默认）

**单向、挂在 group 上：`GroupMemberRef { kind, inner_id }`。**

| 方案 | 结论 |
|------|------|
| A. group → members（本文） | ✅ 与「组是一等配置」一致；Host/Cluster Body 无需为分组改 schema；天然支持「一资源多组」（若产品允许） |
| B. 成员反指 `parent_group_id` | ❌ 单归属；改 Host/Cluster；多组要变 repeated，仍散落 |
| C. 独立 join 表再同步 | ❌ 多一个 kind / 同步面，违背「复用 TeamConfigRecord」 |

本地 SQLite：`Group` 实体可把 `members` 存 JSON（类似 `Host.ProxyHostIDs`），或规范化子表；**同步权威仍是 `GroupBody.members`**。Client API 对外暴露本地 `id`；落库 / Encode 时把成员本地 id 解析为对应 kind 的 `inner_id`（与 Host 引用 Key/Identity 同一模式）。

### 5.2 可成为成员的 kind

**第一期建议允许（实现默认白名单）：**

- `HOST`
- `CLUSTER`

**可扩展但本设计不强制第一期：** `PORT_FORWARD`、`SNIPPET`、`SSH_KEY`、`IDENTITY`、`KNOWN_HOST`、`AUDIT_POLICY`。协议上 `GroupMemberRef.kind` 已是完整枚举，白名单放在 svc 校验即可，不必改 Body。

`GROUP` 作成员 → Open Q1。

### 5.3 多重归属

一个资源能否出现在多个 group 的 `members` 里 → Open Q2。

协议侧：**不阻止**同一 `(kind, inner_id)` 出现在多个 group；也不在 Body 层加唯一约束。产品若选「单归属」，实现期在 Create/Update 校验，或 UI 层保证。

同一 group 内重复 `(kind, inner_id)`：实现应去重（保留首次出现以稳定顺序）。

### 5.4 删除与一致性

| 事件 | 行为 |
|------|------|
| 删除 group | soft-delete group + tombstone 上云；**成员配置保留**，仅失去该组归属 |
| 删除成员配置（如删 Host） | Host 按现有路径 soft-delete；各 group 的 `members` 可能残留悬挂引用 |
| 悬挂引用 | **软引用**：List/Get group 时过滤已删 / 本地解析失败的 ref；可选在下次 UpdateGroup 时写回剪枝后的列表。不因悬挂引用阻塞 Sync |
| 成员移出组 | 从该 group 的 `members` 去掉对应 ref 并 Update；不删成员实体 |

不在 Host 删除路径强制改写所有 group（避免删 Host 时扫全表写放大）；以读时剪枝 + 自愿写回为主。若后续产品要求「删 Host 立刻净化所有组」，再在 `beforeTeamConfigDelete(HOST)` 加扫描（实现任务另述）。

### 5.5 `DependsOn`（svc Registry）

推荐：

```text
Group.DependsOn() = { Host, Cluster }  // 与第一期白名单一致；白名单扩展时同步扩展
```

- Pull / Push 拓扑：Group 排在 Host、Cluster **之后**，便于把 `inner_id` 解析为本地 id。  
- 若 Open Q1 允许嵌套 group：`DependsOn` **不能**包含 `GROUP`（自依赖破坏拓扑）；嵌套引用一律当软引用，深度/环在写路径校验。  
- 若某成员 kind 尚未拉取到本地：该 ref 显示为 unresolved，不失败整组 Sync。

## 6. Client API 面

对齐现有 Host / Cluster CRUD 风格（`termium-client-proto` / `ClientService`）。下列为**协议设计必写**（实现任务落地 proto + svc）；标注「UI 任务」的不在本设计阻塞范围内。

### 6.1 消息（建议）

```protobuf
message Group {
  string id = 1;
  google.protobuf.Timestamp created_at = 2;
  google.protobuf.Timestamp updated_at = 3;
  google.protobuf.Timestamp deleted_at = 4;

  string label = 11;
  repeated GroupMember members = 12; // client 侧用本地 id
  int64 sort_order = 13;
}

message GroupMember {
  // 与 sync GroupMemberRef 对应；client 用本地资源 id
  TeamConfigKind kind = 1; // 可复用 sync 枚举，或 client 侧平行枚举 + 映射
  string id = 2;           // 本地 SQLite id（Host.id / Cluster.id / …）
}
```

`TeamConfigKind` 出现在 client 包：优先 `import` sync 枚举或在 client 定义平行枚举并在 svc 映射——实现时按现有 Key/Host 引用惯例二选一，**本设计不新造第三种 kind 体系**。

### 6.2 RPC（本设计必写）

| RPC | 作用 |
|-----|------|
| `GetGroupList(team_id)` | 列出团队未删除 group（含 members） |
| `GetGroup(group_id)` | 单条 |
| `CreateGroup(team_id, group)` | 创建；生成本地 id / inner_id |
| `UpdateGroup(group)` | 全量更新 label / members / sort_order |
| `DeleteGroup(group_id)` | soft-delete |

成员变更：**不强制**单独 `AddGroupMember` / `RemoveGroupMember`；第一期用 `UpdateGroup` 提交完整 `members` 即可（与多数现有 Update* 一致）。若 UI 需要局部补丁 RPC，留给实现/UI 任务，非协议 blocker。

### 6.3 留给 UI / 后续实现任务

- Dashboard / 侧栏按 group 分块、折叠、拖拽排序与拖入/拖出  
- 空 group、未分组资源的默认展示（依赖 Open Q3）  
- 是否弱化「分组标签」文案或入口（`tags` 仍保留字段）  
- 多选批量「加入组」的交互  
- i18n、空态、错误提示  

### 6.4 svc 挂接（说明到包名，不写补丁）

实现时预期触点（对照现有 Host）：

1. `termium-proto`：枚举 + `GroupBody` / `GroupMemberRef` → `buf generate`  
2. `termium-client-proto`：`Group` 消息 + CRUD RPC → generate  
3. `termium-svc/model`：`Group` struct，`init` 里 `RegisterSyncKind`，实现 `Syncable`（`ToConfigBody` / `FromConfigBody` / `EncodePayload` / `DecodePayload` / `ToClientProto`）  
4. `dao` 团队配置访问；`service` 实现 ClientService 方法；`route` / gateway 随 proto 生成  
5. `pkg/syncx` 与 Registry 单测长度 / mutation 矩阵 fixture 为 Group 补一行  
6. `termium-be`：确认 SyncConfig / UpdateConfig 对未知 kind 透传；若有 kind 白名单则加上 GROUP  

## 7. 与 `tags` 的关系

| | `tags` | `group` |
|---|--------|---------|
| 形态 | HostBody / ClusterBody 上的 `repeated string` | 独立 `TeamConfigKind` + `GroupBody` |
| 同步 | 随 Host/Cluster payload | 独立 record |
| 语义 | 扁平元数据 / 搜索 / 副标题展示 | 显式资源集合与组内顺序 |
| 产品角色 | **保留**；不是分组方案 | **本需求的分组方案** |

- **并存**：不迁移、不删除 `tags` 字段。  
- **不替代**：实现与设计评审中，禁止用「列表按 tag 分块」冒充本需求的交付。  
- **弱化展示**：是否改编辑器文案「分组标签」、是否在 UI 降低 tag 存在感 → 产品另定；字段层不动。

## 8. 明确不做

- 单终端多地址 + 尝试优先级（ATOM-14 另一条线）  
- 命名或模型限定为 Host 专用（`HostGroup`、仅 Host 可进组）  
- 用 tag 分块 UI 替代 `group`  
- 未确认产品行为的拍板（见 §9）  
- 本任务内的业务代码、实现 PR、UI 演示  
- 独立 Outbox 表或新的同步 envelope  
- 删除 group 时级联删除成员  

## 9. Open Questions（停住等确认）

确认前**不要**拆实现任务；确认结果应回写本节并更新「状态」行。

| ID | 问题 | 协议影响 |
|----|------|----------|
| Q1 | 是否允许嵌套 group（group 的 member.kind = GROUP）？若允许，深度限制与是否禁环？ | 写路径校验；`DependsOn` 不能自指；Body 可不变 |
| Q2 | 一个资源能否同时属于多个 group？ | 否 → Create/Update 唯一性校验；是 → 维持现状协议即可 |
| Q3 | 空 group、未分组资源在列表里的默认展示？ | 纯 UI；不改 Body |
| Q4 | 团队共享后，group 的权限是否与其它 team config 完全一致？ | 预期「完全一致」（同一 team 密文仓）；若要只读组 / 子集 ACL，需另开权限设计，**超出当前 team config 模型** |

## 10. 实现任务拆分建议（确认 Open 后）

仅作拆分提示，**本任务不创建实现 issue**：

1. **proto**：`TEAM_CONFIG_KIND_GROUP` + `GroupBody` / `GroupMemberRef`（`termium-proto`）  
2. **client-proto + svc model/sync/CRUD**：注册 Syncable、本地 CRUD、软引用剪枝  
3. **UI**：列表分块与成员管理（依赖 Q3）  

每条实现任务须引用本文路径；本文未写的行为不要补进实现范围。

## 11. 参考

- 父需求讨论：ATOM-14（通用 `group` kind，不要 HostGroup；`tags` 仅现状备注）  
- `termium-proto/proto/sync/v1/team_config.proto`、`config_body.proto`  
- `termium-svc/model/syncable.go`、`model/host.go`（RegisterSyncKind / EncodePayload 样板）  
- `termium-wails/docs/sync-safety-design.md`（Registry、pending、purge；无 Outbox）  
- `termium-wails/docs/architecture.md`（配置 / 运行时 / UI 三层；`group` 属配置层）
