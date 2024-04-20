import React from 'react'
import Line from '../UI/Line'
import EachNews from '../FootballNews/EachNews'

const Articles = () => {
    return (
        <div className='flex flex-col gap-5 mx-xPadding'>
            <h1 className='font-[600]'>MORE STORIES</h1>
            <Line />

            <div className="grid grid-cols-5 gap-5">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8,9,10].map((article: any, i: number)=>{
                        return(
                            <EachNews />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Articles