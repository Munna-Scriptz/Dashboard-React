import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { ImFilesEmpty } from "react-icons/im";
import { CiCalendarDate } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Blog = () => {
  return (
    <>
      <section className='flex justify-between pr-4'>
        {/* --------Left Side-------- */}
        <div className="Left_Side">
          <div className='mb-5'>
            <div><img className='w-[650px]' src="src\assets\Blog.png" alt="image" /></div>
          </div>
          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-1.5 text-[15px]'><FaRegUser /><p className='font-Inter text-Primary '>By Admin</p></div>
            <div className='flex items-center gap-1.5 text-[15px]'><ImFilesEmpty /><p className='font-Inter text-Primary '>Category</p></div>
            <div className='flex items-center gap-1.5 text-[15px]'><CiCalendarDate /><p className='font-Inter text-Primary '>August 19, 2025</p></div>
          </div>
          <div>
            <h1 className=" font-Inter font-bold text-[32px] w-[650px] text-[#192335] my-2.5">
              Exploring the Impact of Education: A Comprehensive Guide
            </h1>
            <p className="w-[700px] font-Inter text-[#192335] text-[14px]">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
            </p>
            <p className="w-[700px] font-Inter text-[#192335] text-[14px] mt-5">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem IpsumContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock
            </p>
            {/* ----Quotes---- */}
            <div className='bg-[#F3F6FB] p-6 mt-5 '>
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
            <p className="w-[650px] font-Inter text-[#192335] text-[14px] mt-5">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virgini 
            </p>
          </div>
        </div>
        {/* --------Right Side-------- */}
        <div className='Right_Side'>
          <div className='w-[340px] p-[20px] border-2 border-[#1923352c] rounded-[7px]'>
            <div>
              <h1 className=" font-Inter font-bold text-[22px] text-[#192335] my-2.5 mt-0">
                Search Here
              </h1>
              <div className='relative bg-[#E2E5F1] w-full h-[3px]'>
                <div className='absolute bg-[#2F57EF] w-30 h-full'></div>
              </div>
            </div>
            <div className='mt-5 relative'>
             <input placeholder="Search..." className="input border-2 border-gray-200 px-7 py-2.5 rounded-xl outline-none w-full" name="search" type="search"/>
              <FaMagnifyingGlass className="absolute top-3 right-3 size-5" color='#2F57EF'/>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
