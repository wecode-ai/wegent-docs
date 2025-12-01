---
sidebar_position: 1
---

# 创建 Ghost

学习如何创建和配置 Ghost Agent。

## 什么是 Ghost？

Ghost 是一种自主 AI Agent，能够独立运行，无需持续的用户交互即可执行任务。Ghost 适用于：

- 后台处理
- 自动化工作流
- 长时间运行的任务

## 创建 Ghost

### 基础配置

为你的 Ghost 创建一个 YAML 文件：

```yaml
name: my-ghost
type: ghost
description: 一个有帮助的自主 Agent

model:
  provider: openai
  name: gpt-4
  temperature: 0.7

skills:
  - code-review
  - documentation
```

### 使用 CLI

```bash
wegent ghost create -f my-ghost.yaml
```

## Ghost 生命周期

1. **创建**：从配置创建 Ghost
2. **激活**：Ghost 变为活跃状态并准备就绪
3. **执行**：Ghost 执行分配的任务
4. **休眠**：不需要时进入空闲状态
5. **终止**：Ghost 被关闭

## 配置选项

| 选项 | 描述 | 必需 |
|------|------|------|
| `name` | 唯一标识符 | 是 |
| `type` | 必须是 `ghost` | 是 |
| `model` | AI 模型配置 | 是 |
| `skills` | 技能名称列表 | 否 |
| `triggers` | 激活 Ghost 的事件 | 否 |

## 最佳实践

- 为 Ghost 起描述性的名称
- 仅添加所需的技能
- 配置适当的触发器
- 定期监控 Ghost 活动
