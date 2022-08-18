import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { getDetailComments } from '../redux/modules/commentSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { addCommentList } from '../redux/modules/commentSlice';

import { getCookieToken } from "../Cookie";

import EachComment from './EachComment';

const Comment = () => {

  const [value, setValue] = useState('')
  const { comments } = useSelector((state) => state.comments)
  const cookie = getCookieToken();
  const dispatch = useDispatch();
  const { id } = useParams();
 

  const inputComment = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => { 
    dispatch(getDetailComments(id))
  }, [])




  const addComment = async () => {
    if (value == '') return

    const newList = {
      id: Number(id),
      content: value,
    }
    dispatch(addCommentList(newList))

    // value = null;
    alert('등록완료!')
    setValue('')
  }
  
  let commentText;
  if (cookie) { 
    commentText =
      <StBox2>
    <Box sx={{ width: 350, maxWidth: '100%', }}>
      <TextField fullWidth label="comment" id="fullWidth" value={value} onChange={inputComment} />
    </Box>
    <Button variant="contained" onClick={addComment} style={{ backgroundColor: '#c95f19' }} sx={{ ml: 3 }}>SUBMIT</Button>
  </StBox2>
 }



  

  return (
      <>
      <StBox1>

        {comments.data && comments.data.map(
          (comment,idx) => <EachComment comment={comment} key={idx}/>
         )} 
        </StBox1> 


        {/* <StBox2>
          <Box sx={{ width: 350, maxWidth: '100%', }}>
            <TextField fullWidth label="comment" id="fullWidth" value={value} onChange={inputComment} />
          </Box>
          <Button variant="contained" onClick={addComment} style={{ backgroundColor: '#c95f19' }} sx={{ ml: 3 }}>SUBMIT</Button>
        </StBox2> */}
        {commentText}


      </>
    )
  }

export default Comment

const StBox1 = styled.div`
  width: 500px;
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
