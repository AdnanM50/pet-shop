"use client"
import PrimaryButton from '@/components/button/primary_button'
import ReviewCard from '@/components/card/reviewCard'
import ServiceCard from '@/components/card/serviceCard'
import Faq from '@/components/common/faq'
import GallerySlider from '@/components/common/gallerySlider'
import { Progress, Radio, Rate } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { FiPlus } from 'react-icons/fi'

const Review = () => {
    const [plan, setPlan] = useState('basic');


    const items = [
        '/images/test_card_img.png', '/images/health.png', '/images/test_card_img.png', '/images/health.png', '/images/test_card_img.png'
    ]

    return (
        <div className='container'>

         
            <div className='gap-6 grid md:grid-cols-9'>
                <div className='p-4 md:p-8 bg-white rounded-[10px] md:col-span-6'>
                    <div className='flex items-center justify-between mb-8'>
                        <h1 className='font-bold text-lg'>125 reviews for this seller</h1>
                        <div className='flex items-center'>
                            <Rate defaultValue={3} /><h1>(125)</h1>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        {
                            [1, 2, 3, 4].map((item) => <div key={item} className='flex gap-5 items-center'>
                                <div className=''>
                                    <Rate defaultValue={5} />
                                </div>
                                <div className='flex-1 mb-[7px]'>
                                    <Progress percent={50} status="active" />
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className=' lg:p-8 p-3 bg-white rounded-[10px]  md:col-span-3 flex items-center '>
                    <div className='w-full'>
                        <h1 className='font-bold text-lg'>Rating Breakdown</h1>
                        <div className='mt-8 space-y-3 w-full'>

                            {
                                [1, 2, 3].map((item) => <div key={item} className='flex  items-center justify-between'>
                                    <h1 className='text-secondary_text text-base'>Trainer communication level</h1>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-secondary' />
                                        <h1>5</h1>
                                    </div>
                                </div>)
                            }
                        </div>

                    </div>
                </div>
            </div>

            <div className=' section-gap'>
                <ReviewCard></ReviewCard>
            </div>
        

        </div>
    )
}

export default Review