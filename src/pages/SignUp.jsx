/*eslint-disable*/
import React, {useReducer} from "react";
import styled, { createGlobalStyle } from "styled-components";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Identity } from "@mui/base";

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

// const reducer = (state, action) => {
//   return {
//     ...state,
//     [action.name]: action.value,
//   }
// }

const SignUp = () => {
  const navigate = useNavigate();
   
  const [username, setUsername] = React.useState("");
  const [nickname, setNickame] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checkPw, setCheckPw] = React.useState("");

  const [idConfirm, setIdConfirm] = React.useState(false);
  const [nameConfirm, setNameConfirm] = React.useState(false);
  const [passwordInput, setPasswordInput] = React.useState(false);
  const [passwordCheck, setPasswordCheck] = React.useState(false);



    // //회원가입 유효성 검사
  const checkUsername = (e) => {
    // let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    if ((e.target.value).length >= 3) {
      setIdConfirm(true)
      setUsername(e.target.value)
    }
  };

  const overlapIdCheck = async () => {
    console.log('username',username)
    try {
     await axios
    .get(`https://01192mg.shop/api/members/check/${username}`)
       .then((res) => {
         if (res.data.success === false) {
           alert('이미 있는 아이디입니다!')
           return document.getElementById('username').focus()
         } else {
          alert('사용가능한 아이디입니다!')
        }
   });
      
    } catch (err) {
      console.log(err)
    }
  }

  const checkNickName = (e) => {
    if ((e.target.value).length >= 3 && (e.target.value).length <= 10) {
      setNickame(e.target.value);
      setNameConfirm(true)
    }
  }

  const inputPassword = (e) => {
    let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,12}$/
    // console.log('비밀번호 유효성 검사 :: ', regExp.test(e.target.value));
    if (regExp.test(e.target.value) === true) {
      setPassword(e.target.value)
      setPasswordInput(true)
    }
  }

  const checkPassword = (e) => {
    if (e.target.value === password) {
      setPasswordCheck(true)
      setCheckPw(e.target.value)
    } 
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username == '') {
      alert('아이디를 입력해주세요')
    return document.getElementById('username').focus()
    } else if (nickname == '') {
      alert('닉네임을 입력해주세요')
    return document.getElementById('nickname').focus()

    } else if (password== '') {
      alert('비밀번호를 입력해주세요')
      return document.getElementById('password').focus()

    } else if  (password != checkPw) {
      alert('비밀번호가 일치하지 않습니다')
      return document.getElementById('c-password').focus()

    } else if (checkPw == ''){
      alert('비밀번호를 확인해주세요')
      return document.getElementById('c-password').focus()

    } 
    

    const userInfo = {
      username,
      nickname,
      password,
    }
    console.log(userInfo)
    if (userInfo) {
      axios
        .post('https://01192mg.shop/api/members/signup', userInfo)
        .then((res) => {
          console.log(res.data)// 쿠키에 토큰 저장
        });
      alert('회원가입이 완료되었습니다')
      navigate('/login')
    }
  };

  

  return (
    <SignUpContainer>
      <WrapperPosition>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ mt: 5, bgcolor: 'success.main' }}>
                <LockOutlinedIcon />
              </Avatar>


              <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                SIGN UP
              </Typography>


              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5 }}>
               
                {/* 회원가입시 사진업도르 */}
                {/* <label htmlFor="upload-photo">

                  <UploadPhoto></UploadPhoto>
                  <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                  />

                  <Button color="secondary" variant="contained" component="span"  sx={{ mt: 1, ml: 14 }}>
                    Upload button
                  </Button>

                </label> */}
                
                <InputAndButton>
                  <TextField
                    sx={{mt:3, width:300}}
                    margin="normal"
                    required
                    id="username"
                    label="id"
                    name="username"
                    autoComplete="username"
                    onChange={
                      checkUsername
                    } 
                    autoFocus
                  />
                  <Button
                    type="button"
                    variant="contained"
                    sx={{ mt: 3, mb: 2, p: 1.7 }}
                    onClick={overlapIdCheck}
                    >
                  중복확인
                  </Button>
                </InputAndButton>
                <div>{idConfirm ? null : <div style={{color:'green', fontSize:'14px', marginLeft:'10px'}}>이메일형식으로 입력해주세요</div>}</div>
                <InputAndButton>
                  <TextField
                    sx={{ mt: 3, }}
                    fullWidth
                    margin="normal"
                    required
                    id="nickname"
                    label="Nickname"
                    name="nickname"
                    autoComplete="nickname"
                    onChange={checkNickName} />
                  {/* <Button
                  type="button"
                  variant="contained"
                    sx={{ mt: 3, mb: 2, p: 1.7 }}
                    onClick={overlapIdCheck}
                > 중복확인</Button> */}
                </InputAndButton>
                    {nameConfirm ? null :<div style={{color:'blue', fontSize:'14px', marginLeft:'10px'}}>3글자이상 10글자 이하로 입력해주세요</div> }
               
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={inputPassword}
                />
                 {passwordInput ? null :<div style={{color:'black', fontSize:'14px', marginLeft:'10px', fontWeight:'700'}}>8 ~ 12자 영문, 숫자 조합</div> }
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="c-password"
                  label="PasswordCheck"
                  type="password"
                  id="c-password"
                  autoComplete="current-password"
                  onChange={checkPassword}
                  />
                  { passwordCheck ? null :<div style={{color:'black', fontSize:'14px', marginLeft:'10px', fontWeight:'700'}}>한번 더 입력해주세요</div> }
  
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, p: 1.5 }}
                >
                  Sign In
                </Button>
                <Button
                  type="button"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 1, mb: 2, p: 1.5 }}
                  onClick={()=>{navigate(-1)}}
                >
                  뒤로가기
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </WrapperPosition>

    </SignUpContainer>
  );
};

export default SignUp;


const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
    background-color: ecdede;
    
	}
`

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const WrapperPosition = styled.div`
  position: absolute;
  z-index: 1;
  top: 400px;
  width: 600px;
  height: 800px;
  padding: 0 24px;
  background-color: white;
  border: 1px solid black;
  box-shadow:  0px 0px 20px #000;;
`

// const UploadPhoto = styled.div`
//   width: 200px;
//   height: 200px;
//   background-color: beige;
//   margin-left: 90px;
// `
const InputAndButton = styled.div`
  display: flex;
  justify-content: space-between;
`