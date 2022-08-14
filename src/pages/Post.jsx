/*eslint-disable*/
import React,{useState,useRef} from "react";
import styled, { createGlobalStyle } from "styled-components";
import {  Link, useNavigate } from "react-router-dom";
import Header2 from "../components/Header2";
import dotImg from '../img/dotdot.jpg'
import noImg from '../img/No-Image.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Post = () => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  const imgRef = useRef();

  const [title, setTitle] = useState('title');
  const [content, setContent] = useState('content');
  const [price, setPrice] = useState('30,000원');

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  
  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      // console.log("이미지주소", reader.result);
    };
  }
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
          <StSpan>Title</StSpan>
          <TextField
            id="outlined-multiline-flexible"
            // label=""
            multiline
            maxRows={4}
            value={title}
              onChange={handleChangeTitle}
              sx={{mt:2, ml:3}}
          >title</TextField>
            <StSpan>Content</StSpan>
            <TextField
            id="outlined-multiline-flexible"
            // label=""
            multiline
            maxRows={4}
            value={content}
            onChange={handleChangeContent}
            sx={{mt:2, ml:3}}
          >content</TextField>
          </StContent>

          
          <StPriceBox>
            <StPrice>
              <PriceSpan>Price</PriceSpan>
              <TextField
              id="outlined-multiline-flexible"
              // label=""
              multiline
              maxRows={4}
              value={price}
              onChange={handleChangePrice}
              sx={{mt:3, ml:3}}
              />
            </StPrice>
              
          </StPriceBox>
        </div>
      </StWrapper>
      <StSubmitButton>
        <Button variant="contained" style={{ width: '120px', padding: '0.5rem', backgroundColor: '#e86914', marginLeft: '30px' }}>
          등록하기
        </Button>
      </StSubmitButton>

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
  /* display: flex; */
  /* flex-direction: column; */
  margin-top: 0px;
  margin-left: 40px;
`

const StSpan = styled.div`
  margin:30px 0px 0px 30px;
  font-weight:600;
  font-size:24px ;
  `

// const StSpan_1 = styled.div`
// margin:30px 0px 0px 30px;
// `
const StPriceBox = styled.div`
  margin-top: 10px;
  margin-left: 40px;
`
const StPrice = styled.div`
  /* padding: 1rem; */
  font-weight:600;
  display: flex;
`

const PriceSpan = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin-top: 30px;
`

const StSubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;