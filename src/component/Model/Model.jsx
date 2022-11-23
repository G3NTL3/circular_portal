import React from 'react'

function Model({show,close}) {
  
  const handleClose = (e)=>{
        if(e.target.id === "model") close()
  }

  if(!show) return null  
  
  return (
    <div className='fixed inset-0 bg-modal bg-opacity-30 backdrop-blur-sm	flex justify-center items-center text-secondery transition ease-in-out delay-300  shadow-2xl ' id="model" onClick={(e)=>handleClose(e)} >
       <div className='bg-primary w-[700px] h-[500px] flex flex-col relative  rounded-xl shadow-2xl '>
             <div className='relative p-4 h-20 rounded-xl'>
             <p className='text-xl font-bold text-center'>Subject</p>
             <p className='absolute bottom-2 right-3 text-sm font-medium'>Date - 23/11/2022</p> 
             </div>
             <div className='overflow-auto p-4 '>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
             </div>
             <button className='absolute -top-7 right-2 text-secondery text-lg font-medium' onClick={close}>X</button>
          </div>
        
    </div>
  )
}

export default Model