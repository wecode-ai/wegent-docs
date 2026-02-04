#!/bin/bash

# 本地模拟 GitHub Action 同步文档的脚本
# 用法: ./scripts/local-sync-docs.sh [主仓库路径]
# 默认主仓库路径: ../ws1

set -e

# 获取脚本所在目录的父目录（docs-repo 根目录）
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOCS_REPO="$(dirname "$SCRIPT_DIR")"

# 主仓库路径
MAIN_REPO="${1:-$DOCS_REPO/../wegent}"

# 转换为绝对路径
MAIN_REPO="$(cd "$MAIN_REPO" 2>/dev/null && pwd)" || {
    echo "错误: 主仓库路径不存在: $1"
    echo "用法: $0 [主仓库路径]"
    exit 1
}

echo "=========================================="
echo "本地文档同步脚本"
echo "=========================================="
echo "文档仓库: $DOCS_REPO"
echo "主仓库:   $MAIN_REPO"
echo "=========================================="

# 检查主仓库的 docs 目录结构
if [ ! -d "$MAIN_REPO/docs" ]; then
    echo "错误: 主仓库中没有 docs 目录"
    exit 1
fi

echo ""
echo "主仓库 docs 目录结构:"
ls -la "$MAIN_REPO/docs/" 2>/dev/null || echo "(空)"

# Step 1: 同步英文文档
echo ""
echo "[1/6] 同步英文文档..."
if [ -d "$MAIN_REPO/docs/en" ]; then
    # 删除现有的 md 文件
    find "$DOCS_REPO/docs" -name "*.md" -type f -delete 2>/dev/null || true
    # 复制英文文档
    cp -r "$MAIN_REPO/docs/en/"* "$DOCS_REPO/docs/"
    echo "  ✓ 已从 $MAIN_REPO/docs/en 复制英文文档"
else
    echo "  ⚠ 主仓库中没有 docs/en 目录，跳过英文文档同步"
fi

# Step 2: 同步中文文档
echo ""
echo "[2/6] 同步中文文档..."
if [ -d "$MAIN_REPO/docs/zh" ]; then
    # 删除现有的中文 md 文件
    find "$DOCS_REPO/i18n/zh/docusaurus-plugin-content-docs/current" -name "*.md" -type f -delete 2>/dev/null || true
    # 复制中文文档
    cp -r "$MAIN_REPO/docs/zh/"* "$DOCS_REPO/i18n/zh/docusaurus-plugin-content-docs/current/"
    echo "  ✓ 已从 $MAIN_REPO/docs/zh 复制中文文档"
else
    echo "  ⚠ 主仓库中没有 docs/zh 目录，跳过中文文档同步"
fi

# Step 3: 同步图片
echo ""
echo "[3/6] 同步图片..."
if [ -d "$MAIN_REPO/docs/assets/images" ]; then
    cp -r "$MAIN_REPO/docs/assets/images/"* "$DOCS_REPO/static/img/" 2>/dev/null || true
    echo "  ✓ 已从 $MAIN_REPO/docs/assets/images 复制图片"
else
    echo "  ⚠ 主仓库中没有 docs/assets/images 目录，跳过图片同步"
fi

# Step 4: 同步示例文件
echo ""
echo "[4/6] 同步示例文件..."
if [ -d "$MAIN_REPO/docs/examples" ]; then
    mkdir -p "$DOCS_REPO/static/examples"
    cp -r "$MAIN_REPO/docs/examples/"* "$DOCS_REPO/static/examples/" 2>/dev/null || true
    echo "  ✓ 已从 $MAIN_REPO/docs/examples 复制示例文件"
else
    echo "  ⚠ 主仓库中没有 docs/examples 目录，跳过示例同步"
fi

# Step 5: 更新文档中的路径
echo ""
echo "[5/6] 更新文档中的路径..."
cd "$DOCS_REPO"

# 更新英文文档中的图片路径
find docs -name "*.md" -type f -exec sed -i '' 's|\.\.\/\.\.\/assets\/images\/|/img/|g' {} \; 2>/dev/null || true
find docs -name "*.md" -type f -exec sed -i '' 's|\.\.\/assets\/images\/|/img/|g' {} \; 2>/dev/null || true

# 更新中文文档中的图片路径
find i18n/zh/docusaurus-plugin-content-docs/current -name "*.md" -type f -exec sed -i '' 's|\.\.\/\.\.\/assets\/images\/|/img/|g' {} \; 2>/dev/null || true
find i18n/zh/docusaurus-plugin-content-docs/current -name "*.md" -type f -exec sed -i '' 's|\.\.\/assets\/images\/|/img/|g' {} \; 2>/dev/null || true

# 更新示例路径
find docs -name "*.md" -type f -exec sed -i '' 's|\.\.\/examples\/|/examples/|g' {} \; 2>/dev/null || true
find i18n/zh/docusaurus-plugin-content-docs/current -name "*.md" -type f -exec sed -i '' 's|\.\.\/examples\/|/examples/|g' {} \; 2>/dev/null || true

echo "  ✓ 已更新图片和示例路径"

# Step 6: 修复 MDX 兼容性问题
echo ""
echo "[6/6] 修复 MDX 兼容性问题..."

# 使用 Node.js 脚本进行更完善的 MDX 修复
if [ -f "$DOCS_REPO/scripts/fix-mdx-compat.mjs" ]; then
    node "$DOCS_REPO/scripts/fix-mdx-compat.mjs"
    echo "  ✓ 已使用 fix-mdx-compat.mjs 修复 MDX 兼容性问题"
else
    echo "  ⚠ fix-mdx-compat.mjs 不存在，使用基础 sed 修复..."
    
    # 修复 <br> 标签
    find docs -name "*.md" -type f -exec sed -i '' 's/<br>/<br\/>/gi' {} \; 2>/dev/null || true
    find i18n/zh/docusaurus-plugin-content-docs/current -name "*.md" -type f -exec sed -i '' 's/<br>/<br\/>/gi' {} \; 2>/dev/null || true

    # 修复 < 后跟数字的情况
    find docs -name "*.md" -type f -exec sed -i '' 's/<\([0-9]\)/\&lt;\1/g' {} \; 2>/dev/null || true
    find i18n/zh/docusaurus-plugin-content-docs/current -name "*.md" -type f -exec sed -i '' 's/<\([0-9]\)/\&lt;\1/g' {} \; 2>/dev/null || true

    # 修复 {variable} 模式
    find docs -name "*.md" -type f -exec sed -i '' 's/{model}/`{model}`/g' {} \; 2>/dev/null || true
    find i18n/zh/docusaurus-plugin-content-docs/current -name "*.md" -type f -exec sed -i '' 's/{model}/`{model}`/g' {} \; 2>/dev/null || true

    echo "  ✓ 已修复 MDX 兼容性问题"
fi

echo ""
echo "=========================================="
echo "✅ 文档同步完成！"
echo "=========================================="
echo ""
echo "你可以运行以下命令预览文档:"
echo "  npm run start        # 英文版"
echo "  npm run start -- --locale zh  # 中文版"
echo ""
echo "查看变更:"
echo "  git status"
echo "  git diff"
