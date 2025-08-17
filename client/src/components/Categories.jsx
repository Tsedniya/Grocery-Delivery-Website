import React from 'react'
import { assets }  from '../assets/assets'

const Categories = () => {
  return (
    <div className='mt-16'>
     <p className='text-2xl md:text-3xl font-medium'>Categories</p> 
        <div className='grid grid-cols-2 sm-grid-col-3 md:grid-col-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'>
            <div className='group cursor-pointer py-5 px-3 gap-2 rounded-leg flex flex-col justify-center items-center'>
                <img src={assets.box_icon} alt=""className='group-hover:scale-108 transition max-w-28'/>
                <p className='text-sm font-medium'>fruit</p>
            </div>
        </div>
    </div>
  )
}

export default Categories