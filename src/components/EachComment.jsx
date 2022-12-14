import React, { useEffect, useState} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { editContent, deleteContent } from '../redux/modules/commentSlice';
import moment from "moment";
import UseGetUser from '../hooks/UseGetUser';
import { getCookieToken, getRefreshToken } from '../Cookie';
import axios from 'axios'

const EachComment = ({ comment }) => {
  const  data  = useSelector((state) => state.comments)
  // console.log(data.comments.data)
  // data.comments.data && data.comments.data.map(x=>console.log(x.author))
  const [editState, setEditState] = useState(false)
  const [edit, setEdit] = useState('')
  const dispatch = useDispatch();
  // const id = useParams();
  
  const editBtn = (e) => {
    // if (data.comments.data.map( person => person.author !== e )) return alert('본인만 작성할 수 있습니다')
    setEditState(true)
  }
  const editOnChange = (e) => {

    setEdit(e.target.value)
  }
  const completeBtn = (id) => {
    if(edit === '') return setEditState(false)
    const newList = {
      id: id,
      content: edit
    }
    dispatch(editContent(newList))
    setEditState(false)
  }
  const deleteBtn = (id) => {
    dispatch(deleteContent(id))
    alert('삭제완료!')
  }

  const name = UseGetUser()


  let button;
  let button_1;
  if (name === comment.author) {
    if (editState === true) {
      button = <CheckIcon sx={{ mr: 3, cursor: 'pointer' }} onClick={() => { completeBtn(comment.id) }} />
      button_1 = <DeleteIcon sx={{ mr: 3, cursor: 'pointer' }} onClick={() => { deleteBtn(comment.id)}}></DeleteIcon>
    } else {
      button =<EditIcon sx={{ mr: 3, cursor: 'pointer' }} onClick={ editBtn}/>
      button_1 = <DeleteIcon sx={{ mr: 3, cursor: 'pointer' }} onClick={() => { deleteBtn(comment.id)}}></DeleteIcon>
    }
  }

  





  return (
    <>
    <List sx={{ maxWidth: 500, bgcolor: 'background.paper'}}>
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
                    {editState ? <input onChange={editOnChange} placeholder={comment.content}></input>:comment.content}
                  </Typography>
                      
                </React.Fragment>
              }
              />
              
              <div >
                <div style={{display:'flex',justifyContent:'center'}}>
              {button}
              {button_1}
                </div>
                <div>
                  <div style={{ marginRight: '20px',marginTop:'20px'}}>{moment().from(moment(comment.modifiedAt.slice(0, 16)))}</div>
                </div>
              </div>  
          </ListItem>
        </List>
    </>
  )
}

export default EachComment