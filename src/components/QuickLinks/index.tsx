"use client"
import React, {useState, ChangeEvent, useEffect} from 'react'
import Line from '../UI/Line'
import { icons } from '../Shared/Clubs'
import { useSuscribeNewsletter } from '@/hooks/PostRequests';
import { toastSuccess } from '@/utils/toast'
import SectionHead from '../UI/SectionHead';

const QuickLinks = () => {
    const [email,setEmail] = useState<string>('')

        // suscribe newsletter
        const {suscribeNewsletterFn, isLoading, isError, error, isSuccess} = useSuscribeNewsletter();

        const handleSuscribe = () => {
            // alert(email);
            try {
                suscribeNewsletterFn({email});
                console.log('Success:', email);

            } catch (error) {
                console.error('Error:', error);
            }
        }

        useEffect(()=>{
            if(isSuccess){
                toastSuccess("Suscription successful")
            }
        }, [isSuccess])
    return (
        <div className='md:grid md:grid-cols-[4fr_1.5fr] gap-10 px-4 md:px-xPadding '>
            <div className='flex gap-5 flex-col my-3 md:my-1'>
                <img src="./frame.png" alt="" />

                <div className="flex items-center">
                    {/* <p className='uppercase text-[20px] leading-[16 px] gap-5 font-[500] w-1/4 '>Quick Links</p> */}
                    <SectionHead title='quick links' />
                    <Line />
                </div>

                <div className='flex gap-2 items-center overflow-hidden'>
                    {
                        icons.map((icon: string, i: number) => {
                            return (
                                <div key={i}>
                                    <img src={icon} alt="" className='w-[60px] h-[60px] rounded-full border-4 border-secondaryBlue' />
                                </div>
                            )
                        })
                    }
                </div>


            </div>

            <div className='bg-[#E8E8E8] p-5 text-center flex flex-col gap-3 my-3 md:my-1' id='subscribe'>
                <h1 className='font-[600]'>JOIN THE NEWSLETTER</h1>
                <p className='text-[14px]'>Receive the latest news and updates on your favourites </p>
                <input type="text" placeholder='Email Address' className='p-3 text-[14px]' value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <button className='bg-defaultYellow p-3 text-[14px]' onClick={handleSuscribe} disabled={email == '' ? true : false}>
                {
                            isLoading ?
                            "submitting..."
                            :
                            "submit"
                        }
                </button>
            </div>
        </div>
    )
}

export default QuickLinks