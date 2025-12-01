---
sidebar_position: 2
---

# 创建 Bot

学习如何创建和配置 Bot Agent。

## 什么是 Bot？

Bot 是一种交互式 AI Agent，能够响应用户命令和查询。Bot 适用于：

- 聊天界面
- 命令行助手
- 交互式工作流

## 创建 Bot

### 基础配置

为你的 Bot 创建一个 YAML 文件：

```yaml
name: helper-bot
type: bot
description: 一个交互式助手

model:
  provider: openai
  name: gpt-4
  temperature: 0.5

skills:
  - question-answering
  - task-execution
```

### 使用 CLI

```bash
wegent bot create -f helper-bot.yaml
```

## 与 Bot 交互

### 启动聊天会话

```bash
wegent bot chat helper-bot
```

### 发送命令

```bash
wegent bot run helper-bot "审查这段代码"
```

## 配置选项

| 选项 | 描述 | 必需 |
|------|------|------|
| `name` | 唯一标识符 | 是 |
| `type` | 必须是 `bot` | 是 |
| `model` | AI 模型配置 | 是 |
| `skills` | 技能名称列表 | 否 |
| `persona` | Bot 个性设置 | 否 |

## 最佳实践

- 设计清晰的交互模式
- 设置适当的响应长度
- 优雅地处理错误
- 提供有用的反馈
