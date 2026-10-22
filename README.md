# 节点库 (jiedianku.online) - 高性能独立博客与订阅导航站

本项目是专为域名 **`jiedianku.online`** 量身定制的高并发、高美观度、SEO 友好的网络节点博客网站。

---

## 🚀 架构设计与日流量 1000 人承载保障

1. **超轻量静态边缘渲染 (Zero Backend Lag)**
   - 全站采用原生现代 HTML5、CSS 变量设计系统与 Vanilla JS，没有任何笨重庞大的服务端数据库查询或 PHP/Node 常驻进程阻塞。
   - 即使瞬时涌入 1,000 到 10,000+ 独立访客，CPU 与内存消耗趋近于零，首屏加载时间在 CDN 加持下小于 200ms。

2. **全套 SEO 搜索引擎优化**
   - 包含规范的 Canonical 网址指向（`https://jiedianku.online/...`）；
   - 包含完整的 OpenGraph 社交卡片与 Schema.org 结构化数据；
   - 配套生成了标准 [`robots.txt`](file:///c:/Users/PC/Desktop/博客/jiedianku.online/robots.txt) 与 [`sitemap.xml`](file:///c:/Users/PC/Desktop/博客/jiedianku.online/sitemap.xml)，方便 Google、Bing、百度快速爬取收录。

3. **精致排版与全套独立页面导航**
   - [首页 index.html](file:///c:/Users/PC/Desktop/博客/jiedianku.online/index.html)：今日节点速递、核心指标条、聚合订阅一键提取、客户端入口、精选教程、常见问题 FAQ。
   - [节点库 nodes.html](file:///c:/Users/PC/Desktop/博客/jiedianku.online/nodes.html)：多地区（香港、日本、新加坡、美国、德国）节点，支持协议过滤（VLESS Reality、VMess、Trojan、Hysteria2），单节点与聚合订阅一键复制。
   - [机场推荐 recommend.html](file:///c:/Users/PC/Desktop/博客/jiedianku.online/recommend.html)：高速稳定 IPLC/IEPL 专线机场精选榜单、月付套餐、专属折扣优惠码。
   - [机场评测 reviews.html](file:///c:/Users/PC/Desktop/博客/jiedianku.online/reviews.html)：晚高峰真机测速天梯榜、流媒体与 ChatGPT 解锁度实测、避坑红黑榜。
   - [机场知识库 knowledge.html](file:///c:/Users/PC/Desktop/博客/jiedianku.online/knowledge.html)：系统化网络中继技术百科、IPLC/IEPL 专线原理、协议对比、原生 IP 解锁与避坑法则。
   - [客户端下载 clients.html](file:///c:/Users/PC/Desktop/博客/jiedianku.online/clients.html)：Windows、macOS、Android、iOS 全平台主流客户端下载，直通官方 GitHub Release。
   - [使用教程 tutorials.html](file:///c:/Users/PC/Desktop/博客/jiedianku.online/tutorials.html)：常见问题、防 DNS 泄漏与协议评测。
   - [Clash Verge 教程详情 tutorial-clash.html](file:///c:/Users/PC/Desktop/博客/jiedianku.online/tutorial-clash.html)：保姆级两栏图文配置流程。
   - [网络工具箱 tools.html](file:///c:/Users/PC/Desktop/博客/jiedianku.online/tools.html)：IP 归属地检测、DNS 泄漏测试、WebRTC 探测、Fast.com 极速测速。
   - [关于与免责声明 about.html](file:///c:/Users/PC/Desktop/博客/jiedianku.online/about.html)：站点架构说明、合规免责声明、站长联系方式。

---

## 🌐 域名绑定与部署推荐（免费支撑百万流量）

### 推荐方案 A：Cloudflare Pages（最推荐）
1. 注册/登录 [Cloudflare](https://dash.cloudflare.com/)；
2. 进入 **Workers & Pages** -> **Create application** -> **Pages**；
3. 选择 **Direct Upload**（直接上传文件夹）或绑定 GitHub 仓库；
4. 将本目录所有文件上传完毕后，在 Custom Domains 中绑定您的域名 `jiedianku.online`；
5. 开启 Cloudflare 的免费 SSL、全球 CDN 边缘缓存和 DDoS 防护。

### 推荐方案 B：Vercel
1. 访问 [Vercel](https://vercel.com/)，导入项目文件夹；
2. 在项目设置中的 **Domains** 绑定 `jiedianku.online`。

### 推荐方案 C：常规 VPS / 宝塔面板 / Nginx
若部署在自己的云服务器上，直接将本目录文件上传至网站根目录即可，Nginx 配置示例：
```nginx
server {
    listen 80;
    server_name jiedianku.online www.jiedianku.online;
    root /www/wwwroot/jiedianku.online;
    index index.html;
    
    # 开启 gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
}
```
