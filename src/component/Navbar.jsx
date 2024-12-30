
import React from 'react'
import './Navbar.css'

import { IoSearch } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from '@mui/material';

function Navbar() {
  return (
    <div className='px-5 z-50 py-[.8rem] bg-red-500 lg:px-20 lg:py-2 flex justify-between h-16 w-full  text-white'>
     
        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
            <li className='logo font-semibold text-grey-300 text-2xl'>NSR Food</li>
        </div>
        <div className='flex items-center space-x-2 lg:space-x-2 justify-evenly'>
            <div>
            <a
                      href=""
                      className="text-white  rounded-full p-1"
                    >
                      <IoSearch  className='text-[40px]' />
                    
                      
                    </a>
            </div>
            <div>
            <a
                      href=""
                      className="text-white  rounded-full p-1"
                    >
                      <RxAvatar   className='text-[40px]   rounded-full' />
                    </a>
            </div>
            <div>
            <a
                      href=""
                      className="text-white  rounded-full p-1"
                    ><Badge   color='secondary' badgeContent={3}>
                      < FaShoppingCart  className='text-[40px]'/>
                      </Badge>
                    </a>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar
