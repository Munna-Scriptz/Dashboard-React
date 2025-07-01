import React, { useState } from "react";
import BookIcon from "../assets/BookIcon.png";
import AddIcon from "../assets/AddIcon.png";
import ReadIcon from "../assets/ReadIcon.png";
import UserIcon from "../assets/UserIcon.png";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { TiMinus } from "react-icons/ti";


export const Dashboard = () => {
  const [Number , SetNumber] = useState(10435) 

  const HandlePlus = () =>{
    SetNumber(Number + 1)
  }
  const HandleMinus = () =>{
    SetNumber(Number - 1)
  }
  const MyData = [
    {
      Image: UserIcon,
      HeaderText: "Total Users",
      TextNumber: Number,
      barColor: '#FF6652',
      Width: '87%',
      Percentage: '2.5%',
      PercentageColor: '#00C566',
      PercentageIcon: <FaArrowTrendUp color="#00C566"/> ,
    },
    {
      Image: AddIcon,
      HeaderText: "Total Users Added",
      TextNumber: "563",
      barColor:  '#0099ff8e',
      Width: '57%',
      Percentage: '0.5%',
      PercentageColor: '#FD1B1B',
      PercentageIcon: <FaArrowTrendDown color="#FD1B1B"/> ,
    },
    {
      Image: BookIcon,
      HeaderText: "Total Books Published",
      TextNumber: "135",
      barColor: '#FF6652',
      Width: '95%',
      Percentage: '10.7%',
      PercentageColor: '#00C566',
      PercentageIcon: <FaArrowTrendUp color="#00C566"/> ,
    },
    {
      Image: ReadIcon,
      HeaderText: "Total Books Reded",
      TextNumber: "95",
      barColor: '#7F56D9' ,
      Width: '78%',
      Percentage: '0.7%',
      PercentageColor: '#FD1B1B',
      PercentageIcon: <FaArrowTrendDown color="#FD1B1B"/> ,
    },
  ];
  return (
    <>
    {/* --------------Header---------------- */}
      <div>
        <h1 className="text-[30px] font-Inter font-medium">User Dashboard</h1>
      </div>
    {/* --------------Statistic---------------- */}

      <div className="flex justify-between pr-10 mt-10">
        {MyData.map((items, e) => (
          
          <div key={e}>
            <div className="flex gap-5 items-center">
              <img src={items.Image} alt="Icon" />
              <div>
                <h2 className="text-[#3B3563] font-Inter text-[12px]">
                  {items.HeaderText}
                </h2>
                <p className="text-[22px] text-[#0A033C] font-semibold font-Inter">
                  {items.TextNumber}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                  <p className="w-6.5 h-6.5 bg-[#25d881] flex justify-center items-center text-center rounded-2xl cursor-pointer" onClick={HandlePlus}><FiPlus /></p>
                  <p className="w-6.5 h-6.5 bg-[#FD1B1B] flex justify-center items-center text-center rounded-2xl cursor-pointer" onClick={HandleMinus}><TiMinus /></p>
                </div>
            </div>
            {/* --------ProgressBar------------ */}
            <div className=" relative w-full h-3 bg-[#c9c9c9] rounded-2xl mt-4">
              <div className="absolute left-0 bottom-0 h-full rounded-2xl" style={{ backgroundColor: items.barColor, width: items.Width }}></div>
            </div>
            <div className=" mt-2.5">
              <p className=" font-Inter text-[14px] text-[#6C688A] font-medium flex items-center gap-1.5"><span>{items.PercentageIcon}</span><span style={{color: items.PercentageColor,}}>{items.Percentage} </span> than last week</p>
            </div>
          </div>
        ))}
      </div>
    {/* --------------Add User---------------- */}
    <section className="mt-15 pr-10">
        <div className="flex justify-between items-center">
          <h1 className="text-[25px] font-Inter font-medium">Add Users</h1>
          <div className="flex items-center gap-5">
          <button className="px-5 py-4 bg-gradient-to-br from-[#f88e80] to-[#FF6652] text-white rounded-2xl flex items-center gap-3 cursor-pointer">Delete User</button>
          <button className="px-5 py-4 bg-gradient-to-br from-[#7ec8fa] to-[#4DB8FF] text-white rounded-2xl flex items-center gap-3 cursor-pointer"><FiPlus size={22}/> Add user</button>
          </div>
        </div>
    </section>
    </>
  );
};
