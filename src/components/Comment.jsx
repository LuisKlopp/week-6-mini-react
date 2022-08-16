import React, { useState} from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EachComment from './EachComment';
import { addCommentList } from '../redux/modules/commentSlice'
import {useDispatch} from 'react-redux'

const Comment = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch();
  const inputComment = (e) => {
    setValue(e.target.value)
  }
  const addComment = () => {
    if(value == '') return
    const newList = {
      id: Date.now(),
      body: value,

    }
    dispatch(addCommentList(newList))
  }

  return (
    <>
    <StBox1>
      <EachComment/>
    </StBox1>
    <StBox2>
    <Box sx={{width: 350,maxWidth: '100%',}}>
          <TextField fullWidth label="comment" id="fullWidth" value={value} onChange={inputComment} />
    </Box>
        <Button variant="contained"  onClick={addComment}  style={{ backgroundColor: '#c95f19'}} sx={{ml:3}}>SUBMIT</Button>
    </StBox2>
    </>
  )
}

export default Comment

const StBox1 = styled.div`
  width:35%;
  height:55px;
  margin-top:50px;
  border-radius: 20px;
  position:sticky;
`

const StBox2 = styled.div`
  width:500px;
  height:55px;
  margin-top:50px;
  display: flex;
  position:fixed;
  right:0;
  bottom:0;  
  margin-bottom:30px;
  background-color: white;
`

