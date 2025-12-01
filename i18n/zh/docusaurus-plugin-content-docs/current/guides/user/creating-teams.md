---
sidebar_position: 4
---

# 创建团队

学习如何创建 Agent 团队来处理复杂任务。

## 什么是团队？

团队是一组协同工作以完成复杂任务的 Agent。团队可以实现：

- 分工协作
- 专业角色分配
- 协作式问题解决

## 创建团队

### 基础配置

```yaml
team:
  name: dev-team
  description: 开发辅助团队

  members:
    - name: code-reviewer
      type: ghost
      role: reviewer

    - name: doc-writer
      type: ghost
      role: documenter

    - name: lead-bot
      type: bot
      role: coordinator
```

### 使用 CLI

```bash
wegent team create -f dev-team.yaml
```

## 团队角色

| 角色 | 描述 |
|------|------|
| `coordinator` | 管理团队活动 |
| `worker` | 执行分配的任务 |
| `reviewer` | 审查他人的工作 |
| `specialist` | 处理特定领域的任务 |

## 团队通信

团队可以通过以下方式通信：

- **消息传递**：Agent 之间的直接消息
- **共享上下文**：公共知识库
- **任务队列**：有序的任务分发

## 配置选项

| 选项 | 描述 |
|------|------|
| `name` | 团队标识符 |
| `members` | 团队成员列表 |
| `collaboration` | 协作模式 |
| `policies` | 团队策略 |

## 最佳实践

- 定义清晰的角色
- 限制团队规模
- 建立通信模式
- 监控团队表现
