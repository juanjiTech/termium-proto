# 通用 `group` 配置 Kind 协议

> 状态：**产品 Open 已确认，可拆实现**（协议仍为设计文档，未改业务代码）  
> 日期：2026-11-08（2026-11-09 修订：成员引用去掉冗余 kind；同日回写 Q1–Q4）  
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
| 5 | 产品 Open Q1–Q4 **已确认**（见 §9）；确认后可拆实现任务 |
| 6 | 成员引用**只存** `inner_id`（与 `key_id` / `proxy_host_ids` 一致）；**不**在 ref 里再存 `kind`。同团队 `(tid, inner_id)` 已唯一（`idx_tid_innerid` / `GetByInnerID`） |
| 7 | **允许嵌套 group**；写路径**禁止成环**（含自引用）；**不设硬深度上限**（未另定） |
| 8 | **一资源可属于多个 group**；Body 不加跨组唯一约束 |
| 9 | **空 group、未分组资源均正常出现在列表**（不隐藏、不强制「未分组」伪组，除非 UI 另做可选折叠） |
| 10 | group **权限与其它 team config 完全一致**（同一 team 密文仓）；不做只读组 / 子集 ACL |

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
// 成员引用：只存同步 inner_id，与 HostBody.key_id / proxy_host_ids、
// PortForwardBody.chain_host_ids 等现有引用约定一致。
// 同团队 (tid, inner_id) 唯一；类型从 TeamConfigRecord.kind 解析，不在列表里重复存 kind。
message GroupBody {
  string label = 1;                            // 显示名；空串是否允许 → 实现校验，建议非空
  repeated string member_inner_ids = 2;        // 组内顺序 = 数组顺序（UI 拖拽即重排数组）
  int64 sort_order = 3;                        // 组与组之间排序（对齐 SnippetBody.sort_order）
}
```

说明：

| 字段 | 约定 |
|------|------|
| `label` | 组名；不设独立 `name` 字段，与 Host `label` 用语一致 |
| `member_inner_ids` | **成员关系只挂在 group 上**（单向）；成员 Body **不**增加 `parent_group_id` / `group_ids` |
| 组内排序 | `member_inner_ids` 数组下标；不另加 per-member `sort_order`，避免双源 |
| `sort_order` | 仅组列表相对顺序；与成员顺序无关 |
| 嵌套 | **允许**成员解析为 `GROUP`（决策 #7）；写路径禁环；`DependsOn` 仍不自指 GROUP |

**刻意不放进 Body 的：**

- 图标 / 颜色 / 折叠态 → 未确认；确认前不要塞字段  
- 反向索引、物化路径 → 本地可派生，不进同步明文  
- 每成员的 `kind` → 冗余；见决策 #6

## 5. 成员模型

### 5.1 引用方式（推荐，作为实现默认）

**单向、挂在 group 上：`repeated string member_inner_ids`。**

| 方案 | 结论 |
|------|------|
| A. group → member_inner_ids（本文） | ✅ 与「组是一等配置」一致；Host/Cluster Body 无需为分组改 schema；天然支持「一资源多组」（若产品允许）；对齐现有只存 id 的引用 |
| B. 成员反指 `parent_group_id` | ❌ 单归属；改 Host/Cluster；多组要变 repeated，仍散落 |
| C. 独立 join 表再同步 | ❌ 多一个 kind / 同步面，违背「复用 TeamConfigRecord」 |
| D. `{ kind, inner_id }` 复合 ref | ❌ 相对 `(tid, inner_id)` 唯一约束冗余；与 `key_id` / `proxy_host_ids` 不一致 |

本地 SQLite：`Group` 实体可把 `member_inner_ids` 对应的本地 id 列表存 JSON（类似 `Host.ProxyHostIDs`），或规范化子表；**同步权威仍是 `GroupBody.member_inner_ids`**。Client API 对外暴露本地 `id`；落库 / Encode 时把成员本地 id 解析为 `inner_id`（与 Host 引用 Key/Identity 同一模式）。展示类型靠本地已加载的 Host/Cluster，或 `GetByInnerID` 得到的 `record.kind`。

### 5.2 可成为成员的 kind

**第一期允许（实现默认白名单）：**

- `HOST`
- `CLUSTER`
- `GROUP`（嵌套；决策 #7）

**可扩展但本设计不强制第一期：** `PORT_FORWARD`、`SNIPPET`、`SSH_KEY`、`IDENTITY`、`KNOWN_HOST`、`AUDIT_POLICY`。Body 只存 id；白名单在 Create/Update 时对每个 id `GetByInnerID` 后按 `record.kind` 校验即可，不必改 Body。成员为 `GROUP` 时另做禁环校验。

### 5.3 多重归属

**允许**同一资源出现在多个 group 的 `member_inner_ids` 里（决策 #8）。

协议侧：不阻止同一 `inner_id` 出现在多个 group；Body 层不加跨组唯一约束。实现**不要**加「单归属」校验。

同一 group 内重复 `inner_id`：实现应去重（保留首次出现以稳定顺序）。

### 5.4 删除与一致性

| 事件 | 行为 |
|------|------|
| 删除 group | soft-delete group + tombstone 上云；**成员配置保留**，仅失去该组归属 |
| 删除成员配置（如删 Host） | Host 按现有路径 soft-delete；各 group 的 `member_inner_ids` 可能残留悬挂引用 |
| 悬挂引用 | **软引用**：List/Get group 时过滤已删 / 本地解析失败的 id；可选在下次 UpdateGroup 时写回剪枝后的列表。不因悬挂引用阻塞 Sync |
| 成员移出组 | 从该 group 的 `member_inner_ids` 去掉对应 id 并 Update；不删成员实体 |

不在 Host 删除路径强制改写所有 group（避免删 Host 时扫全表写放大）；以读时剪枝 + 自愿写回为主。若后续产品要求「删 Host 立刻净化所有组」，再在 `beforeTeamConfigDelete(HOST)` 加扫描（实现任务另述）。

### 5.5 `DependsOn`（svc Registry）

推荐：

```text
Group.DependsOn() = { Host, Cluster }  // 非 GROUP 成员；嵌套 group 不进 DependsOn
```

- Pull / Push 拓扑：Group 排在 Host、Cluster **之后**，便于把非 GROUP 成员的 `inner_id` 解析为本地 id。  
- **嵌套已确认允许**：`DependsOn` **仍不能**包含 `GROUP`（自依赖破坏拓扑）；嵌套引用一律当软引用；**成环在写路径拒绝**；不设硬深度上限。  
- 若某成员尚未拉取到本地：该 id 显示为 unresolved，不失败整组 Sync。

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
  repeated string member_ids = 12; // 本地 SQLite id（Host.id / Cluster.id / …）
  int64 sort_order = 13;
}
```

与 sync 侧对称：只存 id，不带 kind。对齐 client Host 的 `keyId` / `identityId` / `proxyHostIds`。展示类型靠本地已加载资源，或查对应 `TeamConfigRecord.kind`。**不**为 Group 往 client 包引入 `TeamConfigKind`。

### 6.2 RPC（本设计必写）

| RPC | 作用 |
|-----|------|
| `GetGroupList(team_id)` | 列出团队未删除 group（含 member_ids） |
| `GetGroup(group_id)` | 单条 |
| `CreateGroup(team_id, group)` | 创建；生成本地 id / inner_id |
| `UpdateGroup(group)` | 全量更新 label / member_ids / sort_order |
| `DeleteGroup(group_id)` | soft-delete |

成员变更：**不强制**单独 `AddGroupMember` / `RemoveGroupMember`；第一期用 `UpdateGroup` 提交完整 `member_ids` 即可（与多数现有 Update* 一致）。若 UI 需要局部补丁 RPC，留给实现/UI 任务，非协议 blocker。

### 6.3 留给 UI / 后续实现任务

- Dashboard / 侧栏按 group 分块、折叠、拖拽排序与拖入/拖出（支持嵌套树；一资源可出现在多组）  
- **空 group、未分组资源均正常展示在列表**（决策 #9；不隐藏空组，不强制造「未分组」伪组）  
- 是否弱化「分组标签」文案或入口（`tags` 仍保留字段）  
- 多选批量「加入组」的交互  
- i18n、空态、错误提示  

### 6.4 svc 挂接（说明到包名，不写补丁）

实现时预期触点（对照现有 Host）：

1. `termium-proto`：枚举 + `GroupBody`（`member_inner_ids`）→ `buf generate`  
2. `termium-client-proto`：`Group` 消息（`member_ids`）+ CRUD RPC → generate  
3. `termium-svc/model`：`Group` struct，`init` 里 `RegisterSyncKind`，实现 `Syncable`（`ToConfigBody` / `FromConfigBody` / `EncodePayload` / `DecodePayload` / `ToClientProto`）  
4. `dao` 团队配置访问；`service` 实现 ClientService 方法；写路径对 `member_inner_ids` / `member_ids` 做白名单 kind 校验与去重  
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
- 成员引用里重复存 `kind`（与现有 id-only 引用惯例冲突）  
- 只读组 / 子集 ACL（超出当前 team config；见决策 #10）  
- 本任务内的业务代码、实现 PR、UI 演示  
- 独立 Outbox 表或新的同步 envelope  
- 删除 group 时级联删除成员  

## 9. 产品确认（原 Open Questions）

> 来源：ATOM-17 负责人确认（2026-11-09）。确认后可拆实现。

| ID | 结论 | 实现要点 |
|----|------|----------|
| Q1 | **允许嵌套 group** | 白名单含 `GROUP`；写路径**禁环**（自引用与间接环）；**不设硬深度上限**；`DependsOn` 不包含 `GROUP`；Body 不变 |
| Q2 | **一资源可多组** | 不加跨组唯一校验；同一 group 内仍去重 |
| Q3 | **空 group、未分组资源正常展示在列表** | 纯 UI；不隐藏空组；不强制「未分组」伪组 |
| Q4 | **权限与其它 team config 完全一致** | 无特例 ACL；子集/只读组若以后要做，另开权限设计 |

## 10. 实现任务拆分建议

仅作拆分提示，**本任务不自动创建实现 issue**（由负责人或 Mika 开）：

1. **proto**：`TEAM_CONFIG_KIND_GROUP` + `GroupBody`（`member_inner_ids`）（`termium-proto`）  
2. **client-proto + svc model/sync/CRUD**：注册 Syncable、本地 CRUD、软引用剪枝、写路径 kind 白名单 + **嵌套禁环**  
3. **UI**：列表分块 / 嵌套展示 / 空组与未分组资源正常展示 / 成员管理（含多组归属）  

每条实现任务须引用本文路径；本文未写的行为不要补进实现范围。

## 11. 参考

- 父需求讨论：ATOM-14（通用 `group` kind，不要 HostGroup；`tags` 仅现状备注）  
- ATOM-17 评审：成员引用去掉 `GroupMemberRef.kind`；Q1–Q4 产品确认见 §9  
- `termium-proto/proto/sync/v1/team_config.proto`、`config_body.proto`  
- `termium-svc/model/syncable.go`、`model/host.go`（RegisterSyncKind / EncodePayload 样板）  
- `termium-wails/docs/sync-safety-design.md`（Registry、pending、purge；无 Outbox）  
- `termium-wails/docs/architecture.md`（配置 / 运行时 / UI 三层；`group` 属配置层）
