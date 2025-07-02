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
  // ------Quantity Selector----- 
    const [Click , setClick] = useState(10456)
    const [Click2 , setClick2] = useState(563)
    const [Click3 , setClick3] = useState(135)
    const [Click4 , setClick4] = useState(95)

    const HandlePlus  = () =>  setClick(Click + 1)
    const HandlePlus2 = () => setClick2(Click2 + 1)
    const HandlePlus3 = () => setClick3(Click3 + 1)
    const HandlePlus4 = () => setClick4(Click4 + 1)

    const HandleMinus = () => setClick(Click - 1)
    const HandleMinus2 = () => setClick2(Click2 -1)
    const HandleMinus3 = () => setClick3(Click3 -1)
    const HandleMinus4 = () => setClick4(Click4 -1)


  // ------Details Function---- 
  const MyData = [
    {
      Image: UserIcon,
      HeaderText: "Total Users",
      TextNumber: Click,
      barColor: '#FF6652',
      Width: '87%',
      Percentage: '2.5%',
      PercentageColor: '#00C566',
      PercentageIcon: <FaArrowTrendUp color="#00C566"/> ,
      HandleClick: HandlePlus,
      HandleMinus: HandleMinus,
    },
    {
      Image: AddIcon,
      HeaderText: "Total Users Added",
      TextNumber: Click2,
      barColor:  '#0099ff8e',
      Width: '57%',
      Percentage: '0.5%',
      PercentageColor: '#FD1B1B',
      PercentageIcon: <FaArrowTrendDown color="#FD1B1B"/> ,
      HandleClick: HandlePlus2,
      HandleMinus: HandleMinus2,
    },
    {
      Image: BookIcon,
      HeaderText: "Total Books Published",
      TextNumber: Click3,
      barColor: '#FF6652',
      Width: '95%',
      Percentage: '10.7%',
      PercentageColor: '#00C566',
      PercentageIcon: <FaArrowTrendUp color="#00C566"/> ,
      HandleClick: HandlePlus3,
      HandleMinus: HandleMinus3,
    },
    {
      Image: ReadIcon,
      HeaderText: "Total Books Reded",
      TextNumber: Click4,
      barColor: '#7F56D9' ,
      Width: '78%',
      Percentage: '0.7%',
      PercentageColor: '#FD1B1B',
      PercentageIcon: <FaArrowTrendDown color="#FD1B1B"/> ,
      HandleClick: HandlePlus4,
      HandleMinus: HandleMinus4,
    },
  ];
  const [UserInput , SetInput] = useState('')
  const [UserInput2 , SetInput2] = useState('')
  const [UserInput3 , SetInput3] = useState('')
  const [UserInput4 , SetInput4] = useState('')

  const HandleInput = ()=>{
    if(UserInput == ''){
      alert('Information Cannot be empty')
    }
  }
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
                  <p className="w-6.5 h-6.5 bg-[#25d88194] flex justify-center items-center text-center rounded-2xl cursor-pointer" onClick={items.HandleClick}><FiPlus /></p>
                  <p className="w-6.5 h-6.5 bg-[#fd1b1b88] flex justify-center items-center text-center rounded-2xl cursor-pointer" onClick={items.HandleMinus}><TiMinus /></p>
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
        {/* -------Input Box------- */}
        <div className="HandleOut mt-10 flex justify-between items-center border-b-2 border-[#57575775] pb-5">
          <div className="flex items-center gap-3">
            <input onChange={(e)=>SetInput(e.target.value)} placeholder="Username..." className="input border-2 border-gray-300 px-5 py-2 rounded-[7px] w-50 outline-none" name="search" type="search" />
            <input onChange={(e)=>SetInput2(e.target.value)} placeholder="Email..." className="input border-2 border-gray-300 px-5 py-2 rounded-[7px] w-50 outline-none" name="search" type="search" />
            <input onChange={(e)=>SetInput3(e.target.value)} placeholder="Role..." className="input border-2 border-gray-300 px-5 py-2 rounded-[7px] w-30 outline-none" name="search" type="search" />
            <input onChange={(e)=>SetInput4(e.target.value)} placeholder="Number..." className="input border-2 border-gray-300 px-5 py-2 rounded-[7px] w-60 outline-none" name="search" type="search" />
          </div>
          <div>
          <button onClick={HandleInput} className="px-5 py-4 bg-gradient-to-br from-[#7ec8fa] to-[#4DB8FF] text-white rounded-2xl flex items-center gap-3 cursor-pointer w-60"><FiPlus size={22}/> Add</button>
          </div>
        </div>
        {/* -------Profile Box------- */}
        <div className="mt-2 flex justify-around">
          <h2 className="font-medium">Profile & Username</h2>
          <h2 className="font-medium">Email Address</h2>
          <h2 className="font-medium">Role</h2>
          <h2 className="font-medium">Number</h2>
          <h2 className="font-medium">Status</h2>
        </div>
        <div className="mt-5 flex justify-around">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-[#6C688A] rounded-4xl"></div>
            <h2 className="font-medium">{UserInput}</h2>
          </div>

          <div className="flex items-center gap-3">
            <h2 className="font-medium">{UserInput2}</h2>
          </div>

          <div className="flex items-center gap-3">
            <h2 className="font-medium bg-[#ff665246] py-1.5 px-6 rounded-2xl text-[#FF6652]">{UserInput3}</h2>
          </div>

          <div className="flex items-center gap-3">
            <h2 className="font-medium">{UserInput4}</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#25d881] rounded-2xl"></div>
            <h2 className="font-medium">online</h2>
          </div>
        </div>

    </section>
    </>
  );
};
