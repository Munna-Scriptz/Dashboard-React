import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { ImFilesEmpty } from "react-icons/im";
import { CiCalendarDate } from "react-icons/ci";

export const Blog = () => {
  return (
    <>
      <section>
        <div className='mb-5'>
          <div><img className='w-[600px]' src="src\assets\Blog.png" alt="image" /></div>
        </div>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-1.5 text-[14px]'><FaRegUser /><p className='font-Inter text-Primary '>By Admin</p></div>
          <div className='flex items-center gap-1.5 text-[14px]'><ImFilesEmpty /><p className='font-Inter text-Primary '>Category</p></div>
          <div className='flex items-center gap-1.5 text-[14px]'><CiCalendarDate /><p className='font-Inter text-Primary '>August 19, 2025</p></div>
          

        </div>
      </section>
    </>
  )
}
