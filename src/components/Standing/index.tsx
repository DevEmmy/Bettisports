import React from 'react'
import VerticalHeader from '../Shared/VerticalHeader'
import EachClub from './EachClub'

const Standing = () => {
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
                    [1,2,3,4,5,6,7,8,9,0].map((item: any, i: number)=>{
                        return(
                            <EachClub abb='CHE' key={i} keyIndex={i} p={10} w={7} pts={25} />
                        )
                    })
                }
            </div>



        </div>
    </div>
  )
}

export default Standing