import React from 'react'
import { Link, NavLink } from 'react-router'
import { GrGroup } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
import { GrBlog } from "react-icons/gr";
import { IoIosLogIn } from "react-icons/io";
import { FaRegAddressCard } from "react-icons/fa";

export const Navbar = () => {

  const NavItems = [
    {
      path: '/' ,
      Name: 'Dashboard' ,
      icon: <MdOutlineDashboard />
    },
    {
      path: '/About' ,
      Name: 'About' ,
      icon: <GrGroup />
    },
    {
      path: '/Blog' ,
      Name: 'Blog' ,
      icon: <GrBlog />
    },
    {
      path: '/Login' ,
      Name: 'Login' ,
      icon: <IoIosLogIn />
    },
    {
      path: '/Resister' ,
      Name: 'Resister' ,
      icon: <FaRegAddressCard />
    },

  ]

  return (
    <>
      <nav className=' bg-white py-5 px-5 w-[250px] h-screen flex flex-col relative'>
        <div className='absolute w-full h-40 left-0 top-0 z-0 bg-[url(./assets/Shape1.png)] bg-center bg-no-repeat bg-cover'></div>
        <div className="flex flex-col items-center z-10 mb-6">
          <div><img className='w-40 rounded-full border-3 border-[#0099ff8e]' src="src\assets\Zangetsu.jpg" alt="Profile" /></div>
          <div className='mt-2'>
            <h2 className=' text-center text-2xl tracking-wide font-OpenSans'>MUNNA</h2>
            <p className='text-center font-OpenSans text-[#808080de]'>Co Founder And Ceo</p>
            </div>
        </div>

        {/* -----Border---- */}
          <div className='w-full h-1 bg-[#0099ff8e]'></div>
        {/* -----Nav Links---- */}
        <div>
        <ul className='flex gap-5 flex-col mt-8'>
          {
            NavItems.map((item , e) =>(
                <li key={e}><NavLink to={item.path} className={({ isActive}) => isActive ? " bg-blue-500 flex gap-2 items-center" : "flex items-center gap-2"}>{item.icon}{item.Name}</NavLink></li>
            ))
          }
        </ul>
        </div>
      </nav>
    </>
  )
}
