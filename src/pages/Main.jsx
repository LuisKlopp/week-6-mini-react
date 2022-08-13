/*eslint-disable*/
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import MUIButton from "../components/Button";
import StuffCard from "../components/StuffCard";
// import Button from '@mui/material/Button';

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      {/* <MUIButton/> */}
      <StList>
        <StuffCard/>
        <StuffCard/>
        <StuffCard/>
        <StuffCard/>
      </StList>
    </>
  );
};

export default Main;

const GlobalStyle = createGlobalStyle`
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
