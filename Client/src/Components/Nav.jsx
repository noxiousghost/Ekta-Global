import React, { Children, useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const navitem = [
    { 
      name : 'Student Services',
      dropdown : [
        'Meet Us Online',
        'Admission Counselling',
        'Student Health Insurance',
        'Student Accommodatoin',
        'Refer and Earn'],
      link: '/student-services',
      sublinks : [
        '/meet-us-online',
        '/admission-consuelling',
        '/student-health-insurance',
        '/student-accomodation',
        '/refer'],
      dropdownicon : <i className="ri-arrow-down-s-line"></i>
    },
    { name : 'Study Abroad',
      dropdown : [
        'Study in Australia',
        'Study in Canada',
        'Study in UK',
        'Study in Europe',
        'Study in USA'],
      link: '/study-abroad',
      sublinks :  [
        '/study-in-australia',
        '/study-in-canada',
        '/study-in-uk',
        '/study-in-Europe',
        '/study-in-usa'],
      dropdownicon : <i className="ri-arrow-down-s-line"></i>
    },
    { name : 'Scholorships',
      dropdown : [
        'Scholoarship in Australia',
        'Scholoarship in Canda',
        'Scholoarship in UK',
        'Scholoarship in Europe',
        'Scholoarship in USA'],
      link: '/scholorhips',
      sublinks : [
        '/Scholoarship-in-australia',
        '/Scholoarship-in-canada',
        '/Scholoarship-in-uk',
        '/Scholoarship-in-Europe',
        '/Scholoarship-in-usa'],
      dropdownicon : <i className="ri-arrow-down-s-line"></i>
    },
    { name : 'Test Preparation',
      dropdown : [
        'English Training Centres',
        'IELTS',
        'TOFEL',
        'PTE',
        'GRE'],
      link: '/test-preparation',
      sublinks :  [
        '/english-tranings',
        '/ielts',
        '/tofel',
        '/pte',
        '/gre'],
      dropdownicon : <i className="ri-arrow-down-s-line"></i>
    },
    { name : 'Success Stories',
      link : '/student-testimonials'
    },
    { name : 'Blog',  
      link : '/blog'
    },
  ]

const [toggleMenu, setToggleMenu] = useState('0px')
const [dropdown, setDropdown] = useState(null)
 
  return (
    <>

        {/* desktop  */}
        <div className='lg:block hidden'>
            <div className='flex justify-between items-center px-8 py-4 shadow-md'> 

                  {/* compnay logo */}
                  <div>
                    <Link to='/'>
                    <img className='w-[100px] hover:cursor-pointer' src="/Images/logo.jpg" alt="logo" />
                    </Link>
                  </div>

                  {/* navitems */}
                  <div className='flex gap-4 font-medium items-center '>
                      {
                        navitem.map((prop, index)=>{
                          return(
                            <>
                              <Link 
                                onMouseOver={()=>setDropdown(index)} 
                                onMouseOut={()=>setDropdown(null)} 
                                key={index} to={prop.link}
                              >
                                <div className=' hover:text-purple-500'>
                                  {prop.name}
                                  {prop.dropdownicon}
                                </div>

                                  {dropdown===index &&  
                                    <div className='bg-white absolute shadow-lg'>
                                          {
                                            prop.dropdown ?.map((item, subindex)=>{
                                              return(
                                                <Link to={prop.sublinks[subindex]}>
                                                <div key={subindex} className='px-10 py-4  cursor-pointer hover:text-purple-500'
                                                style={{transition: '0.3s'}}
                                                >
                                                {item}
                                                </div>
                                                </Link>
                                              )
                                            }) 
                                          }
                                    </div>       
                                  }
                              </Link>
                            </>
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