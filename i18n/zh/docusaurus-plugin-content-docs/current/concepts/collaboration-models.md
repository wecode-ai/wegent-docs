---
sidebar_position: 3
---

# 协作模式

了解 Wegent 中不同的协作模式。

## 概述

Wegent 支持多种多 Agent 系统的协作模式。根据任务复杂度和需求选择合适的模式。

## 协作模式

### 顺序执行

Agent 依次工作，传递结果：

```
Agent A → Agent B → Agent C → 结果
```

**适用于**：线性工作流、流水线处理

### 并行执行

多个 Agent 同时工作：

```
        ↗ Agent A ↘
输入 →   Agent B  → 合并 → 结果
        ↘ Agent C ↗
```

**适用于**：独立子任务、性能关键型操作

### 层级模式

一个监督 Agent 协调工作 Agent：

```
         监督者
        /    |    \
    工作者 工作者 工作者
```

**适用于**：需要协调的复杂任务

### 点对点

Agent 之间直接通信：

```
Agent A ←→ Agent B
   ↕           ↕
Agent C ←→ Agent D
```

**适用于**：协作式问题解决

## 选择模式

考虑以下因素：

| 因素 | 顺序 | 并行 | 层级 | 点对点 |
|------|------|------|------|--------|
| 复杂度 | 低 | 中 | 高 | 高 |
| 延迟 | 高 | 低 | 中 | 可变 |
| 协调 | 简单 | 无 | 集中式 | 分布式 |

## 配置

在团队配置中指定协作模式：

```yaml
team:
  name: my-team
  collaboration: hierarchical
  supervisor: lead-agent
  workers:
    - worker-a
    - worker-b
```
