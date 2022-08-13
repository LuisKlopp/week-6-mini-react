import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main";
import Login from './pages/Login'
import Detail from "./pages/Detail";
import Post from "./pages/Post";
import { Routes, Route, Link, Redirect } from 'react-router-dom'
import SignUp from './pages/SignUp';


function App() {
  return (
    <Routes>

      <Route path="/" element={<Main />} >
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp/>}/>
      </Route>
      <Route path="/Detail" element={<Detail />}/>
      <Route path="/post" element={<Post/>}/>

      {/* <Route path="/detail/:id" element={<Detail/>}/> */}

    </Routes>
  );
}

export default App;
