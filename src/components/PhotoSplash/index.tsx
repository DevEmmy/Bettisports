import React from 'react'
import Line from '../UI/Line'

const PhotoSplash
 = () => {

    const competition = [
        {
            title: "AFCON"
        },
        {
            title: "EURO 2024"
        },
        {
            title: "2024 World Cup"
        },
        {
            title: "COPA AMERICA"
        },
        {
            title: "ASIAN CUP"
        },
        {
            title: "FIFA WOMEN WORLD CUP"
        }
    ]
  return (
    <div className='flex flex-col gap-5 my-10 mx-xPadding'>
            <h1 className='font-[600] uppercase'>BSB PHOTOSPLASH</h1>
            <Line />

            <div className="grid grid-cols-4 gap-10">
                {
                    competition.map((comp: any, i: number)=>{
                        return(
                            <div className={`relative ${(i == 2 || i == 3) && "col-span-2" }`} key={i}>
                                <img src="./img.jpg" alt="" className='w-full h-[300px]' />
                                <div className="overlay"/>
                                <div className="details p-5">
                                    <p className='text-[20px] font-[600]'>{comp.title}</p>
                                    <p className='text-sm'>Experience the best of international football with unforgettable moments captured on the global stage.</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    </div>
  )
}

export default PhotoSplash
