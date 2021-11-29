## React Blog

這是一個使用 React 搭配 react-router-dow 實現 SPA 部落格系統，串接 Lidemy API，版面設計參考接觸程式後熟悉的網站 [Medium](https://medium.com/)。

測試帳號：raye
測試密碼：Lidemy


- [DEMO](https://raye0621.github.io/react-project-blog/#/)
- [Lidemy API](https://github.com/Lidemy/lidemy-student-json-api-server)

![](https://i.imgur.com/98Id1jk.gif)

### 功能

- 分頁功能，排序順序為最新到最舊，五筆文章為一頁
- 點擊顯示單頁文章內容
- 註冊/登入功能，密碼固定為 「Lidemy」
- 發布文章功能：登入狀態可新增文章
- 使用 JWT 驗證身分

![home](https://i.imgur.com/tG6YpDJ.jpg)

![singlepage](https://i.imgur.com/nDxzSuy.jpg)

![loginlogout](https://i.imgur.com/hgkvWhm.jpg)


### 使用技術

- 以 React 搭配 react-router-dom 路由實作 SPA 網站
- 以 JSX 語法撰寫元件
- 使用 styled-components
- 使用 function component 搭配 react hooks 

## 專案結構

- /src
	- /components
	- /constants
		- breakpoint.js
	- /pages
		- AboutPage.js
		- HomePage.js
		- LoginPage.js
		- PostsPage.js
		- RegisterPage.js
		- SinglePage.js
	- WebAPI.js
	- context.js
	- index.js: Utility functions
	- utils.js: Integrate to call API
