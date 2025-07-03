import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { ImFilesEmpty } from "react-icons/im";
import { CiCalendarDate } from "react-icons/ci";

export const Blog = () => {
  return (
    <>
      <section>
        <div className='mb-5'>
          <div><img className='w-[700px]' src="src\assets\Blog.png" alt="image" /></div>
        </div>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-1.5 text-[15px]'><FaRegUser /><p className='font-Inter text-Primary '>By Admin</p></div>
          <div className='flex items-center gap-1.5 text-[15px]'><ImFilesEmpty /><p className='font-Inter text-Primary '>Category</p></div>
          <div className='flex items-center gap-1.5 text-[15px]'><CiCalendarDate /><p className='font-Inter text-Primary '>August 19, 2025</p></div>
        </div>
        <div>
          <h1 className=" font-Inter font-bold text-[32px] w-[700px] text-[#192335] my-2.5">
            Exploring the Impact of Education: A Comprehensive Guide
          </h1>
          <p className="w-[700px] font-Inter text-[#192335] text-[14px]">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
          </p>
          <p className="w-[700px] font-Inter text-[#192335] text-[14px] mt-5">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem IpsumContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock
          </p>
        </div>
      </section>
    </>
  )
}
