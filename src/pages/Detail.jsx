/*eslint-disable*/
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header2 from "../components/Header2";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Comment from "../components/Comment";
import dotImg from '../img/dotdot.jpg'



const Detail = () => {
  return (
    <>
      <GlobalStyle />
      <Header2></Header2>

      {/* Introuduce */}
      <IntroContainer>
        <IntroBox>
          상세 페이지
        </IntroBox>
      </IntroContainer>

      <StWrapper>
          <StImgBox>
          </StImgBox>
            <StProfile>
            <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="profile-name"
      />
            </StProfile>
            <StContent>

              <StSpan>title</StSpan>
              <StSpan_1>title</StSpan_1>
              <StSpan>content</StSpan>
              <StSpan_1>content</StSpan_1>
              
            </StContent>
      
      <Comment></Comment>
      </StWrapper>
    </>
  );
};

export default Detail;

const GlobalStyle = createGlobalStyle`
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

const StImgBox = styled.div`
  width: 35%;
  height: 450px;
  background: url("https://dnvefa72aowie.cloudfront.net/origin/article/202208/6e016d28f789340ee3eae445aa8d43ccc309bfd604f575086a6335b422954d3f.webp?q=95&s=1440x1440&t=inside");
  background-size: 100% 100%;
  background-position: center;
  border-radius: 20px;
  `;

const StProfile = styled.div`
  width:35%;
  border: 2px solid #ececec;
  height:100px;
  display: flex;
  align-items: center;
  `

const StContent = styled.div`
  width:35%;
  border: 2px solid #ececec;
  height:300px;
  display: flex;
  flex-direction: column;
  margin-top:40px;
`

const StSpan = styled.div`
  margin:30px 0px 0px 30px;
  font-weight:600;
  `

const StSpan_1 = styled.div`
margin:30px 0px 0px 30px;
/* font-weight:600 */
`
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




