import React from 'react'
import styled from 'styled-components'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import dotImg from '../img/dotdot.jpg'
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";


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
  height: 100px;
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


const Header2 = () => {

  const navigate = useNavigate();
  return (
    <>
      {/* Header */}
    <HeaderContainer>
      <LogoPosition>
      <LogoFont onClick={() => { navigate('/') }}>🥕당근나라</LogoFont>
      <HeaderSideDiv>
          <Input defaultValue="Hello world" inputProps={ariaLabel} style={{ marginRight: '30px' }} />
          <Button variant="text" style={{marginLeft:'-50px'}}><ZoomInIcon/></Button>
          
          <Button variant="contained" color="success">LogIn</Button>
      </HeaderSideDiv>
      </LogoPosition>
      </HeaderContainer>
      
      {/* Introuduce */}
      <IntroContainer>
        <IntroBox>

        </IntroBox>
      </IntroContainer>

      {/* Filter */}

  </>
  )
}

export default Header2