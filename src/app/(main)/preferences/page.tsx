import EachBlog from '@/components/Blog/EachBlog'
import Container from '@/components/Preferences/Container'
import React from 'react'

const page = () => {

    const preferences = [
        {
            title: "Contents",
            items: [
                "Match Previews",
                "Transfer Rumours",
                "Articles",
                "Fantasy",
                "News",
                "International",
                "Matchdays",
                "Live",
                "Interviews"
            ]
        },
        {
            title: "Teams",
            items: [
                "Chelsea",
                "Arsenal",
                "Barcelona",
                "Man City",
                "Liverpool",
                "Real Madrid",
                "Totenham",
                "Brighton",
                "AS Roma",
                "PSG",
                "Juventus",
                "AC Milan",
                "Inter",
                "Manchester United"
            ]
        },
        {
            title: "Preferred Leagues",
            items: [
                "English Premier League",
                "La Liga",
                "Serial A",
                "Ligue 1",
                "Eredivise",
                "Championship",
                "Division 1",
                "Bundesliga",
                "Saudi Professional League",
                "Super Lig",
                "Premeira Lig",
                "Premiership",
                "La Liga 2",
                "Ligue 2"
            ]
        }
    ]
  return (
    <div className='grid grid-cols-6 gap-5 mx-xPadding my-10'>
        <div className='grid grid-cols-6 col-span-6'>
            <div/>
            <p className='col-span-5 font-[600]'>Liked Posts</p>
        </div>
        <img src="./ads2.png"  alt="" />

        <div className='flex flex-col col-span-4 gap-5'>
            {
                preferences.map((item, i)=>{
                    return(
                        <Container items={item.items} title={item.title} key={i}/>
                    )
                })
            }
        </div>

        <img src="./ads2.png" alt="" />
    </div>
  )
}

export default page