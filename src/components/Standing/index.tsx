"use client"
import React, { useEffect, useState } from 'react'
import VerticalHeader from '../Shared/VerticalHeader'
import EachClub from './EachClub'
import { useGetStandings } from '@/store/standing'

const Standing = () => {
    const {standings} = useGetStandings();
    console.log(standings)
    
  return (
    <div>
        <VerticalHeader title='STANDINGS' />

        <div className='my-3'>
            <div className='grid grid-cols-10 gap-2 text-sm'>
                <p>Pos.</p>
                <p className='col-span-6'>TEAM</p>
                <p>P</p>
                <p>W</p>
                <p>PTS</p>
            </div>

            <div className='my-2 divide-y'>
                {
                    standings?.map((item: any, i: number)=>{
                        return(
                            <EachClub name={item.team.name} logo={item.team.logo} key={i} keyIndex={i} p={item.all.played} w={item.all.win} pts={item.points} />
                        )
                    })
                }
            </div>



        </div>
    </div>
  )
}

export default Standing