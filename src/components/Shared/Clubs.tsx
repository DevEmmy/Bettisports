"use client";
import React, { useEffect, useState } from 'react'
import {} from "react-icons/fi"

interface ClubsProp{
    abb: string;
    size?: string,
    full?: boolean
}

interface Club{
    abb: string;
    icon: string;
    full: string;
}

const Clubs = ({abb, size, full = false}: ClubsProp) => {
    const clubs : Club[] = [
        {
            abb: "Barca",
            icon: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1010px-FC_Barcelona_%28crest%29.svg.png",
            full: "BARCELONA"
        },
        {
            abb: "CHE",
            icon: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",
            full: "CHELSEA"
        },
        {
            abb: "ARS",
            icon: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
            full: "Arsenal"
        },
        {
            abb: "MCI",
            icon: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png",
            full: "Manchester City"
        },
        {
            abb: "BUR",
            icon: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Burnley_FC_Logo.svg/180px-Burnley_FC_Logo.svg.png",
            full: "Burnley"
        },
        {
            abb: "TOT",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnbB0zcQMYhAiarnOqrngY_1jMmPBE-gNgsvCd8BCsw&s",
            full: "Totthenham"
        },
        
        {
            abb: "SHE",
            icon: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Sheffield_United_FC_logo.svg/190px-Sheffield_United_FC_logo.svg.png",
            full: "SHEFFIELD UNITED"
        },
        {
            abb: "LUT",
            icon: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Luton_Town_logo.svg/180px-Luton_Town_logo.svg.png",
            full: "LUTON"
        }
    ]

    const [club, setClub] = useState<Club>(clubs[0])

    useEffect(()=>{
        let index = clubs.findIndex((cl: Club)=> cl.abb == abb);
        setClub(clubs[index]);
    }, [abb])

if(full){
   return (
    <div className='flex gap-2 items-center'>
        <img src={club.icon} alt="" className='w-[20px] h-auto object-contain' />
        <p style={{fontSize: size || "14px"}} className='font-[500]'>{club.abb}</p>
    </div>
  ) 
}

else{
    return (
        <div className='flex gap-2 items-center'>
            <img src={club.icon} alt="" className='w-[20px] h-auto object-contain' />
            <p style={{fontSize: size || "14px"}} className='font-[500]'>{club.full}</p>
        </div>
      )   
}
  
}

export default Clubs