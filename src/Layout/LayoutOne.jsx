import React from 'react'
import { Outlet } from 'react-router'
import { Navbar } from '../Component/Navbar'
import { TopBar } from '../Component/TopBar'

export const LayoutOne = () => {
  return (
    <div className='flex gap-7'>
      <Navbar/>
      <div className='w-full'>
      <TopBar/>
      <Outlet/>
      </div>
    </div>
  )
}
