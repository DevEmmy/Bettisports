import React from 'react'

const EachVideo = () => {
    return (
        <div className='relative'>
            <img src="./img.jpg" alt="" />
            <div className="overlay" />
            <div className="details p-5">
                <p className='text-sm'>March 28, 2024</p>
                <p className=' font-[600] line-clamp-1'>Alexander Isak Speaks Out On His Newcastle Future Amid Arsenal Links</p>
            </div>
        </div>
    )
}

export default EachVideo