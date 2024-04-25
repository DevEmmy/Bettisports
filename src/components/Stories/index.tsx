import React from 'react'
import Line from '../UI/Line'
import Each from './Each'
import VerticalHeader from '../Shared/VerticalHeader'

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
            <VerticalHeader title='Stories' />

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
                <VerticalHeader title='Online Radio and Podcast' />

                <img src="./radio.png" alt="" />

                <div className='flex flex-col gap-2'>
                    <p className='uppercase border-b border-b-gray-600'>latest podcast episode</p>

                    <div className='grid grid-cols-[1.5fr_5fr_1fr] gap-2 border-2 p-2'>
                        <img src="./img.jpg" alt="" className='h-[80px]'/>
                        <div className='grid'>
                            <p className='uppercase text-sm font-[600]'>the sport pulse</p>
                            <p className='text-[10px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat et mollitia error iure odio corrupti voluptatem.</p>
                        </div>
                        <div className='text-[10px] grid'>
                            <p>35min</p>

                            <p>April 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories