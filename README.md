# Maison Nuvé 电子产品目录

本文件夹是可直接部署的纯静态网站，不需要安装依赖或执行构建命令。

## GitHub Pages 部署

1. 将 `site` 文件夹内的全部文件上传到 GitHub 仓库根目录。
2. 在仓库的 **Settings → Pages** 中选择 **Deploy from a branch**。
3. 选择对应分支及根目录 `/ (root)`，保存后等待 GitHub Pages 发布。

也可以将整个 `site` 文件夹上传到仓库，然后在 GitHub Pages 中使用 GitHub Actions 部署该目录。

网站使用相对资源路径，因此支持部署到 `username.github.io/repository/` 形式的仓库子路径。
