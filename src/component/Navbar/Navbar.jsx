import React from 'react'
import {FaUserCircle}  from 'react-icons/fa'
function Navbar() {
  return (
   <nav className='h-20 bg-primary text-secondery flex flex-wrap items-center w-full flex-row shadow-lg'>
      <h1 className='flex-1 text-2xl font-bold ml-10'>College Ka naam</h1>
      <ul className='m-3'>
          <p className='text-sm font-semibold'>16577</p>
          <p className='text-lg font-semibold'>Nilesh bhardwaj</p>
      </ul>
      <FaUserCircle size={35} className="mr-10 m-4 cursor-pointer"/> 
   </nav>
  )
}

export default Navbar