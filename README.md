# 周而复始 · YURING

公开作品集，使用 GitHub Pages 与 GitHub Actions 自动发布。原 Sites 网站保留。

## 更新内容

1. 在 GitHub 登录自己的账号，打开 `published/content.json`，点击铅笔修改，提交到 main。
2. 图片或视频先上传到 `public-site/assets`（Add file → Upload files），再将内容中的路径填写为 `assets/文件名`。
3. `content.projects` 保存标题、分类、描述、封面和素材。`media: null` 保留原有内容，数组则替换内容。
4. 新作品在 `content.newProjects` 添加唯一 `custom_` 开头编号和 title、day（0 周一至 5 周六），同时在 projects 添加同编号内容。
5. 首页文字等在 `content.pages`；相册在 `content.albums`。
6. 提交后打开 Actions → Publish portfolio。绿色代表发布成功，红色打开具体步骤查看错误；失败时原已发布网站继续保留。

现有默认项目内容在 public-site/content.js、revision.js、galleries.js 中。未覆盖的内容保持原样。

## 本地构建

需要 Node.js 24，运行 `node build-pages.mjs`。发布目录为 pages-output，只包含公开网站。

管理权限由 GitHub 账号控制。原本地管理页不会自动写入 GitHub；若继续使用本地编辑器，需要先导出并转换备份。仓库不包含密码、令牌或原 Sites 后台。

## 素材权利

作品与照片版权归各自权利人所有。本仓库公开不代表授予转载或商用许可。
