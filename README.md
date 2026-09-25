# 法律职位检索

面向中国内地法律相关校招及 1–3 年初级社招的公开职位汇总。

## 自动更新

GitHub Actions 每天按北京时间执行三次检索：

- 09:00
- 14:00
- 18:00

GitHub 的定时任务可能因平台排队延迟数分钟。每次运行会保留历史快照、合并本轮结果、去重并发布到 GitHub Pages。也可以在 Actions 页面手动运行。

## 本地构建

```bash
npm run refresh
npm run build
npm run check
```

简历自动填充插件版本：v0.8.0。
