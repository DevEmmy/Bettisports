import Articles from '@/components/Articles';
import BreakingNews from '@/components/BreakingNews';
import FootballNews from '@/components/FootballNews';
import Footer from '@/components/Footer';
import ForYou from '@/components/ForYou';
import HeroHighlight from '@/components/HeroHighlight';
import InFocus from '@/components/InFocus';
import InternationalFootball from '@/components/InternationalFootball';
import Live from '@/components/Live';
import LiveTransfer from '@/components/LiveTransfer';
import MostRead from '@/components/MostRead';
import PhotoSplash from '@/components/PhotoSplash';
import Podcast from '@/components/Podcast';
import QuickLinks from '@/components/QuickLinks';
import Stories from '@/components/Stories';
import MoreStories from '@/components/Stories/MoreStories';
import Topics from '@/components/Topics';
import VideoComponent from '@/components/Videos';
import Image from 'next/image';
import Fantasy from '@/components/Fantasy';
import Marquee from "react-fast-marquee";


export default function Home() {

  return (
    <div className=''>

    
      <div className='flex mt-5 md:mt-10 px-5  md:pl-xPadding overflow-x-hidden '>
        <div className='bg-[#197DDA] text-white p-3 flex items-center px-4 text-nowrap'>
          FLASH STORY
        </div>

        <Marquee className=' bg-[#FCDF984D] px-5 py-2 gap-3.5 md:gap-5'>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
            return (
              <div className='flex gap-1.5 md:gap-3 items-center min-w-fit mx-3'>
                <img
                  width={50}
                  height={50}
                  className='h-full'
                  src='https://play-lh.googleusercontent.com/NUvIXijlsTJRl2d829bIuBdZjqyCnf9VG98ZT3FqQl9ffEvy4ynhs1tsxI5nD75xKA'
                  alt=''
                />

                <p className='text-[14px] font-[600] '>
                  Revealed, The Top Scoring Nationals In The SPL
                </p>
              </div>
            );
          })}
        </Marquee>
      </div>

      <HeroHighlight />

      <BreakingNews />

      <Stories />
      <ForYou />
      <QuickLinks />
      <FootballNews title="MEN'S" />
      <img src='./hero2.png' alt='' className='mx-auto w-2/3 my-5' />
      {/* <Articles /> */}
      <MoreStories />
      <MostRead />
      <img src='./hero2.png' alt='' className='mx-auto w-2/3 my-5' />
      {/* <LiveTransfer /> */}
      <Podcast />
      <img src='./hero2.png' alt='' className='mx-auto w-2/3 my-5' />
      <FootballNews title="WOMEN'S" />
      <img src='./hero2.png' alt='' className='mx-auto w-2/3 my-5' />
      <Articles />
      <PhotoSplash />
      <img src='./hero2.png' alt='' className='mx-auto w-2/3 my-5' />

      <img src='./hero2.png' alt='' className='mx-auto w-2/3 my-5' />

      <Live />
      <Topics />
      <InFocus />

      <MoreStories />

      <InternationalFootball />

      <Articles />

      <Fantasy />
      <VideoComponent />
      <img
        src='./frame.png'
        className='w-fit h-auto object-contain mx-auto my-10'
        alt=''
      />

{/* <ViewStories activeIndex={1} show={true}/> */}
    </div>
  );
}
