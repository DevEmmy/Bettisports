import React from 'react'
import { RiPlayCircleFill } from 'react-icons/ri'

const Preview = () => {
  return (
    <div className='flex gap-1 flex-col'>
        <img src="./img.jpg" alt="" className=' h-[300px]'/>
        
        <p className='font-[600] text-sm'>PODCAST TITLE</p>
        <p className='text-[11px]'>March 24 - 35min</p>
        <p className='text-[12px]'>Alexander Isak Speaks Out On His Newcastle Future Amid Arsenal Links</p>

        
    </div>
  )
}

export default Preview