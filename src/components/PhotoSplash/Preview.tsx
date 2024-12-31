import React from 'react'
import CarouselComponent from '../Shared/CarouselComponent'
import { HiX } from 'react-icons/hi'
import PhotoSplash from '.';

interface Prop{
    // images: String[];
    photoView: boolean;
    setPhotoView: any
    photoList: any;
}

const Preview = ({photoView, photoList, setPhotoView}: Prop ) => {
    if (photoView)
  return (
    <div className='bg-black fixed top-0 h-[100vh] w-full left-0 right-0 z-[999] p-10 flex items-center justify-center'>
        <div className='absolute top-10 right-10 z-[1000] flex items-end justify-end text-white bg-secondaryBlue p-3 rounded-full cursor-pointer' onClick={()=> setPhotoView(false)}>
            <HiX />
        </div>
        <CarouselComponent>
            {
                photoList?.map((item: any, i: number)=>{
                    return(
                        <div>
                            <img src={item?.media} key={i} alt="" className='w-full h-[80vh] object-contain'/>
                            <p className='text-white -my-10'>{item?.title}</p>
                        </div>
                        
                    )
                })
            }
        </CarouselComponent>
        <div className='overlay'  onClick={()=> setPhotoView(false)} />
    </div>
  )
}

export default Preview