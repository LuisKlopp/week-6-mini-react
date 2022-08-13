import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MUIButton from "./Button"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import EachComment from './EachComment';

const Comment = () => {

  return (


    <>
    <StBox1>
      <EachComment/>
    </StBox1>
    <StBox2>
    <Box sx={{width: 350,maxWidth: '100%',}}>
      <TextField fullWidth label="comment" id="fullWidth"/>
    </Box>
    <MUIButton style={{height:'30px'}}></MUIButton>
    </StBox2>
    </>
  )
}

export default Comment

const StBox1 = styled.div`
  width:35%;
  height:55px;
  margin-top:50px;
  display: flex;
  border-radius: 20px;
  position:sticky;
`

const StBox2 = styled.div`
  width:100%;
  height:55px;
  margin-top:50px;
  display: flex;
  justify-content:right;
  position:fixed;
  bottom:0;  
  margin-bottom:30px;
`

