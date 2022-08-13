/*eslint-disable*/
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import MUIButton from "../components/Button";
// import Button from '@mui/material/Button';

const Main = () => {


  return (
    <>
      <GlobalStyle/>
      {/* <StWrapper> */}
       <Header></Header>
      {/* </StWrapper> */}
       {/* <MUIButton/> */}
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

const StWrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
`;