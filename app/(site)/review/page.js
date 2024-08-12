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
            <div className='lg:flex items-start gap-24 justify-between section-gap'>
                <div className='lg:w-[60%] '>
                    <GallerySlider items={items}></GallerySlider>
                </div>
                <div className='lg:w-[40%] font-roboto mt-8 lg:mt-0'>
                    <div className=' bg-white rounded-xl p-6 formShadow'>
                        <div className='flex items-center justify-between pb-4 font-medium text-2xl border-b-[3px] border-[#EBECED]'>
                            <div className='relative z-50 cursor-pointer' onClick={() => setPlan('basic')}>
                                <h1 className={``}>Basic</h1>
                                {plan === 'basic' && <div className='absolute -bottom-[18px] w-full h-[3px] bg-[#0702AA]'></div>}
                            </div>
                            <div className='relative z-50 cursor-pointer' onClick={() => setPlan('stander')}>
                                <h1 className={``}>Stander</h1>
                                {plan === 'stander' && <div className='absolute -bottom-[18px] w-full h-[3px] bg-[#0702AA]'></div>}
                            </div>
                            <div className='relative z-50 cursor-pointer' onClick={() => setPlan('premium')}>
                                <h1 className={``}>Premium</h1>
                                {plan === 'premium' && <div className='absolute -bottom-[18px] w-full h-[3px] bg-[#0702AA]'></div>}
                            </div>

                        </div>
                        { plan === 'basic' && <div>
                            <div className='flex items-center justify-between my-8'>
                                <h1 className='text-lg '>Startups Pack</h1>
                                <h1 className='text-2xl font-medium'>$30</h1>
                            </div>
                            <p className='text-lg font-medium'>Basic Training - Canine Good Citizen</p>
                            <div className='space-y-6 mt-6 text-base text-secondary_text'>
                                <Radio>Basic Training - Canine Good Citizen</Radio>
                                <Radio>Basic Training - Canine Good Citizen</Radio>
                                <Radio>Basic Training - Canine Good Citizen</Radio>
                            </div>
                            <div>
                                <PrimaryButton className='w-full mt-6 py-[15px] !text-lg'>Order Now</PrimaryButton>
                                <PrimaryButton className='w-full btn-hover mt-6 py-[15px] !text-lg'>Order Now</PrimaryButton>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center'>

                <div className='text-center space-y-8'>
                    <h1 className='review_text'>About This Services</h1>
                    <p className='mx-auto lg:w-1/2'>We are a reward-based training company that offers private in-home training, as well as, group classes at The Pooch Palace in the beautiful, Alabama town of Cullman. For more information about us, visit our website, NamasteDogTraining.com, or find us on Facebook, Instagram, Tik Tok, and Youtube!</p>
                    <h1 className='review_text'>What I Train</h1>
                    <div className='space-y-6 text-base text-secondary_text flex flex-col items-center'>
                        <Radio>Basic Training - Canine Good Citizen</Radio>
                        <Radio>Basic Training - Canine Good Citizen</Radio>
                        <Radio>Basic Training - Canine Good Citizen</Radio>
                    </div>
                </div>
                <div className='text-center'>
                    <h1 className='review_text '>About This Trainer</h1>
                    <Image className='w-[300px] my-6 h-[300px] rounded-full' src={"/images/Ellipse2905.png"} alt="test" width={500} height={500}></Image>
                    <h1 className='review_text'>Namaste Dog Training</h1>
                    <h1 className='text-lg text-secondary_text my-4'>TRAINER</h1>
                    <div className='mb-8'>
                        5 (125 Reviews)
                    </div>
                    <div className='flex justify-center'>
                        <PrimaryButton className={"!bg-[#0702AA]"}>Contact Me</PrimaryButton>
                    </div>
                </div>
                <div className='text-base mt-8 text-secondary_text p-5 border-2 border-[#ACB5BD] rounded-[10px] lg:w-1/2'>
                    <div className='space-y-6 lg:w-5/6 p-3'>

                        {
                            [1, 2, 3, 4, 5].map((item) => <div key={item} className='flex items-center justify-between'>
                                <div className='flex items-center gap-3 font-normal'>
                                    <FaLocationDot></FaLocationDot>
                                    <h1>Form</h1>
                                </div>
                                <h1 className='text-end text-black font-medium'>Nevada, USA</h1>
                            </div>)
                        }
                    </div>
                    <hr className='mt-10 mb-9' />
                    <div className='p-3 space-y-6'>
                        <p>Hi there! This is Emon Datta, a passionate UI/UX designer with a strong background in visual design and user-centered design principles. I have worked on various projects ranging from mobile apps to websites, and I am always looking for new challenges that allow me to push the boundaries of design.</p>
                        <p>I am a design enthusiast with a proven track record of over 3 years in the industry. I have worked as a Remote Designer for two companies based in USA. Additionally, I have completed over 150 freelance design projects, demonstrating my versatility and range of expertise.</p>
                    </div>
                </div>
            </div>
            <div className='section-gap'>
                <Faq></Faq>
            </div>
            <div className='lg:w-[80%] gap-6 mx-auto grid md:grid-cols-9'>
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
                <div className=' p-8 bg-white rounded-[10px]  md:col-span-3 flex items-center '>
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
            <div className='section-gap'>
                <h1 className='heading_text_1'>Recommended Traniner</h1>
                <p>Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum sat. Neceessitatibus sonet soluta, vim eu esse accusamus.</p>
                <div className='grid md:grid-cols-3 gap-6 mt-8'>
                    {
                        [1, 2, 3].map((item) => <ServiceCard key={item}></ServiceCard>)
                    }
                </div>
            </div>

        </div>
    )
}

export default Review