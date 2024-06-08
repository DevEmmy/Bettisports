import React from 'react'
import { RiChat1Fill } from 'react-icons/ri';
import TableData from './TableData';

interface Props {
    thead: string[];
    data: any
}

const Table = () => {
    let thead = [
        "Author", "Comment", "In Response to", "Submitted on"
    ]
    return (
        <div className='table bg-white border text-xs'>
            <div className='grid ' style={{ gridTemplateColumns: `repeat(${thead.length + 1}, 1fr)` }}>
                {
                    thead.map((head: string, i: number) => {
                        return (
                            <div className={`flex items-center  p-5 ${i == 1 && "col-span-2"} text-xs`}>{head}</div>
                        )
                    })
                }
            </div>

            <div className='grid gap-5 bg-[#FAFAF1] p-5' >
                {
                    [1,2,3].map((item: any, i: number) => {
                        return (
                            <TableData key={i}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Table