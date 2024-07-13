import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

import Home from "./single-pages/Home";
import Blog from "./single-pages/Blog";
import StudentTestimonials from "./single-pages/StudentTestimonials";

import Notfound from "./Components/Notfound";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Cursor isGelly={true} cursorSize={16} cursorBackgrounColor="#3a10e5" />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/student-testimonials" element={<StudentTestimonials />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
