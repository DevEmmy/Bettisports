import React from 'react'
import { RiChat1Fill } from 'react-icons/ri';

interface Props {
    thead: string[];
    data: any
}

const Table = ({ thead, data }: Props) => {
    return (
        <div className='table bg-white border text-xs'>
            <div className='grid ' style={{ gridTemplateColumns: `repeat(${thead.length + 1}, 1fr)` }}>
                {
                    thead.map((head: string, i: number) => {
                        return (
                            <div className={`flex items-center justify-center p-5 ${i == 0 && "col-span-2"} text-xs`}>{head}</div>
                        )
                    })
                }
            </div>

            <div className='grid' >
                {
                    data.map((item: any, i: number) => {
                        return (
                            <div className='grid table-items items-center justify-center p-5 odd:bg-[#F6F8FB]' style={{ gridTemplateColumns: `repeat(${thead.length+1}, 1fr)` }}>
                               {
                                Object.values(item).map((dataItem: any, j: number)=>{
                                    return(
                                        <div className={`flex items-center justify-center !text-xs ${j == 0 && "col-span-2 text-secondaryBlue text-xs    "}`}>{dataItem}</div>
                                    )
                                })
                               }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Table