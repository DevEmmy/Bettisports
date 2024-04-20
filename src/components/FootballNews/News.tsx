import React from 'react'
import EachNews from './EachNews'

const News = () => {
    return (
        <div className='grid grid-cols-4 gap-5'>
            <div className='row-span-2'>
                <EachNews />
            </div>
            {
                [1, 2, 3, 4, 5, 6].map((news: any, i: number) => {
                    return (
                        <EachNews />
                    )
                })
            }
        </div>
    )
}

export default News