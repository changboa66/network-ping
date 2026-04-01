# Network Ping Extension (网络状态监测插件)

这是一款为 Antigravity（及兼容 VS Code 体系的编辑器）专门开发的一款极其轻量级的网络状态监测插件。它会静默地测试您当前与 `google.com` 的网络连通性，并在编辑器下方右侧状态栏中展示实时结果。

**开源仓库**: [https://github.com/changboa66/network-ping](https://github.com/changboa66/network-ping)


## 🌟 功能亮点

- **实时状态感知**：状态栏直观显示连通情况，当网络畅通时显示绿色的 `$(globe)` 图标，当访问受阻或超时时显示红色的 `$(bracket-error)` 错误图标。
- **自动后台轮询**：默认每隔 **30 秒**自动发送一次极轻量的网络 `HEAD` 请求，极低开销、不堵塞主线程，不干扰正常代码开发。
- **一键手动刷新**：只需直接点击状态栏上的网络指示器图标，即可强制立即触发一次全新的网络连接测试。
- **跨环境适用**：纯底层扩展工具，不论您正在进行前端还是后端、何种语言项目开发，均能平稳工作。

## 🛠 开发配置与底层技术

- **开发语言**：TypeScript
- **核心通信机制**：直接利用 Node.js 宿主环境原生的 `https` 模块构建，**零第三方 npm 依赖**，保证了插件的代码纯度、安全性和极小体积。
- **UI 交互**：利用原生 `StatusBarItem` 及 `ThemeColor` （如 `testing.iconPassed` 与 `testing.iconFailed`）扩展 API。