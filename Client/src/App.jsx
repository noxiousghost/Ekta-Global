import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import Blog from './Components/Blog';
import StudentTestimonials from './Components/StudentTestimonials';
import Notfound from './Components/Notfound';

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/student-testimonials' element={<StudentTestimonials/>}/>
    <Route path='*' element={<Notfound/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App