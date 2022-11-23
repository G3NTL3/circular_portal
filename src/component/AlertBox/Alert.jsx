import React,{useState} from 'react'

function Alert() {
  const [close,setClose] = useState(false);
  const alert = ' w-9/12 h-14 mx-auto my-4 text-center font-bold text-xl text-secondery font-medium relative rounded-xl shadow-lg border-2 border-primary';
  const hidden = 'hidden'
  return (
    <div className= {close ? hidden : alert}>
     <p className='p-3'>Alert</p>
     <button className='absolute top-0 right-2 text-base font-normal ' onClick={()=>setClose(true)} >X</button>
    </div>
  )
}

export default Alert