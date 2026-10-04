# 直接翻译 · Direct Translate

[官网 / Website](https://qq244358862.github.io/zhijie-direct-translate/) · [报告问题 / Report a bug](https://github.com/qq244358862/zhijie-direct-translate/issues/new?template=bug-report.yml) · [功能建议 / Suggest an improvement](https://github.com/qq244358862/zhijie-direct-translate/issues/new?template=feature-request.yml)

网页与 PDF 双语阅读、输入框原位翻译、本地保存阅读成果。网站支持简体中文、繁体中文和英文；软件当前版本 0.6.8。

Bilingual webpage and PDF reading, in-place input translation, and locally saved reading progress. The website supports Simplified Chinese, Traditional Chinese, and English. Current extension version: 0.6.8.

本仓库用于产品介绍页和公开反馈。目前不包含扩展源码或安装包。网页/PDF 主要为英文译简体中文，OCR 支持英文、德文。

This repository hosts the product website and public feedback. It does not currently distribute the extension source or installation packages. Webpage/PDF translation mainly supports English → Simplified Chinese; OCR supports English and German.

## Feedback / 反馈 / 回饋

Use the language you prefer. Include the extension version, browser, and steps to reproduce. Issues are public; do not attach API keys, passwords, or private PDFs.

可使用你习惯的语言。请提供软件版本、浏览器和复现步骤。反馈公开，请勿附上密钥、密码或私人 PDF。

可使用你習慣的語言。請提供軟體版本、瀏覽器和重現步驟。回報公開，請勿附上金鑰、密碼或私人 PDF。

## Website deployment

GitHub Pages uses the files in site/. Push changes to main or run the Publish product website workflow. No backend, analytics, or remote scripts are embedded. Contact links open external services only when selected.

## Reading and data choices / 阅读与资料选择

打开网页自动翻译默认关闭，需用户启用和授权，沿用当前翻译服务。PDF 默认在本机保存，也可在打开或导入前选择“仅本次阅读”。删除文档清理关联缓存，导出阅读包包含完整原 PDF 且未加密，外部备份须另行删除。使用 API 前确认接收地址与发送范围，可在设置撤回；API Key 存于浏览器扩展本地，不进入 PDF 记录或阅读包。机器翻译和 OCR 可能有误，重要内容请核对原文。

Automatic webpage translation is off by default and requires opt-in and permission; it uses the current translation service. PDFs save locally by default, with session-only reading available before opening or importing. Deleting a document clears its linked cache. Reading-package exports include the complete original PDF and are unencrypted; remove external backups separately. Review and confirm the API recipient and sending scope before use; withdraw in settings. API keys stay in local browser extension settings and are excluded from PDF records and reading packages. Machine translation and OCR may be wrong; check important content against the original.
