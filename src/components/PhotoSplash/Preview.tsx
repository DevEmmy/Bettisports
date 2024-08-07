import React from 'react'
import CarouselComponent from '../Shared/CarouselComponent'
import { HiX } from 'react-icons/hi'

interface Prop{
    images: String[];
    setImages: any
}

const Preview = ({images, setImages}: Prop ) => {
  return (
    <div className='bg-black fixed top-0 h-[100vh] w-full left-0 right-0 z-[999] p-10 flex items-center justify-center'>
        <div className='absolute top-10 right-10 z-[1000] flex items-end justify-end text-white bg-secondaryBlue p-3 rounded-full cursor-pointer' onClick={()=> setImages(null)}>
            <HiX />
        </div>
        <CarouselComponent>
            {
                images.map((img: any, i: number)=>{
                    return(
                        <img src={img} key={i} alt="" className='w-full h-[80vh] object-contain'/>
                    )
                })
            }
        </CarouselComponent>
    </div>
  )
}

export default Preview