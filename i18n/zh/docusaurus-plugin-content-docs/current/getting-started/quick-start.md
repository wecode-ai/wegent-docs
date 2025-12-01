---
sidebar_position: 1
---

# 快速开始

几分钟内即可启动和运行 Wegent。

## 前置条件

- Python 3.8 或更高版本
- Git
- Docker（可选，用于容器化部署）

## 安装

### 使用 pip

```bash
pip install wegent
```

### 从源码安装

```bash
git clone https://github.com/wecode-ai/Wegent.git
cd Wegent
pip install -e .
```

## 你的第一个 Agent

创建一个简单的 agent 配置：

```yaml
name: my-first-agent
type: ghost
model: gpt-4
skills:
  - code-review
  - documentation
```

## 下一步

- 了解[核心概念](/docs/concepts/core-concepts)
- 探索[架构设计](/docs/concepts/architecture)
- 查看[用户指南](/docs/guides/user/creating-ghosts)
