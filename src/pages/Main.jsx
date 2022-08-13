/*eslint-disable*/
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import MUIButton from "../components/Button";
import StuffCard from "../components/StuffCard";
import { Outlet } from "react-router-dom";
import data from "../components/CardTest";

// import Button from '@mui/material/Button';

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Outlet></Outlet>
      <StList>
        {data.map((stuff, i)=> {
          return <StuffCard stuff={stuff} key={i}/>
        })}
      </StList>

    </>
  );
};

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
