import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='bg-black'>
    <div className='grid md:grid-cols-4 grid-cols-2 md:gap-16 gap-8 py-14 shadow-lg pl-6 text-gray-400  '>
        <div className='flex flex-col gap-4'>
            <img src="/Images/logo.png" width={200} alt="logo" />
            {/* <p className='text-center px-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, ducimus pariatur. Molestias atque ducimus doloribus.</p> */}
        </div>

        <div className='flex flex-col gap-2'>
            <h1 className='md:mb-2 text-xl font-semibold text-white'>Company</h1>
            <Link to='/' className=' hover:text-white ' style={{transition:'.4s'}}>Solutions For Marketting</Link>
            <Link to='/'  className=' hover:text-white ' style={{transition:'.4s'}} >Solutions For Sales</Link>
            <Link to='/'  className=' hover:text-white ' style={{transition:'.4s'}}>Pricing Plans</Link>
            <Link to='/'  className=' hover:text-white ' style={{transition:'.4s'}}>Contact</Link>
        </div>

        <div className='flex flex-col gap-2'>
            <h1  className='md:mb-2 text-xl font-semibold text-white'>Integrations</h1>
            <Link to='/'  className=' hover:text-white ' style={{transition:'.4s'}}>Use Case</Link>
            <Link to='/'  className=' hover:text-white ' style={{transition:'.4s'}} >Integrations</Link>
            <Link to='/'  className=' hover:text-white ' style={{transition:'.4s'}}>Examples</Link>
            <Link to='/'  className=' hover:text-white ' style={{transition:'.4s'}} >API Docs</Link>
        </div>

        <div className='flex flex-col gap-2'>
            <h1  className='md:mb-2 text-xl font-semibold text-white'>Resources</h1>
            <Link to='/'  className=' hover:text-white ' style={{transition:'.4s'}}>About US</Link>
            <Link to='/'  className=' hover:text-white ' style={{transition:'.4s'}} >Blogs</Link>
            <Link to='/'  className=' hover:text-white ' style={{transition:'.4s'}} >Docs</Link>
        </div>
        
    </div>

    <hr/>

    <div className='flex justify-between px-6 py-2 items-center'>
        <div className='flex gap-2 items-center'>
        <i className="ri-copyright-line text-white w-7 text-2xl"></i>
        <p className='text-white'>2024 Ekta-Global Pvt. Ltd</p>
        </div>
        <div className='flex gap-4'>
            <Link to='https://www.facebook.com/'>
            <i className="ri-facebook-fill text-white text-2xl " ></i>
            </Link>

            <Link to='https://www.instagram.com/'>
            <i className="ri-instagram-line text-white text-2xl"></i>
            </Link>

            <Link to='https://x.com/'>
            <i className="ri-twitter-line text-white text-2xl"></i>
            </Link>
        
        </div>  
    </div>

    </footer>
  )
}

export default Footer