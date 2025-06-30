import React from 'react'
import BookIcon from '../assets/BookIcon.png'
import AddIcon from '../assets/AddIcon.png'
import ReadIcon from '../assets/ReadIcon.png'
import UserIcon from '../assets/UserIcon.png'

export const Dashboard = () => {

  const MyData = [
    {
      Image: UserIcon,
      HeaderText: 'Total Users' ,
      TextNumber: '10438' ,
    },
    {
      Image: BookIcon ,
      HeaderText: 'Total Books Published' ,
      TextNumber: '135' ,
    },
    {
      Image: AddIcon ,
      HeaderText: 'Total Users Added' ,
      TextNumber: '563' ,
    },
    {
      Image: ReadIcon ,
      HeaderText: 'Total Books Reded' ,
      TextNumber: '95' ,
    },
  ]

  return (
    <>
      <div>
        <h1 className='text-[30px] font-Inter font-medium'>User Dashboard</h1>
      </div>
      <div className='flex justify-between pr-10 mt-10'>
        {
          MyData.map((items , e) => (
        <div key={e} className='flex items-center gap-2'>
          <img src={items.Image} alt="Icon" />
          <div>
            <h2 className='text-[#3B3563] font-Inter'>Total Users</h2>
            <p className='text-[24px] text-[#0A033C]'>10438</p>
          </div>
        </div>
            
          ))
        }
      </div>
    </>
  )
}
