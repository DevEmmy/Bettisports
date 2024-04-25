import React from 'react'
import { MatchDetails, data } from './data'
import Clubs from '../Shared/Clubs'

const LiveScoreHighlight = () => {
    return (
        <div className='bg-primary1 px-smXPadding text-white py-5'>

            <div className='grid grid-cols-9 items-center gap-5'>
                <div className="grid grid-cols-8 col-span-8 items-center divide-x">
                    {
                        data.map((item: MatchDetails, i: number)=> {
                            return (
                                <div key={i} className='px-5'>
                                    <div className="flex justify-between items-center">
                                        <Clubs abb={item.clubs[0].abb} />
                                        <p>-</p>
                                    </div>

                                    <div className="flex justify-between items-center">
                                    <Clubs abb={item.clubs[1].abb} />
                                        <p>-</p>
                                    </div>

                                    <div className="flex justify-between items-center text-[12px] border-t border-t-gray-400 mt-2 pt-2">
                                        <p>{item.leagueType.abb}</p>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='border border-gray-400 text-white px-5 py-3 rounded-full text-sm'>
                    Go to Livescores
                </div>
            </div>
        </div>
    )
}

export default LiveScoreHighlight