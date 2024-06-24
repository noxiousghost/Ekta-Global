import React, { Children, useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

const [toggleMenu, setToggleMenu] = useState('0px')

  return (
    <>
    
        {/* desktop  */}
        <div className='lg:block hidden'>
         <div className='flex justify-between items-center px-8 py-4 shadow-md'> 
         <div>
          <img className='w-[100px]' src="/Images/logo.jpg" alt="logo" />
         </div>

        <div className='flex gap-4 font-medium items-center'>
        <Link to="/">Student Services
        <i className="ri-arrow-down-s-line"></i>
        </Link>
        <Link href="/">Study Abroad
        <i className="ri-arrow-down-s-line"></i>
        </Link>    
        <Link href="/">Scholorships
        <i className="ri-arrow-down-s-line"></i>
        </Link>
        <Link href="/">Test Preparation
        <i className="ri-arrow-down-s-line"></i>
        </Link>
        <Link href="/">Success Stories
        <i className="ri-arrow-down-s-line"></i>
        </Link>
        <Link href="/">Blog
        <i className="ri-arrow-down-s-line"></i>
        </Link>
        <Link href="/" className='bg-black px-6 py-2 text-white rounded-2xl hover:bg-purple-500'>
        Contact Us
        </Link>
    </div> 
         </div> 
         </div>
         


        {/* mobile */}
        <div className='lg:hidden block'>
        <aside 
        className='flex flex-col gap-4 absolute h-screen bg-white  text-md font-medium overflow-hidden shadow-xl' 
        style={{
            width:toggleMenu,
            transition: '0.4s'
            }}>
                <button 
                className='mt-5 ml-8 size-fit '
                onClick={()=>{setToggleMenu('0px')}}
                >
                     <i  className="ri-menu-fill font-bold text-xl mb-4 mr-2"></i>
                </button>   

        <Link className='flex justify-between py-2 px-4' to="/">
            Student Services
         <i className="ri-arrow-right-s-line"></i>
         </Link>
         <Link  className='flex justify-between py-2 px-4' href="/">Study Abroad
         <i className="ri-arrow-right-s-line"></i>
         </Link>    
         <Link  className='flex justify-between py-2 px-4' href="/">Scholorships
         <i className="ri-arrow-right-s-line"></i>
         </Link>
         <Link  className='flex justify-between py-2 px-4' href="/">Test Preparation
         <i className="ri-arrow-right-s-line"></i>
         </Link>
         <Link  className='flex justify-between py-2 px-4' href="/">Success Stories
         <i className="ri-arrow-right-s-line"></i>
         </Link>
         <Link  className='flex justify-between py-2 px-4' href="/">Blog
         <i className="ri-arrow-right-s-line"></i>
         </Link>
        </aside>
        <div className='flex justify-between items-center py-2 px-8 shadow-md'>
        <div>
          <button onClick={()=>setToggleMenu('220px')}>
            <i className="ri-menu-fill font-bold text-xl"></i>
            </button>
        </div>
      
        <div>
          <img className='w-[120px]' src="/Images/logo.jpg" alt="logo" />
        </div>
       
        </div>
        </div>

        </>


        )
    }

export default Nav