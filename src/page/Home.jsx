import React,{useState} from 'react'
import Model from '../component/Model/Model'
import NoticeCard from '../component/NoticeCard/NoticeCard'
function Home() {
  const [showModal,setShowModel] = useState(false)

  return (
    <div className='w-11/12	mx-auto m-4'>
       <div className='w-11/12 mx-auto flex flex-wrap justify-between'>
       <h1 className='w-11/12 mx-8 text-2xl font-semibold'>Notice</h1>    
        <NoticeCard openModel={setShowModel}  />
        <NoticeCard openModel={setShowModel} />
        <NoticeCard openModel={setShowModel} />
        <NoticeCard openModel={setShowModel} />
        <NoticeCard openModel={setShowModel} />
       </div>
       <Model show={showModal} close={()=>setShowModel(false)}/>
    </div>
  )
}

export default Home