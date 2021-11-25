import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import {  useParams } from "react-router-dom";
import { getPage } from "../../WebAPI";
import PageTop from '../../components/PageTop'
import { 
  PageContainer,
  PageDate,
  PageTitle,
  Img,
  PageContent
} from '../../components/SinglePage'


export default function PostPage() {
  let { id } = useParams();
  const [page, setPage] = useState([])
  let randomNum = Math.floor(Math.random()*50)
  const ImgRrl = `https://picsum.photos/800/300?random=${randomNum}`
  // P2. 圖片隨機應該要包起來到 constants?

  useEffect(() => {
    getPage(id).then(page => setPage(page[0]))
  }, [id])

  return(
    <>
      <PageTop />
      <PageContainer>
        <PageDate>{new Date(page.createdAt).toLocaleString()}</PageDate>
        <PageTitle>{page.title}</PageTitle>
          <Img $ImgRrl={ImgRrl} />
        <PageContent>{page.body}</PageContent>
      </PageContainer>
    </>
  )
}