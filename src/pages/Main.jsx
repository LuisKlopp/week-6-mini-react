/*eslint-disable*/
import React, {useEffect, useState} from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import MUIButton from "../components/Button";
import StuffCard from "../components/StuffCard";
import { useNavigate, Outlet } from "react-router-dom";
import data from "../components/CardTest";
import Button from '@mui/material/Button';
import axios from "axios";
import Filter from '../components/Filter';
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/modules/postSlice";
import { getCookieToken } from "../Cookie";




const Main = () => {

  const { isLoading, error, posts } = useSelector((state) => state.posts);

  const arr = posts.data

  const dispatch = useDispatch()
  
  useEffect(() =>  {
    dispatch(getPost())
  }, [])

  const navigate = useNavigate()
  const cookie = getCookieToken()
  // const state = useSelector((state) => state)
  // const { isLoading, error, posts } = useSelector((state) => state.posts)

  console.log(posts)
  let button;

  if (cookie) {
     button = <Button variant="contained" style={{backgroundColor:'#c95f19', fontWeight:600}} onClick={() => {
      navigate('/post')
    }}>글쓰기</Button>
  }








    if(posts.data === undefined){
      return (
        <StWrapper>
        <h1>로딩중!</h1>
      </StWrapper>
      )
    } else {

      return (
        <>
        <GlobalStyle />
        {/* Filter */}
        <Filter />
        <Outlet></Outlet>
        <StDiv>
          {button}
        </StDiv>
        <StList>
          {posts.data.map((stuff, i)=> {
            return <StuffCard stuff={stuff} key={stuff.id}/>
          })}
        </StList>
      </>
    );
  }
}
  


  
  
  
  export default Main;
  
  const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Cafe24Ssurround';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Cafe24Ohsquareair';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202@1.0/Cafe24Ohsquareair.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
	body {
		padding: 0;
		margin: 0;
    background-color: ecdede;
    
	}
  `;


const StWrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StList = styled.div`
  width: 80%;
  /* height: vh; */
  margin:0 auto;
  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
  text-align: center;
  flex-wrap: wrap;
  margin-top:50px;
`;

const StDiv = styled.div`
  width:95%;
  display: flex;
  justify-content: right;
  /* margin: 0px;  */
  position:fixed;
  /* bottom:0; */
  /* background-color: oragne; */
`