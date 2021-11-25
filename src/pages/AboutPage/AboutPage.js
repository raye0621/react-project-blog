import styled from 'styled-components';

import { } from '../../components/About';
import PageTop from '../../components/PageTop'

const AboutWrapper = styled.div`
  & * {
    outline: 1px solid gold;
  }
  display: flex;
`
const AboutTitle = styled.h2`
font-size: 30px;
`
const AboutContent = styled.div`
  min-width: 80%;
  padding-right: 40px;
`
const AboutText = styled.div``
const AboutImgWrapper = styled.div`
  min-width: 20%;
`
const AboutImg = styled.img`
  width: 100%;
`

export default function PostPage() {

  return(
    <>
      <PageTop />

      <AboutTitle>
        關於部落格
      </AboutTitle>
      <AboutWrapper>
        <AboutContent>
          本部落格為程式導師計畫第二十二周作業，使用 React 搭配 React-rount-dom 實作出的 SPA 部落格
          <p>https://lidemy.com/</p>
          <p>https://lidemy.com/</p>
          <p>https://lidemy.com/</p>
          <p>https://lidemy.com/</p>
        </AboutContent>
        <AboutImgWrapper>
          <AboutImg src='https://www.filepicker.io/api/file/a8fY8pGRSbWi2WNX6QIu' />
        </AboutImgWrapper>
      </AboutWrapper>
      <AboutTitle>
        關於我
      </AboutTitle>
      <AboutText>
        嗨！本部落格為
        https://lidemy.com/
      </AboutText>
    </>
  )
}