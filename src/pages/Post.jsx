/*eslint-disable*/
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {  Link, useNavigate } from "react-router-dom";
import Header2 from "../components/Header2";
import dotImg from '../img/dotdot.jpg'
import noImg from '../img/No-Image.png'
import Button from '@mui/material/Button';



const Post = () => {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <Header2></Header2>
      {/* Introuduce */}
      <IntroContainer>
        <IntroBox>
          상품 등록하기
        </IntroBox>
      </IntroContainer>

      <StWrapper>
        
        <div>
          <label htmlFor="upload-photo">
          <StImgBox />
            <input
              style={{ display: 'none' }}
              id="upload-photo"
              name="upload-photo"
              type="file"
            />
            <Button color="secondary" fullWidth variant="contained" component="span"  sx={{ mt: 1 }}>
              Upload button
            </Button>
          </label>
        </div>
      </StWrapper>
    </>
  );
};

export default Post;


const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
    background-color: ecdede;
    
	}
  `;

const StWrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 150px;
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

const StImgBox = styled.div`
  width: 300px;
  height: 350px;
  background: url(${noImg});
  background-size: 100% 100%;
  background-position: center;
  border-radius: 20px;
  `;
