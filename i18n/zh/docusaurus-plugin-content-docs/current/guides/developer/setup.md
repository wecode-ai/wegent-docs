---
sidebar_position: 1
---

# 开发环境设置

设置您的开发环境以贡献 Wegent。

## 前置条件

- Python 3.8+
- Git
- Node.js 18+（用于文档）
- Docker（可选）

## 克隆仓库

```bash
git clone https://github.com/wecode-ai/Wegent.git
cd Wegent
```

## 设置虚拟环境

```bash
python -m venv venv
source venv/bin/activate  # Windows 系统: venv\Scripts\activate
```

## 安装依赖

```bash
# 安装开发依赖
pip install -e ".[dev]"

# 安装 pre-commit hooks
pre-commit install
```

## 配置

创建本地配置文件：

```bash
cp config.example.yaml config.local.yaml
```

编辑 `config.local.yaml` 填入您的设置。

## 验证设置

运行测试套件：

```bash
pytest
```

## IDE 设置

### VS Code

推荐扩展：
- Python
- Pylance
- YAML

### PyCharm

导入项目并配置 Python 解释器使用虚拟环境。

## 下一步

- 阅读[测试指南](/docs/guides/developer/testing)
- 了解[数据库迁移](/docs/guides/developer/database-migrations)
