<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
    xmlns:html="http://www.w3.org/TR/REC-html40"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>站点地图 (XML Sitemap) ｜ 节点库 jiedianku.online</title>
        <style>
          :root {
            --bg: #0b0f19;
            --surface: #111827;
            --surface-hover: #1f2937;
            --border: rgba(255, 255, 255, 0.08);
            --text: #f3f4f6;
            --text-dim: #9ca3af;
            --primary: #3b82f6;
            --accent: #8b5cf6;
          }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: var(--bg);
            color: var(--text);
            padding: 32px 16px;
            line-height: 1.6;
          }
          .container {
            max-width: 1080px;
            margin: 0 auto;
          }
          .header {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 24px;
            margin-bottom: 24px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
          }
          .title-area h1 {
            font-size: 22px;
            font-weight: 700;
            color: #fff;
            margin-bottom: 6px;
          }
          .title-area p {
            font-size: 14px;
            color: var(--text-dim);
          }
          .actions a {
            display: inline-block;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            color: #fff;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            padding: 8px 16px;
            border-radius: 8px;
            transition: all 0.2s ease;
          }
          .actions a:hover {
            opacity: 0.9;
            transform: translateY(-1px);
          }
          .table-wrap {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 14px;
            overflow: hidden;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 14px;
          }
          th {
            background: rgba(255, 255, 255, 0.03);
            color: var(--text-dim);
            font-weight: 600;
            padding: 14px 16px;
            border-bottom: 1px solid var(--border);
          }
          td {
            padding: 12px 16px;
            border-bottom: 1px solid var(--border);
            word-break: break-all;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover td {
            background: var(--surface-hover);
          }
          a.loc-link {
            color: #60a5fa;
            text-decoration: none;
            font-weight: 500;
          }
          a.loc-link:hover {
            text-decoration: underline;
            color: #93c5fd;
          }
          .priority-tag {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 4px;
            font-weight: 700;
            font-size: 12px;
            background: rgba(59, 130, 246, 0.15);
            color: #93c5fd;
          }
          .priority-high {
            background: rgba(16, 185, 129, 0.15);
            color: #6ee7b7;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="title-area">
              <h1>⚡ 节点库 XML 网站地图 (Sitemap)</h1>
              <p>官方标准搜索引擎抓取索引文件 ｜ 域名：jiedianku.online</p>
            </div>
            <div class="actions">
              <a href="https://jiedianku.online/">返回节点库首页</a>
            </div>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style="width: 55%;">页面 URL (Location)</th>
                  <th style="width: 15%;">更新频率</th>
                  <th style="width: 15%;">权重</th>
                  <th style="width: 15%;">最后修改</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <a class="loc-link" target="_blank">
                        <xsl:attribute name="href">
                          <xsl:value-of select="sitemap:loc"/>
                        </xsl:attribute>
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td style="color: #9ca3af;">
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td>
                      <span class="priority-tag">
                        <xsl:if test="sitemap:priority &gt;= 0.9">
                          <xsl:attribute name="class">priority-tag priority-high</xsl:attribute>
                        </xsl:if>
                        <xsl:value-of select="sitemap:priority"/>
                      </span>
                    </td>
                    <td style="color: #9ca3af;">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
