/*eslint-disable*/
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";

const Main = () => {


  return (
    <>
      <GlobalStyle/>
      <StWrapper>
       <Header />
      </StWrapper>
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

const StWrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;