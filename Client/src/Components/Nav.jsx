import React, { Children, useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const navitem = [
    { name : 'Student Services',
      link : '/',
      sublinks : 1
    },
    { name : 'Study Abroad',
      link : '/',
      sublinks : 2
    },
    { name : 'Scholorships',
      link : '/',
      sublinks : 3
    },
    { name : 'Test Preparation',
      link : '/',
      sublinks : 4
    },
    { name : 'Success Stories',
      link : '/',
      sublinks :5
    },
    { name : 'Blog',
      link : '/',
      sublinks :6
    },
    
  ]

const [toggleMenu, setToggleMenu] = useState('0px')

  const [dropdown, setDropdown] = useState(true)
 
  const [hover, setHover]=useState(()=>{
    return(
      <div className='bg-white absolute shadow-lg'>
        {
          navitem.map((item, index)=>{
            return(
              <div key={index} className='px-10 py-4  cursor-pointer hover:bg-purple-500 hover:text-white'>
               {item.sublinks}
              </div>
            )
          })
        }
      </div>
    )
  })
  
  return (
    <>
    
        {/* desktop  */}
        <div className='lg:block hidden'>
         <div className='flex justify-between items-center px-8 py-4 shadow-md'> 
         <div>
          <img className='w-[100px]' src="/Images/logo.jpg" alt="logo" />
         </div>

        <div className='flex gap-4 font-medium items-center '>
        {
          navitem.map((prop, index)=>{
            
            return(
            <Link 
            className='hover:text-purple-500'
            onMouseOver={()=>setDropdown(true)} 
            onMouseOut={()=>setDropdown(false)} 
            key={index} to={prop.link}
            >
            {prop.name}
            <i className="ri-arrow-down-s-line"></i>

            
              {dropdown &&  hover}
            
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
              <Link key={key} className='hover:text-purple-500 flex justify-between py-2 px-4' to={prop.link}>
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