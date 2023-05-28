import React from 'react'
import { HiOutlineTemplate } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiLocationMarker} from "react-icons/hi";

function Main() {
  return (
    <>
    <div className="flex md:h-screen">
      <div className="flex-shrink bg-gray-300 w-48">

      <ul className="flex flex-col">
          <li>
            <a href="#" className="py-4 px-4 flex flex-row justify-between pr-10"> <HiOutlineTemplate /> Dashboard</a>
            
          </li>
          <li>
            <a href="#" className=" py-4 flex flex-row justify-between pr-10 px-4 "><HiOutlineUserGroup /> Patient</a>
            
          </li>
        </ul>
        
      
      </div>
      <div className="flex-grow border-4 bg-gray-100  border-green-700">
        <button className=' bg-green-800 px-20 ml-20 mt-10 text-gray-100 rounded-full' type='text'>ProblemList/Assesment/Program</button>
        <div className=''>

        </div>
      
      </div>
      <div className="flex-1 bg-gray-100 border-4 border-green-800">

        <button className='bg-green-800 rounded-lg px-10 ml-6 mt-8' type='text' > click me</button>
        <div class="flex flex-col gap-4">
  <div className='bg-gray-500 mt-8 flex flex-row'>
    <HiLocationMarker /> Location
  </div>
  <div className='bg-gray-500 mt-2'>Old-Note</div>
  <div className='bg-gray-500'>progressNo</div>
  <div className='bg-gray-500'>preview</div>
  <div className='bg-gray-500'>send</div>
  <div className='bg-gray-500'>10/12/2023 1:34p.m </div>
  <div className='bg-gray-500'>progressNo</div>
</div>


      </div>
      <div className="flex-1 bg-gray-300 border-4 border-green-800">


      </div>
    
    </div>
    
    </>
  )
}

export default Main