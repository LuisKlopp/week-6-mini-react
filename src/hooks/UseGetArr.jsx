import React, {useEffect,useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from 'axios';

const UseGetArr = (id) => {
  const [arr, setArr] = useState(null)

  const readarr = async () => {
    const res = await axios.get('https://01192mg.shop/api/posts');
    setComment(res.data)
    return arr
  }
  
  useEffect(() => {
    readarr()
  }, [])
  
  console.log(arr)

  return arr
}

export default UseGetArr