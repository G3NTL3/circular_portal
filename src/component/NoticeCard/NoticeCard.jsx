import React from 'react'

function NoticeCard({openModel}) {
  return (
    <div className='bg-primary h-28 text-secondery relative w-5/12 mx-8 my-4 cursor-pointer rounded-xl shadow-lg' onClick={()=>openModel(true)}>
        <p className='text-lg font-medium p-3  text-center ' >Subject </p>
        <p className='absolute bottom-3	right-3 text-sm font-medium ' >Date - 23/11/2022</p>
    </div>
  )
}

export default NoticeCard