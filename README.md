# Maison Nuvé 电子产品目录

本文件夹是可直接部署的纯静态网站，不需要安装依赖或执行构建命令。

## GitHub Pages 部署

1. 将 `site` 文件夹内的全部文件上传到 GitHub 仓库根目录。
2. 在仓库的 **Settings → Pages** 中选择 **Deploy from a branch**。
3. 选择对应分支及根目录 `/ (root)`，保存后等待 GitHub Pages 发布。

也可以将整个 `site` 文件夹上传到仓库，然后在 GitHub Pages 中使用 GitHub Actions 部署该目录。

网站使用相对资源路径，因此支持部署到 `username.github.io/repository/` 形式的仓库子路径。

## 图片目录

新增客户素材已整理为 GitHub 友好的英文路径：

- `images/custom-embroidery/`：刺绣定制主图及客户选色用色号表
- `images/custom-embroidery/logo-customization/`：Logo 原图及刺绣样衣展示
- `images/custom-embroidery/patterns-dark/`：黑色背景的国旗、运动图案
- `images/custom-embroidery/patterns-light/`：白色背景的卡通、字母与花卉图案
- `images/custom-embroidery/finished-examples/`：实际成品效果
- `images/diy/`：DIY 图案、设计与颜色参考
- `images/fabric-dolls/`：玩偶首图及 `1–5.jpg` 成品展示
