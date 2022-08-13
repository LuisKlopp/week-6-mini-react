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

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  }
}

const SignUp = () => {
  const navigate = useNavigate();

  const [state, setState] = useReducer(reducer, {
    username: "",
    nickname: "",
    password: "",
  });

  const { username, nickname, password } = state;

  const onChange = (e) => {
    setState(e.target);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      username,
      nickname,
      password,
    }
    console.log(userInfo)

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
                <label htmlFor="upload-photo">

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

                </label>
                
                <InputAndButton>
                  <TextField
                    sx={{mt:3, width:300}}
                    margin="normal"
                    required
                    // fullWidth
                    id="username"
                    label="ID"
                    name="username"
                    autoComplete="username"
                    onChange={onChange}
                    autoFocus
                  />
                  <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2, p:1.7 }}
                    >
                  중복확인
                </Button>
                </InputAndButton>
                <InputAndButton>
                  <TextField
                  sx={{mt:3, width:300}}
                  margin="normal"
                  required
                  id="nickname"
                  label="Nickname"
                  name="nickname"
                  autoComplete="nickname"
                  onChange={onChange}
                  autoFocus
                  />
                  <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, p:1.7 }}
                > 중복확인</Button>
                </InputAndButton>
             
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={onChange}
                  autoComplete="current-password"
                />
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="c-password"
                  label="PasswordCheck"
                  type="password"
                  id="c-password"
                  autoComplete="current-password"
                />
  
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, p:1.5 }}
                >
                  Sign In
                </Button>
                <Button
                  // type="submit"
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
  `;

const StWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const WrapperPosition = styled.div`
  position: absolute;
  z-index: 1;
  top: 10px;
  width: 600px;
  height: 1000px;
  padding: 0 24px;
  background-color: white;
  border: 1px solid black;
  box-shadow:  0px 0px 20px #000;;
`

const UploadPhoto = styled.div`
  width: 200px;
  height: 200px;
  background-color: beige;
  margin-left: 90px;
`
const InputAndButton = styled.div`
  display: flex;
  justify-content: space-between;
`