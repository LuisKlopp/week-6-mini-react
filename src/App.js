import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import { Routes, Route, Link, Redirect } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      {/* <Route path="/detail/:id" element={<Detail/>}/> */}
    </Routes>
  );
}

export default App;
