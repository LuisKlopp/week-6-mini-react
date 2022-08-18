import React from 'react'
import styled from 'styled-components'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Routes, Route, Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import Introduce from './Introduce';
import { removeCookieToken } from '../Cookie'
import {getCookieToken} from '../Cookie'
import UseGetUser from "../hooks/UseGetUser";

const Header = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  const cookie = getCookieToken();
  

  const username = UseGetUser();
  

  


  return (
    <>
      {/* Header */}
    <HeaderContainer>
      <LogoPosition>
          <LogoFont onClick={() => { navigate('/') }}>🥕당근나라</LogoFont>
      <HeaderSideDiv>
        <div>
          <Input placeholder="Search" inputProps={ariaLabel} style={{ marginRight: '30px' }} />
          <Button variant="text" style={{marginLeft:'-50px'}} ><ZoomInIcon/></Button>
          </div>
            {cookie ?
              <div style={{display:'flex'}}>
                <div style={{ backgroundColor: 'beige', width: '200px', textAlign:'center', lineHeight:"50px" }}>{username}님 환영합니다</div>
                <Button variant="contained" color="success" onClick={() => {
                  removeCookieToken()
                  navigate('/')
                  window.location.reload()
                }} >
                LOGOUT
                </Button>
              </div>
              :
            <Button variant="contained" color="success" onClick={() => {
              if (pathname === '/') {
                  navigate('/login');
                } else if (pathname === '/detail') {
                  navigate('/detail/login');
                } 
              }}>LOGIN
              </Button>
            }
            
      </HeaderSideDiv>
      </LogoPosition>
      </HeaderContainer>
      
      {/* Introuduce */}
      <Introduce />


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
  display: flex;
  height:50px;
`






