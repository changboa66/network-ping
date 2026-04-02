# Network Ping Extension (网络状态监测插件)

一款为 Antigravity 打造的极简、轻量级网络状态监测插件。

![Logo](icon.png)

## 📌 项目概述

本项目是一款专门针对 Antigravity（及兼容 VS Code 体系的编辑器）设计的状态栏工具。它通过静默发送 `HEAD` 请求来实时监测与 `google.com` 的连接状态，避免在编码时因网络中断而产生的困扰。

## 🌟 核心特性

- **直观反馈**：利用状态栏图标色彩变化（绿色表示畅通，红色表示中断），让您一眼即知网络现状。
- **低能耗设计**：每 30 秒进行一次极轻量的网络探测，完全不占用开发资源或主线程。
- **原生驱动**：基于 TypeScript 开发，完全使用 Node.js 原生 API，无任何第三方依赖。
- **即时响应**：支持点击状态栏图标进行手动瞬间刷新。

## 🛠 本地开发 (Development)

如果您想在本地运行或修改本项目，请遵循以下步骤：

1. **克隆仓库**：
   ```bash
   git clone https://github.com/changboa66/network-ping.git
   ```
2. **安装依赖**：
   ```bash
   npm install
   ```
3. **启动调试**：
   在编辑器中按下 `F5`，将开启一个带有插件预览的 [扩展开发主机] 窗口。

## 📝 版本记录 (Changelog)

- **v0.1.1**：
  - 优化项目元数据。
  - 增加全新设计的 Antigravity ↔ Google 连通性图标。
  - 适配 Open VSX 市场规范。
- **v0.1.0**：
  - 初始版本发布，支持基础 Ping 逻辑与状态展示。

## 🤝 贡献与反馈

非常欢迎通过 [GitHub Issues](https://github.com/changboa66/network-ping/issues) 提交 Bug 反馈或功能建议。如果您想贡献代码，欢迎提交 Pull Request。

## 📄 许可证 (License)

本项目采用 [MIT License](LICENSE) 开源协议。