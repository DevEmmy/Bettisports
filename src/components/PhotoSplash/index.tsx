"use client"
import React, { useState } from 'react'
import Line from '../UI/Line'
import Preview from './Preview';

const PhotoSplash
 = () => {
    const [images, setImages] = useState<String[] | null>(null);

    const  setState = ()=>{
        setImages(["img.jpg", "img.jpg", "img.jpg", "img.jpg"])
    }
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

            <div className="grid grid-cols-4 gap-5">
                {
                    competition.map((comp: any, i: number)=>{
                        return(
                            <div className={`relative ${(i == 2 || i == 3) && "col-span-2" } cursor-pointer`} key={i} onClick={setState}>
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

            {
                images && <Preview images={images} setImages={setImages}/>
            }
    </div>
  )
}

export default PhotoSplash
