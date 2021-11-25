# README

> 這裡會放兩三個吧
> Blog + Gobang + Project

1. 簡介 (圖)
2. 功能 (圖)
3. 使用技術
4. 專案結構

重點：附截圖、介紹增加專業度

## Blog

### 簡介

這是一個使用 React 搭配 react-router-dow 實現 SPA 部落格系統，串接 Lidemy API

版面設計參考接觸程式後才熟悉的網站 Medium。

測試帳號：raye
測試密碼：Lidemy
[圖一：首頁]

### 功能

- 分頁功能，排序順序為最新到最舊，五筆文章為一頁
- 點擊顯示單頁文章內容
- 註冊/登入功能，密碼固定為 「Lidemy」
- 發布文章功能：登入狀態可新增文章
- 使用 JWT 驗證身分

[圖一：分頁]
[圖二：登入/註冊]
[圖三：發文]

### 使用技術

- 以 React 搭配 react-router-dom 路由實作 SPA 網站
- 以 styled-components 
- 使用 function component 搭配 hooks 
