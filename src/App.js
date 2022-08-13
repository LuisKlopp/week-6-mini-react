import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main";
import Login from './pages/Login'
import { Routes, Route, Link, Redirect } from 'react-router-dom'
import SignUp from './pages/SignUp';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} >
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      {/* <Route path="/detail/:id" element={<Detail/>}/> */}

    </Routes>
  );
}

export default App;
