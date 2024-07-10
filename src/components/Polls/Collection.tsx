"use client"
import React, { useState } from 'react'
import Bar from './Bar'

interface Props{
    polls: string[],
}

const Collection = ({polls}: Props) => {
    const [selected, setSelected] = useState<number | null >()
  return (
    <div className='flex flex-col gap-3'>
        {
            polls?.map((item: string, i: number)=>{
                return(
                    <div onClick={()=> setSelected(i)}>
                        <Bar title={item} value={0} key={i} mySelect={i == selected ? true : false} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Collection