import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import 'remixicon/fonts/remixicon.css'
import 'animate.css';

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App