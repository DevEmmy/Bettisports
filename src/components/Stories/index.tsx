import React from 'react'
import Line from '../UI/Line'
import Each from './Each'

const Stories = () => {

    const news = [
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg",
            date: "March 28, 2024",
            title: "Alexander Isak Speaks Out On His Newcastle Future Amid ",
        },
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg",
            date: "March 28, 2024",
            title: "Alexander Isak Speaks Out On His Newcastle Future Amid ",
        },
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg",
            date: "March 28, 2024",
            title: "Alexander Isak Speaks Out On His Newcastle Future Amid ",
        },
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg",
            date: "March 28, 2024",
            title: "Alexander Isak Speaks Out On His Newcastle Future Amid ",
        }
    ]

    return (
        <div className='grid grid-cols-[4fr_1.5fr] px-xPadding my-10 gap-10'>
            <div className='flex flex-col gap-5'>
                <h1 className='font-[600]'>Stories</h1>
                <Line />

                <div className="flex gap-5 overflow-auto">
                    {
                        news.map((newsItem: any, i: number) => {
                            return (
                                <Each item={newsItem} key={i} />
                            )
                        })
                    }
                </div>

            </div>

            <div className='flex flex-col gap-5'>
                <h1 className='font-[600]'>Stories</h1>
                <Line />
            </div>
        </div>
    )
}

export default Stories