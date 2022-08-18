import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import EachComment from './EachComment';
import CommentList from './CommentList'
import { getDetailComments } from '../redux/modules/commentSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { addCommentList } from '../redux/modules/commentSlice';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import UseGetComment from "../hooks/UseGetComment"
import { getCookieToken } from '../Cookie';


const Comment = ({comments}) => {

  const [value, setValue] = useState('')

  const dispatch = useDispatch();
  const { id } = useParams();
  const cookie = getCookieToken()
 

  const inputComment = (e) => {
    setValue(e.target.value)
  }


  const addComment = async () => {
    if (value == '') return

    const newList = {
      id: Number(id),
      content: value,
    }
    dispatch(addCommentList(newList))
    alert('등록완료!')
    window.location.reload()

  }
  
  let commentText;
  if (cookie) { 
      commentText =   <StBox2>
    <Box sx={{ width: 350, maxWidth: '100%', }}>
      <TextField fullWidth label="comment" id="fullWidth" value={value} onChange={inputComment} />
    </Box>
    <Button variant="contained" onClick={addComment} style={{ backgroundColor: '#c95f19' }} sx={{ ml: 3 }}>SUBMIT</Button>
  </StBox2>
 }



  

  return (
      <>
      <StBox1>
        {comments?.data.map(
          comment=> <List sx={{ maxWidth: 500, bgcolor: 'background.paper'}}>
          <ListItem alignItems="flex-start" sx={{borderBottom: '1px solid lightgray'}}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText sx={{mb:1}}
              primary={comment.author+'님'}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline',fontSize:'20px'}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {comment.content}
                  </Typography>
                      
                </React.Fragment>
              }
              />
              <div style={{display:'flex',justifyContent:'right', marginTop:'30px'}}>
                  <div style={{marginRight:'20px'}}>{comment.modifiedAt.slice(0, 16).split('T')[0]}</div>
                  <div>{comment.modifiedAt.slice(0, 16).split('T')[1]}</div>
              </div>  
          </ListItem>
        </List>
        )}
        {/* <CommentList comments={comments?.data} /> */}
        </StBox1>
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

