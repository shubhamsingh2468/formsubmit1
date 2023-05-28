import React from 'react'
import { HiArrowCircleDown } from "react-icons/hi";
import { HiBadgeCheck } from "react-icons/hi";

function Menu() {
  return (
    <>
    <div className='grid grid-cols-7'>
      <div className='bg-gray-200 columns-2'>Menu
      <HiArrowCircleDown />
      </div>
      <div className='bg-gray-300 col-span-6 grid grid-flow-col'>MedEase
      <HiBadgeCheck />
      <div className=''></div>
      <div className=''></div>
      <div className=''></div>
      <div className=''></div>
      <div className=''>
        dr jhohn doe
        </div>
      </div>
    </div>

    

    </>
  )
}

export default Menu