/*eslint-disable*/
import React,{useState,useRef,useReducer} from "react";
import styled, { createGlobalStyle } from "styled-components";
import {  Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import dotImg from '../img/dotdot.jpg'
import noImg from '../img/No-Image.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { addpost } from "../redux/modules/postSlice";
import axios from 'axios'
import { getCookieToken, getRefreshToken } from '../Cookie'
import UseGetDetail from "../hooks/UseGetDetail"; 

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  }
}

const Update = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();

  const detail = UseGetDetail(id)
  const data = detail?.data



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
      
    };
  }

  const onSubmit =  () =>  {

    const obj = {
      title,
      content,
      price,
      file: imageUrl
    }
    console.log(obj)
    if (title !== '' && content !== '' && price !== '') {
    updatepost(obj)
    alert('수정완료!')
    navigate('/');
    } else {
      alert('모든 정보를 입력해주세요')
    }
    // location.reload()
    };

    const updatepost = async (newList) => {
      console.log(newList)
      // axios.defaults.headers.common[
      //   "Authorization"
      // ] = `${response.headers.authorization}`;
      let response = await axios.put(`https://01192mg.shop/api/auth/posts/${id}`, newList, {
        headers: {
          "Authorization" : getCookieToken(),
          "refresh-token" : getRefreshToken()
        }
      }
      
      );

      return response.data
    }

  
  if (detail === null) {
    return <h1>isLoading</h1>
  } 

  return (
    <>
      <GlobalStyle />
      {/* Introuduce */}
    

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
            placeholder={data.title}
          ></StInput>
            <StSpan>내용</StSpan>
            <textarea
            id="outlined-multiline-flexible"
            // label=""
            name='content'
            onChange={onChange}
            sx={{mt:2, ml:3}}
            placeholder={data.content}
            style={{height:'120px',width:'90%', resize:'none',   borderRadius: '10px', fontSize:'17px', fontWeight:'600' ,padding:'10px 10px', border:'2px solid #d5d5d5'}}
          ></textarea>
          </StContent>

          
          <StPriceBox>
            <StPrice>
              <PriceSpan>Price:</PriceSpan>
              <StInput
              id="outlined-multiline-flexible"
              // label=""
              onChange={onChange}
              name='price'
              type='number'
              style={{ border:'2px solid #d5d5d5'}}
              placeholder={data.price}
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
          수정하기
        </Button>
      </StSubmitButton>

    </>
  );
};

export default Update;

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
  /* display: flex; */
  /* flex-direction: column; */
  margin-top: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const StSpan = styled.div`
  font-weight:600;
  font-size:24px ;
  margin-bottom:10px;
  `

// const StSpan_1 = styled.div`
// margin:30px 0px 0px 30px;
// `
const StPriceBox = styled.div`
  margin-top: 50px;
  margin-left: 0px;
`
const StPrice = styled.div`
  /* padding: 1rem; */
  font-weight:600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const PriceSpan = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin:0px 20px 0px 20px

`

const StSubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;