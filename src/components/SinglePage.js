import styled from 'styled-components';

export const PageContainer = styled.div`
& * {
  // outline: 1px solid gold;
}
  margin: 20px 0 100px 0;
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
`
export const PageDate = styled.div`
  margin-top: 50px;
  font-size: 16px;
  color: rgba(117, 117, 117, 1);
`
export const PageTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0 50px 0;
  white-space:pre-wrap; //保留空格 + 自動換行 https://kknews.cc/zh-tw/code/v3xj6y4.html
  word-wrap: break-word;
  word-break: break-all;
`
export const PageContent = styled.div`
  margin-top: 16px;
  font-size: 20px;
  line-height: 32px;
  white-space:pre-wrap; //保留空格 + 自動換行 https://kknews.cc/zh-tw/code/v3xj6y4.html
  word-wrap: break-word;
  word-break: break-all;
  width: 100%;
`

export const Img = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  margin: 50px 0 50px 0;
  background-repeat: no-repeat;
  background-size: cover;
  ${(props) => `
    background-image: url(${props.$ImgRrl});
  `}
`

// P2. 像是 Mediun 上的叉叉
// export const BackIcon = styled.div`
//   position: absolute;
//   top: -50px;
//   right: -50px;
// `