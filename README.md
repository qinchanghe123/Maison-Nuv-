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

- `images/custom-embroidery/`：刺绣定制主图及客户素材
- `images/custom-embroidery/sample-designs/`：刺绣定制的 Logo 原图与样衣样版
- `images/custom-embroidery/patterns-dark/`：国旗与运动图案
- `images/custom-embroidery/patterns-light/`：卡通、字母与花卉图案
- `images/custom-embroidery/finished-showcase/`：刺绣成品展示
- `images/diy/`：DIY 分类与产品封面素材
- `images/diy/finished-showcase/`：DIY 成品展示
- `images/fabric-dolls/`：玩偶首图及 `1–5.jpg` 成品展示
- `images/socks/`：袜子主图及产品图库
- `images/loungewear/`：家居服主图及产品图库
- `images/pillows/`：枕头主图及产品图库
