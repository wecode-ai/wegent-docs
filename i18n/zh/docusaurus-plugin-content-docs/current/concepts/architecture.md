---
sidebar_position: 1
---

# 架构设计

了解 Wegent 的架构以及各组件如何协同工作。

## 概述

Wegent 基于模块化架构构建，支持灵活的 AI Agent 协作。系统由多个关键组件组成，共同提供强大的多 Agent 平台。

## 核心组件

### Agent 层

Agent 层包含不同类型的 AI Agent：

- **Ghost**：自主执行任务的自动化 Agent
- **Bot**：响应用户命令的交互式 Agent
- **Team**：协作处理复杂任务的 Agent 团队

### 技能层

技能是可以附加到 Agent 的模块化能力：

- 用于常见任务的内置技能
- 用于特定领域功能的自定义技能
- 用于复杂操作的技能组合

### 编排层

编排层负责管理：

- 任务分发和调度
- Agent 间通信
- 资源分配

## 数据流

```
用户输入 → 任务解析器 → 编排器 → Agents → 输出
                          ↓
                       技能池
```

## 配置

所有组件都可以通过 YAML 文件配置。详见 [YAML 规范](/docs/reference/yaml-specification)。
