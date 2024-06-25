import React, { Children, useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const navitem = [
    { name : 'Student Services',
      link : '/home'
    },
    { name : 'Study Abroad',
      link : '/home'
    },
    { name : 'Scholorships',
      link : '/home'
    },
    { name : 'Test Preparation',
      link : '/home'
    },
    { name : 'Success Stories',
      link : '/home'
    },
    { name : 'Blog',
      link : '/home'
    },
  ]

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
        {
          navitem.map((prop, index)=>{
            return(
            <Link key={index} to={prop.link}>{prop.name}
            <i className="ri-arrow-down-s-line"></i>
            </Link>
            )
          })
        }
        
        <Link href="/" className='bg-black px-6 py-2 text-white rounded-2xl hover:bg-purple-500 '>
        Contact Us
        </Link>
       </div> 
         </div> 
         </div>
         


        {/* mobile */}
        <div className='lg:hidden block z-40'>
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
        {
          navitem.map((prop, key)=>{
            return(
              <Link key={key} className='flex justify-between py-2 px-4' to={prop.link}>
            {prop.name}
         <i className="ri-arrow-right-s-line"></i>
         </Link>
            )
          })
        }
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