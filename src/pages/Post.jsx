/*eslint-disable*/
import React,{useState,useRef,useReducer} from "react";
import styled, { createGlobalStyle } from "styled-components";
import {  Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import dotImg from '../img/dotdot.jpg'
import noImg from '../img/No-Image.png'
import Button from '@mui/material/Button';
import axios from 'axios'
import { getCookieToken, getRefreshToken } from '../Cookie'

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  }
}

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useReducer(reducer, {
    title: '',
    content: '',
    price: '',
  })

  const { title, content, price } = state;


  const onChange = (e) => {
    setState(e.target)
  }

  const [imageUrl, setImageUrl] = useState(null);
  const [imgFile, setImgFile] = useState("")
  const imgRef = useRef();

  const onChangeImage = () => {
    const reader = new FileReader();

    const file = imgRef.current.files[0];
    console.log(file)
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      setImgFile(file)
      console.log(reader.result)
    };
  }

  const onSubmit = () => {
    if (title === '' || content === '' || price === '') return alert('빈칸을 채워주세요!')
    const obj = {
      title,
      content,
      price,
      file: imageUrl
    }
    addpost(obj)
    alert('등록완료!')
    navigate('/');
    };

    const addpost = async (newList) => {
      console.log(newList)
 
      let response = await axios.post("https://01192mg.shop/api/auth/posts", newList, {
        headers: {
          "Authorization" : getCookieToken(),
          "refresh-token" : getRefreshToken()
        }
      }
      
      );

      return response.data
    }
  

  return (
    <>
      <GlobalStyle />
    

      <StWrapper>
        
        <StUploadContainer>
          <label htmlFor="upload-photo">
            
            <StImgTag src={imageUrl ? imageUrl : (noImg)}></StImgTag>
            
            <input
              style={{ display: 'none' }}
              accept="image/*"
              id="upload-photo"
              name="upload-photo"
              type="file"
              onChange={onChangeImage}
              ref={imgRef}
            />
            <Button color="secondary" variant="contained" component="span"  sx={{ mt: 1, ml: 10 }}>
              Upload button
            </Button>
          </label>
        </StUploadContainer>
        <div>
        <StContent>
          <StSpan>제목</StSpan>
          <StInput  
            id="outlined-multiline-flexible"
            onChange={onChange}
            name='title'
            style={{fontWeight:'600', marginBottom:'20px',  border:'2px solid #d5d5d5'}}
          ></StInput>
            <StSpan>내용</StSpan>
            <textarea
            id="outlined-multiline-flexible"
            name='content'
            onChange={onChange}
            sx={{mt:2, ml:3}}
            style={{height:'120px',width:'90%', resize:'none',   borderRadius: '10px', fontSize:'17px', fontWeight:'600', padding:'10px 10px', border:'2px solid #d5d5d5'}}
          ></textarea>
          </StContent>

          
          <StPriceBox>
            <StPrice>
              <PriceSpan>Price:</PriceSpan>
              <StInput
              id="outlined-multiline-flexible"
              onChange={onChange}
              name='price'
              type='number'
              style={{ border:'2px solid #d5d5d5'}}
              />
              <PriceSpan>원</PriceSpan>
            </StPrice>
          </StPriceBox>
        </div>
      </StWrapper>
      <StSubmitButton>
        <Button variant="contained" 
        style={{ width: '120px', padding: '0.5rem', backgroundColor: '#e86914', marginLeft: '30px' }}
        onClick={onSubmit}
        encType="multipart/form-data"
        >
          등록하기
        </Button>
      </StSubmitButton>

    </>
  );
};

export default Post;

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
`


const StWrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const StInput = styled.input`
  width:80%;
  height:30px;
  border:1px solid black;
  margin:0 auto;
  border-radius: 10px;
  padding-left:10px;
  `

const StUploadContainer = styled.div`
  width: 400px;
`
const StImgTag = styled.img`
  width: 300px;
  height: 350px;
`
const StContent = styled.div`
  width:300px;
  border: 2px solid #ececec;
  height: 300px;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const StSpan = styled.div`
  font-weight:600;
  font-size:22px ;
  margin-bottom:10px;
  font-family: 'Cafe24Ohsquareair';
  `


const StPriceBox = styled.div`
  margin-top: 50px;
  margin-left: 0px;
`
const StPrice = styled.div`
  font-family: 'Cafe24Ohsquareair';
  font-weight:600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const PriceSpan = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin:0px 20px 0px 20px;
`

const StSubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;