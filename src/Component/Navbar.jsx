import React from 'react'
import { Link, NavLink } from 'react-router'
import { MdDashboardCustomize } from "react-icons/md";
export const Navbar = () => {

  const NavItems = [
    {
      path: '/' ,
      Name: 'Dashboard' ,
      icon: <MdDashboardCustomize />
    },
    {
      path: '/About' ,
      Name: 'About' ,
      icon: <MdDashboardCustomize />
    },
    {
      path: '/Blog' ,
      Name: 'Blog' ,
      icon: <MdDashboardCustomize />
    },
    {
      path: '/Login' ,
      Name: 'Login' ,
      icon: <MdDashboardCustomize />
    },
    {
      path: '/Resister' ,
      Name: 'Resister' ,
      icon: <MdDashboardCustomize />
    },

  ]

  return (
    <>
      <nav className=' bg-white py-5 px-5 w-[250px] h-screen flex flex-col'>
        <div className="profile">
          <h1>hello</h1>
        </div>
        <div>
          
        <ul className='flex gap-5 flex-col'>
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
