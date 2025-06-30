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
      icon: <MdOutlineDashboard size={24}/>
    },
    {
      path: '/About' ,
      Name: 'About' ,
      icon: <GrGroup size={24}/>
    },
    {
      path: '/Blog' ,
      Name: 'Blog' ,
      icon: <GrBlog size={24}/>
    },
    {
      path: '/Login' ,
      Name: 'Login' ,
      icon: <IoIosLogIn size={24}/>
    },
    {
      path: '/Resister' ,
      Name: 'Resister' ,
      icon: <FaRegAddressCard size={24} />
    },

  ]

  return (
    <>
      <nav className='SideBar bg-white py-5 px-5 w-[250px] h-screen flex flex-col relative'>
        <div className='absolute w-full h-40 left-0 top-0 z-0 bg-[url(./assets/Shape1.png)] bg-center bg-no-repeat bg-cover'></div>
        <div className="flex flex-col items-center z-10 mb-6">
          <div><img className='w-40 rounded-full border-3 border-[#0099ff8e] outline-3 outline-white' src="src\assets\Zangetsu.jpg" alt="Profile" /></div>
          <div className='mt-2'>
            <h2 className=' text-center text-2xl tracking-wide font-OpenSans'>MUNNA</h2>
            <p className='text-center font-OpenSans text-[#808080de]'>Co Founder And CEO</p>
            </div>
        </div>

        {/* -----Border---- */}
          <div className='w-full h-1 bg-BrandColor'></div>
        {/* -----Nav Links---- */}
        
        <div>
        <ul className='flex gap-5 flex-col mt-8'>
          {
            NavItems.map((item , e) =>(
                <li key={e}><NavLink to={item.path} className={({ isActive}) => isActive ? " bg-[#0099ffe0] flex gap-2 items-center text-[#fff] pl-2 py-2 rounded-[10px] text-[16px] font-Inter" : "flex items-center gap-2 pl-2 py-2 text-[16px] font-Inter"}>{item.icon}{item.Name}</NavLink></li>
            ))
          }
        </ul>
        </div>
        <div className='absolute w-full h-20 left-0 bottom-0 z-0 bg-[url(./assets/Shape2.png)] bg-center bg-no-repeat bg-cover'></div>
      </nav>
    </>
  )
}
