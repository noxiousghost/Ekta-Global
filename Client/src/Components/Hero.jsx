import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (

    <div className='relative'>
           <img src="/Images/hero1.jpeg" className=' opacity-70 md:w-full '  alt="hero" />
           <div className='absolute top-0 z-10 items-center text-center flex flex-col gap-2 w-full'>
           <h1>Nepal's Leading study abroad consultants</h1>
        <p>We've helped 60,000+ students turn theri dreams into reality, for FREE!*</p>
        <Link href="/" className='bg-black px-6 py-2 text-white rounded-2xl hover:bg-purple-500 size-fit'>
        Get Started for FREE
        </Link>
           </div>        
    </div>
  )
}

export default Hero