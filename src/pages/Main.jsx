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



const Main = () => {

  const [post, setPost] = useState([])


  useEffect(() =>  {
    get_posts();

  }, [])

  const get_posts = async () => {
    const { data } = await axios.get("http://localhost:3001/posts");
    setPost(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
    console.log(post)
  };


  const navigate = useNavigate()
  return (
    <>
      <GlobalStyle />
      {/* Filter */}
      <Filter />
      <Outlet></Outlet>
      <StDiv>
      <Button variant="contained" style={{backgroundColor:'#c95f19', fontWeight:600}} onClick={() => {
        navigate('/post')
      }}>글쓰기</Button>
      </StDiv>
      <StList>
        {post.map((stuff, i)=> {
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

const StDiv = styled.div`
  width:95%;
  display: flex;
  justify-content: right;
  /* margin: 0px;  */
  position:fixed;
  /* bottom:0; */
  /* background-color: oragne; */
`