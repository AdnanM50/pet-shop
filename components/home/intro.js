import React from 'react'
import PrimaryButton from '../button/primary_button'
import Image from 'next/image'

const Intro = () => {
    return (
        <div className='container'>
            <div className='lg:flex justify-between items-center mt-10 md:mt-16 lg:mt-28'>
                <div className='w-full lg:w-[50%] '>
                    <h1 className='text-4xl md:text-[76px] lg:text-[96px] fredoka md:leading-[90px] lg:leading-[104px]'>Established & Trusted Pet Care Service</h1>
                    <p className='text-2xl text-secondary_text mt-3 mb-6 md:mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    <PrimaryButton>Find Now</PrimaryButton>
                </div>
                <div className='w-full lg:w-[50%] relative mt-8 lg:mt-0'>
                 
                    <Image className='rounded-lg' src={'/images/cartoon-cat.jpg'} alt="intro_img" width={1000} height={1000}></Image>
                </div>
            </div>
        </div>
    )
}

export default Intro