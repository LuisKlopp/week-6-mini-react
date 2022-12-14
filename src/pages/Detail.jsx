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
import UseGetDetail from "../hooks/UseGetDetail"; 
import UseGetComment from "../hooks/UseGetComment"


const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const {id} = useParams();

  const detail = UseGetDetail(id)
  const comments = UseGetComment(id)

  const data = detail?.data



  const deletepost = async () => {

    const response = await axios.delete(`https://01192mg.shop/api/auth/posts/${id}`, {
      headers: {
        "Authorization" : getCookieToken(),
        "refresh-token" : getRefreshToken()
      }
    }
    )
    if (!response.data.success) {
      alert('본인 글만 삭제할 수 있습니다!')
    } else {
      alert('삭제완료!')
      navigate('/')
    }
  }

  const updatepost = async () => {
    const response = await axios.get('https://01192mg.shop/api/members/info', {
      headers: {
        "Authorization" : getCookieToken(),
        "refresh-token" : getRefreshToken()
      }
    })
    if (response.data.data.nickname === data.nickname) {
      navigate(`/update/${id}`)
    } else {
      alert('본인 글만 수정하세요!')
    }
  }


  if (detail === null) {
    return <h1>isLoading</h1>
  } 

  return (
    <>
      <GlobalStyle />
      <Outlet></Outlet>


      <StWrapper>
        <StDiv >
      <Button onClick={updatepost} variant="contained">수정하기</Button>
      <Button  onClick={deletepost} variant="contained" style={{backgroundColor:'grey'}}>
        삭제하기
      </Button>
      </StDiv>
        <StImgBox style={{background: `url(${data.imageUrl})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%' }}></StImgBox>
        <StProfile>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }

            title={data.nickname}
          />
        </StProfile>
        <StContent>
          <StSpan_1>{data.title}</StSpan_1>
          <div style={{ fontSize: '24px',padding:'1rem', margin:'0 16px'}}>{data.content}</div>
          <StSpan >{data.price}원</StSpan>
        </StContent>

          <CommentContainer>
          <Comment comments={comments}></Comment>
          </CommentContainer>
 
        
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
  width: 500px;
  border: 2px solid #ececec;
  height: 100px;
  display: flex;
  align-items: center;
  margin-top:50px;
`;

const StContent = styled.div`
  width: 500px;
  border: 2px solid #ececec;
  margin-top: 40px;
  margin-bottom: 30px;
  position:relative;
  overflow-wrap: break-word;
`;

const StSpan = styled.div`
  margin:30px;
  float: right;
  font-weight:600;
  font-size:30px;
  `

const StSpan_1 = styled.div`
  margin:30px 0px 0px 30px;
  font-weight:600;
  font-size:25px;
`

const StDiv = styled.div`
  width:200px;
  display: flex;
  justify-content: space-between;
`
const CommentContainer = styled.div`
  height: 100%;
  margin-bottom: 100px;
`



