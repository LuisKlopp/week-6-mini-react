/*eslint-disable*/

import styled, { createGlobalStyle } from "styled-components";
import * as React from 'react';
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
import { Routes, Route, useNavigate } from 'react-router-dom';




const Login = () => {

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const password = data.get('password')
    const loginData = {
      email,
      password,
    }
    console.log(loginData)
  };



  return (

    <ModalContainer>
      <WrapperPosition>
        <GlobalStyle />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 5, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h3" style={{marginTop:'-10px'}}>
            LOG IN
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 15 }} style={{marginTop:'-1px'}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 10, mb: 2 , p: 2}}
              style={{marginTop:'15px'}}
            >
              Log In
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
            <Grid item>
                <Link variant="body2" onClick={() => {
                  navigate('/SignUp')
                }} style={{cursor:'pointer'}}>
                  {"아직 회원이 아니신가요?"}
                </Link>
            </Grid>
          </Box>
        </Box>
      </WrapperPosition>
    </ModalContainer>

  );
};

export default Login;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`
const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
    background-color: ecdede;
	}
  `;
const WrapperPosition = styled.div`
  position: absolute;
  z-index: 1;
  /* top: 400px; */
  width: 30%;
  height: 600px;
  padding: 0 24px;
  background-color: white;
  border: 1px solid black;
  box-shadow:  0px 0px 20px #000;;
`