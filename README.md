# 🍳 Cookpass 自煮旅圖
是一款以 React + Vite 打造的互動式食譜地圖平台，讓使用者透過做菜環遊世界。每道料理都標示來源地區，搭配文化小知識與圖文步驟教學，從味蕾體驗異國生活。平台設計注重使用者體驗，支援 RWD 響應式介面與元件模組化架構，並以 GitHub Pages 部署，方便展示與維護。網站內建收藏、留言、上傳實作照片等互動功能，打造專屬料理旅程。Cookpass 不只是找食譜，而是每次做菜都像一次出走，探索世界的溫度與風味。


---

## 🚀 快速開始

```bash
# 安裝套件
npm install

# 啟動開發伺服器
npm run dev
# 預設網址：http://localhost:5173
# 可加路徑查看頁面，例如 http://localhost:5173/#/map


🛠 每次開發前請執行：
git pull  # 確保版本為最新


📁專案結構
cookpass-react/
├── public/                # 靜態資源（圖像、字體等）
│   └── images/
├── src/
│   ├── components/        # 共用元件（Header, Footer, ScrollToTop 等）
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── pages/             # 頁面元件
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── RecipeMap.jsx
│   │   ├── RecipeDetail.jsx
│   │   └── NotFound.jsx
│   ├── context/           # 全域狀態管理（AuthContext、UIContext）
│   ├── styles/            # SCSS 樣式與變數（main.scss, _base.scss 等）
│   ├── App.jsx            # 路由與整體結構設定
│   └── main.jsx           # 程式進入點
├── vite.config.js
├── package.json
└── README.md


🛠 使用技術
React 18+

React Router DOM 6+

Vite 6+

SCSS 模組化樣式

GitHub Pages 部署支援（使用 <HashRouter>）



🧩 命名規範與格式
檔案命名： 使用大駝峰（PascalCase）命名元件與檔案，例如 RecipeMap.jsx

共用元件： 放入 components/ 並建立對應 SCSS

圖片素材： 請放置於 public/images/ 目錄下

SCSS 分類： 建議使用 _variables.scss, _base.scss, _layout.scss 等模組拆分




📱 RWD 注意事項
✔ 主要寬度：1440px
✔ 寬螢幕：1920px 以上（如無需要可略）
✔ 平板：1024px 以下
✔ 手機橫向：820px 以下
✔ 手機直向：640px 以下
※ 行動裝置請確保按鈕點擊範圍 ≥ 48px



🧭 GitHub Pages 部署指南
安裝部署工具（只需一次）：
npm install gh-pages --save-dev

在 package.json 增加：
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "deploy": "gh-pages -d dist"
}

在 vite.config.js 設定正確路徑：
export default defineConfig({
  base: './',
  plugins: [react()],
});


使用 <HashRouter> 來避免 GitHub Pages 無法處理 /path 的問題。


執行部署指令(每次上傳皆須執行)：
npm run build
npm run deploy
