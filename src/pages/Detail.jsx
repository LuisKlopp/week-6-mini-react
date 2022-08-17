/*eslint-disable*/
import React, {useEffect,useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Comment from "../components/Comment";
import dotImg from '../img/dotdot.jpg'
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import axios from 'axios'
import { getPost } from "../redux/modules/postSlice";
import { getCookieToken, getRefreshToken } from "../Cookie";



const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {id} = useParams();
  // const readpost = async () => {
  //   const response = await axios.get(`https://01192mg.shop/api/posts/${id}`)
  //   console.log(response)
  //   return response
  // }


  // dispatch(getPost())

  
  // useEffect(() =>  {
  //   readpost()
  // }, [])

  
  const { isLoading, error, posts, isFinish } = useSelector((state) => state.posts);

  
  const object = posts.data.find(data => data.id === Number(id))


  const deletepost = async () => {
    // axios.defaults.headers.common[
    //   "Authorization"
    // ] = `${response.headers.authorization}`;
    const response = await axios.delete(`https://01192mg.shop/api/auth/posts/${id}`, {
      headers: {
        "Authorization" : getCookieToken(),
        "refresh-token" : getRefreshToken()
      }
    }
    )
    console.log(response)
    alert('삭제완료!')
    navigate('/')
  }



  return (
    <>
      <GlobalStyle />
      <Outlet></Outlet>


      <StWrapper>
        <StDiv >
      <Button variant="contained">수정하기</Button>
      <Button  onClick={deletepost} variant="contained" style={{backgroundColor:'grey'}}>
        삭제하기
      </Button>
      </StDiv>
        <StImgBox style={{background: `url(${object.image_url})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%' }}></StImgBox>
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
            title={object.nickname}
          />
        </StProfile>
        <StContent>
          <StSpan>title</StSpan>
          <StSpan_1>{object.title}</StSpan_1>
          <StSpan>content</StSpan>
          <StSpan_1>{object.content}</StSpan_1>
          <StSpan style={{ marginTop: "50px" }}>{object.price}</StSpan>
        </StContent>

      {/* <Comment></Comment> */}
      </StWrapper>
    </>
  );
};


export default Detail;

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

const StImgBox = styled.div`
  width: 500px;
  height: 450px;
  background-size: 50px;
  background-repeat: no-repeat;
  border-radius: 20px;
  margin-top:50px;
`;

const StProfile = styled.div`
  width: 35%;
  border: 2px solid #ececec;
  height: 100px;
  display: flex;
  align-items: center;
  margin-top:50px;
`;

const StContent = styled.div`
  width: 35%;
  border: 2px solid #ececec;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

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
const StDiv = styled.div`
  width:200px;
  display: flex;
  justify-content: space-between;
`




