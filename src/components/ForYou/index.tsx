import React from 'react'
import Line from '../UI/Line'

const ForYou = () => {
    const data = [
        {
            id: "01",
            date: "March 28, 2028 | Category",
            text: "Romeo Lavia Set to Miss The Remainder of 2023/24"
        },
        {
            id: "02",
            date: "March 28, 2028 | Category",
            text: "Romeo Lavia Set to Miss The Remainder of 2023/24"
        },
        {
            id: "03",
            date: "March 28, 2028 | Category",
            text: "Romeo Lavia Set to Miss The Remainder of 2023/24"
        },
        {
            id: "04",
            date: "March 28, 2028 | Category",
            text: "Romeo Lavia Set to Miss The Remainder of 2023/24"
        },
        {
            id: "05",
            date: "March 28, 2028 | Category",
            text: "Romeo Lavia Set to Miss The Remainder of 2023/24"
        },
    ]
    return (
        <div className='mx-xPadding'>
            <div className="flex items-center">
                <p className='uppercase text-[24px] leading-[24px] gap-5 font-[700] w-1/6 '>For You</p>
                <Line />
            </div>

            <div className="grid grid-cols-5 items-center divide-x my-10">
                {
                    data.map((item: any, i: number)=>{
                        return(
                            <div className={`pr-5 ${i == 0 ? "pl-0" : "pl-5"} flex flex-col gap-2`}>
                                <h1 className='text-[40px]'>{item.id}</h1>
                                <p className='text-[10px]'>{item.date}</p>
                                <p>{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ForYou