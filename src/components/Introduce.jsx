import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import dotImg from '../img/dotdot.jpg'


const Introduce = () => {
  const { pathname } = useLocation();

    
  return (
    <IntroContainer>
      <IntroBox>
        {console.log(pathname)}      
        {pathname === '/'||pathname === '/login'? 
          ['사용하지 않는 물건을 공유 해보세요.',<br/>,'댓글로 소통해보아요.'] : pathname ==='/post' ?
          '상품 등록하기':'상세 페이지'}
        </IntroBox>
      </IntroContainer>
  )
}

export default Introduce;

const IntroContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 180px;
  background-image: url(${dotImg});
  position: relative;
`
const IntroBox = styled.div`
  font-family: 'Cafe24Ohsquareair';
  font-size: 30px;
  line-height: 50px;
  position: absolute;
  top: 50px;
  left: 50px;
`