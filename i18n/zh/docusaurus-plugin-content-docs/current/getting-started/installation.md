---
sidebar_position: 2
---

# 安装指南

本指南介绍安装和设置 Wegent 的不同方式。

## 系统要求

- **操作系统**：Linux、macOS 或 Windows
- **Python**：3.8 或更高版本
- **内存**：建议最少 4GB RAM
- **磁盘空间**：至少 1GB 可用空间

## 安装方式

### 方式一：pip（推荐）

最简单的安装方式：

```bash
pip install wegent
```

### 方式二：从源码安装

用于开发或获取最新功能：

```bash
git clone https://github.com/wecode-ai/Wegent.git
cd Wegent
pip install -e ".[dev]"
```

### 方式三：Docker

在容器中运行 Wegent：

```bash
docker pull wecode-ai/wegent:latest
docker run -it wecode-ai/wegent
```

## 配置

安装后，配置您的环境：

```bash
wegent init
```

这将在 `~/.wegent/config.yaml` 创建默认配置文件。

## 验证安装

检查 Wegent 是否正确安装：

```bash
wegent --version
```

## 故障排除

如果安装过程中遇到问题，请参阅我们的[故障排除指南](/docs/troubleshooting)。
