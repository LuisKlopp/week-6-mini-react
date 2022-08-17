import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main";
import Login from './pages/Login'
import Detail from "./pages/Detail";
import Post from "./pages/Post";
import { Routes, Route, Link, Redirect } from 'react-router-dom'
import SignUp from './pages/SignUp';
import Header from './components/Header';
import react, {useEffect, useState} from 'react';
import axios from 'axios'

function App() {

  useEffect(() => {

  })

  // const readpost = async () => {
  //   const response = await axios.get(`https://01192mg.shop/api/posts/${id}`)
  //   console.log(response) 
  // }

  return (
    <>
    <Header />
    <Routes>

      <Route path="/" element={<Main/>} >
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp/>}/>
      </Route>
        <Route path="/detail/:id" element={<Detail/>}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp/>}/>  
        </Route>
      <Route path="/post" element={<Post/>}/>

      {/* <Route path="/detail/:id" element={<Detail/>}/> */}

      </Routes>
    </>
  );
}

export default App;
