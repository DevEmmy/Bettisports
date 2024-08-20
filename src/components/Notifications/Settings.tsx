
import React from 'react'
import { HiX } from 'react-icons/hi'

const Settings = ({close}: any) => {
  return (
    <div>
        <div className="black__overlay" onClick={close}></div>

        <div className='fixed z-[1000] md:w-1/3 md:left-1/3  left-0 right-0 top-[20vh] md:top-[30vh] mx-6 bg-white p-10 settings flex flex-col md:gap-5'>
            <div className='flex items-center justify-between'>
                <p className='font-[600]'>Notification Setting</p>

                <HiX onClick={close} className='cursor-pointer'/>
            </div>

            <div>
                <p>I wish to receive Newsletters, Promotion and News from bettitude</p>

                <input type="checkbox" name="" id="" />
            </div>

            <div>
                <p>Notify me when my feed gets updated</p>

                <input type="checkbox" name="" id="" />
            </div>

            <div className='mt-3'>
                <p className='font-[500]'>Basic information on Data Protection: Bettitude stores your data to improve the service and, with your consent, offers news, promotions and raffles, as well as projects and releases from Bettitude. </p>
            </div>
        </div>
    </div>
  )
}

export default Settings