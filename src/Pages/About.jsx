import React from 'react'

export const About = () => {
  return (
    <>
      <section className=''>
        <div>
          <img className='w-[555px]' src="src\assets\AboutImage2.webp" alt="About image" />
          <div className='flex items-center justify-evenly mt-10'>
          <div className='flex items-center gap-4'>
            <img src="src/assets/AboutIcon1.png" alt="Png" />
            <div>
              <h2 className='text-[#6864ED] font-OpenSans font-bold text-3xl'>200+</h2>
              <p className=' font-Inter text-[14px]'>Peoples</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <img src="src/assets/AboutIcon1.png" alt="Png" />
            <div>
              <h2 className='text-[#6864ED] font-OpenSans font-bold text-3xl'>200+</h2>
              <p className=' font-Inter text-[14px]'>Peoples</p>
            </div>
          </div>

          </div>
        </div>
      </section>
    </>
  )
}
