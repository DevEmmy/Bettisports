"use client";
import React, { useState } from 'react'
import Element from './Element'

interface Props {
    title: string,
    items: string[]
}

const Container = ({ title, items }: Props) => {
    const [selected, setSelected] = useState<string[]>([])

    const handle = (item: string) => {
        if (selected.includes(item)) {
            let items = selected.filter((itm)=> itm !== item)
            setSelected(items);
        }
        else {
            setSelected([...selected, item])
        }
    }
    return (
        <div className='bg-[#F6F8FB] p-5 h-fit rounded-md flex flex-col gap-3'>
            <p className='font-[600]'>{title}</p>
            <div className="flex flex-wrap gap-3">
                {
                    items.map((item: string, i: number) => {
                        return (
                            <div onClick={() => handle(item)} className='cursor-pointer'>
                                <Element title={item} key={i} selected={selected.includes(item)} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Container