import React, {useEffect,useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from 'axios';

const UseGetDetail = (id) => {
  const [state, setState] = useState(null)

  const readpost = async () => {
    const res = await axios.get(`https://01192mg.shop/api/posts/${id}`)
    console.log(res)
    setState(res.data)
  }
  
  useEffect(() => {
    readpost()
  }, [])

  return state
}

export default UseGetDetail