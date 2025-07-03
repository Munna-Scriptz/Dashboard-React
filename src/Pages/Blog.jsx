import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { ImFilesEmpty } from "react-icons/im";
import { CiCalendarDate } from "react-icons/ci";

export const Blog = () => {
  return (
    <>
      <section>
        <div className="Left_Side">
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
            {/* ----Quotes---- */}
            <div className='bg-[#F3F6FB] p-10 mt-5 '>
              <div  className='flex gap-7 mb-5'>
                <div><img className='w-[47px]' src="src\assets\Quote.png" alt="image" /></div>
                <div>
                  <p className="w-[600px] font-Inter text-[#192335] text-[14px]">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
                  </p>
                  <div className='mt-7 flex items-center gap-5'>
                    <div className='w-20 h-[3px] bg-[#0099ff] '></div>
                    <p className=' font-Inter text-[15px]'><span className='font-bold'>Jane Cooper</span>,CEO</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
