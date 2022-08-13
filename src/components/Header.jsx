import React from 'react'
import styled from 'styled-components'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import dotImg from '../img/dotdot.jpg'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Header */}
    <HeaderContainer>
      <LogoPosition>
          <LogoFont onClick={() => { navigate('/') }}>🥕당근나라</LogoFont>
      <HeaderSideDiv>
          <Input defaultValue="Search" inputProps={ariaLabel} style={{ marginRight: '30px' }} />
          <Button variant="text" style={{marginLeft:'-50px'}} ><ZoomInIcon/></Button>
          <Button variant="contained" color="success" onClick={()=>{navigate('/login')}}>Login</Button>
      </HeaderSideDiv>
      </LogoPosition>
      </HeaderContainer>
      
      {/* Introuduce */}
      <IntroContainer>
        <IntroBox>
          사용하지 않는 물건을 공유 해보세요.<br/>
          댓글로 소통해보아요.
        </IntroBox>
      </IntroContainer>

      {/* Filter */}
      <FilterContainer>
        <FilterBox direction="row" spacing={2}>
          <Button color="error" >All</Button>
          <Button color="error">전자제품</Button>
          <Button color="error">생활용품</Button>
          <Button color="error">운동</Button>
          <Button color="error">기타</Button>
        </FilterBox>
      </FilterContainer>
  </>
  )
}

export default Header


const ariaLabel = { 'aria-label': 'description' };
const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
`

const LogoPosition = styled.div`
  align-items: left;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
`

const LogoFont = styled.p`
  font-family:'Cafe24Ssurround' ;
  font-size: 36px;
  margin-left: 30px;
  cursor: pointer;
  `
const HeaderSideDiv = styled.div`
  margin-top: 40px;
  margin-right: 20px;
  margin-left: 30px;
`
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

const FilterContainer = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FilterBox = styled.div`
  padding: 1rem;
  Button {
    margin: 0 20px;
    padding: 0.5rem;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Cafe24Ohsquareair';
  }
`