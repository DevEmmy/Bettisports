import React from 'react';
import { MatchDetails, data } from './data';
import Clubs from '../Shared/Clubs';

const LiveScoreHighlight = () => {
  return (
    <div className='bg-primary1 px-5 md:px-smXPadding text-white py-5 overflow-x-scroll md:overflow-hidden'>
      <div className='flex md:grid grid-cols-9 items-center gap-5'>
        <div className='flex md:grid grid-cols-8 md:col-span-8 items-center divide-x'>
          {data.map((item: MatchDetails, i: number) => {
            return (
              <div key={i} className='px-5 min-w-[20%] md:min-w-fit'>
                <div className='flex justify-betweenitems-center'>
                  <Clubs abb={item?.clubs[0].abb} full={false} />
                  <p>-</p>
                </div>

                <div className='flex justify-between items-center'>
                  <Clubs abb={item?.clubs[1].abb} />
                  <p>-</p>
                </div>

                <div className='flex justify-between items-center text-[8px] border-t border-t-gray-400 mt-2 pt-2'>
                  <p className='text-[8px]'>{item?.leagueType.abb}</p>
                  <p className='text-[8px]'>{item?.date}</p>
                </div>
              </div>
            );
          })}

          <div className='flex md:hidden border-2 cursor-pointer justify-center border-gray-400 mx-2 text-white px-3 py-3 rounded-full text-[12px] text-center'>
            Go to Livescores
          </div>
        </div>

        <div className='hidden md:flex border-2 cursor-pointer justify-center border-gray-400 text-white px- py-3 rounded-full text-[12px] text-center'>
          Go to Livescores
        </div>
      </div>
    </div>
  );
};

export default LiveScoreHighlight;
