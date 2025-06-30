import React from "react";
import BookIcon from "../assets/BookIcon.png";
import AddIcon from "../assets/AddIcon.png";
import ReadIcon from "../assets/ReadIcon.png";
import UserIcon from "../assets/UserIcon.png";

export const Dashboard = () => {
  const MyData = [
    {
      Image: UserIcon,
      HeaderText: "Total Users",
      TextNumber: "10438",
      barColor: '#FF6652',
      Width: '87%',
    },
    {
      Image: AddIcon,
      HeaderText: "Total Users Added",
      TextNumber: "563",
      barColor:  '#0099ff8e',
      Width: '57%',
    },
    {
      Image: BookIcon,
      HeaderText: "Total Books Published",
      TextNumber: "135",
      barColor: '#FF6652',
      Width: '95%',
    },
    {
      Image: ReadIcon,
      HeaderText: "Total Books Reded",
      TextNumber: "95",
      barColor: '#7F56D9' ,
      Width: '78%',
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-[30px] font-Inter font-medium">User Dashboard</h1>
      </div>
      <div className="flex justify-between pr-10 mt-10">
        {MyData.map((items, e) => (
          <div key={e}>
            <div className="flex gap-5 items-center">
              <img src={items.Image} alt="Icon" />
              <div>
                <h2 className="text-[#3B3563] font-Inter">
                  {items.HeaderText}
                </h2>
                <p className="text-[24px] text-[#0A033C] font-semibold font-Inter">
                  {items.TextNumber}
                </p>
              </div>
            </div>
            {/* --------ProgressBar------------ */}
            <div className=" relative w-full h-3 bg-[#c9c9c9] rounded-2xl mt-4">
              <div className="absolute left-0 bottom-0 h-full rounded-2xl" style={{ backgroundColor: items.barColor, width: items.Width }}></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
