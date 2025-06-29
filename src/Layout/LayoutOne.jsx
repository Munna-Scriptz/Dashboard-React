import React from 'react'
import { Outlet } from 'react-router'
import { Navbar } from '../Component/Navbar'

export const LayoutOne = () => {
  return (
    <div className='flex items-center'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
