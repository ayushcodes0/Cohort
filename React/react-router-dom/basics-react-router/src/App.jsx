import { useState } from 'react'
import './App.css'
import  {BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Home from './components/Home'
import Contact from './Contact'

function App() {
  

  return (
    <>
    <div>Hello World</div>
    
      <BrowserRouter>
        <AppBar/> 
        <Routes>
          <Route path='/' element={<Home/>} ></Route> 
          <Route path='/contact' element={<Contact/>} ></Route> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

function AppBar(){
  const navigate = useNavigate();
  return(
    <>
      <div>
        <button onClick={()=>{navigate("/contact")}}>contact</button>
        <button onClick={()=>{navigate("/")}}>home</button> 
      </div>
    </>
  )
}

export default App
