import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import Blog from './Components/Blog';
import StudentTestimonials from './Components/StudentTestimonials';

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/student-testimonials' element={<StudentTestimonials/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App