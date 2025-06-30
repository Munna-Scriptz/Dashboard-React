import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export const TopBar = () => {
  return (
    <>
      <nav className="w-full h-12 bg-transparent flex justify-between px-5 pt-5 mb-10">
        <div className="flex items-center gap-5">
          <FaBarsStaggered size={25} />
          <div class="relative">
            <input
              placeholder="Search..."
              class="input border-2 border-gray-300 px-7 py-2.5 rounded-xl w-60 transition-all focus:w-70 outline-none"
              name="search"
              type="search"
            />
            <FaMagnifyingGlass className="absolute top-3 right-3 size-5" />
          </div>
        </div>
        <div className="flex items-center gap-5">
            <div className="flex items-center gap-5">
            <IoSettingsOutline size={22} className=" cursor-pointer"/>
            <BiMessageRoundedDots size={22} className=" cursor-pointer"/>
            <GoBell size={22} className=" cursor-pointer"/>
            </div>
            <div className="flex items-center gap-3">
                <img className='w-15 rounded-full ' src="src\assets\Zangetsu.jpg" alt="Profile" />
                <h2 className=" text-[18px]">MUNNA</h2>
                <IoIosArrowDown size={25}/>
            </div>
        </div>
      </nav>
    </>
  );
};
