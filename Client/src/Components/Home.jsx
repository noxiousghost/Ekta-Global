import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Hero from './Hero'

const Home = () => {
  return (
    <div>
        <Nav/>
        <div>
          Hero Section
        </div>
        {/* <Hero/> */}
        <Footer/>
    </div>
  )
}

export default Home