import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailComments } from '../redux/modules/commentSlice';
import CommentList from './CommentList';

export default function AlignItemsList() {
  const { comments } = useSelector((state) => state.comments)
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getDetailComments())
  }, [dispatch])
  console.log(comments)
  
  return (
    // <CommentList/>
    
      comments.length >0 ?? comments.map((comment, idx) => (
      <CommentList  key={comment.id} comment={comment} />)
   )
    
    
  )
}