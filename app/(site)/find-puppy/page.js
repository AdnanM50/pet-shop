"use client"
import PrimaryButton from '@/components/button/primary_button'
import ToggleButton from '@/components/button/toggleButton'
import BreedCard from '@/components/card/breedCard'
import UpperSection from '@/components/common/upperSection'
import { Col, Progress, Row } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {
  const [active, setActive] = useState(1)
  const [activeTab, setActiveTab] = useState(1)
  return (
    <div>
      <UpperSection title="Find Puppy" curTitle="Shop"></UpperSection>
      <div className='container section-gap'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='heading_text_1 w-1/3 text-center mx-auto !leading-[42px]'>American Water Spaniel Puppies For Sale</h1>
          <div className='heading_text_2 !font-roboto flex justify-center gap-14 mt-[60px] mb-[80px]'>
            <h1 className={`cursor-pointer ${active == 1 ? 'text-primary fredoka underline' : ''}`} onClick={() => setActive(1)}>About Puppy</h1>
            <h1 className={`cursor-pointer ${active == 2 ? 'text-primary fredoka underline' : ''}`} onClick={() => setActive(2)}>Description</h1>
          </div>
        </div>
        <div className='md:flex items-start gap-10'>
          <div className='md:w-[65%]'>
            <Image src="/images/image95.png" width={1000} height={1000} alt="test"></Image>
            <div className='flex gap-5 items-center justify-between'>
              <ToggleButton text1="About Care" text2="About You" activeTab={activeTab} setActiveTab={setActiveTab}></ToggleButton>
              <PrimaryButton className={"!text-lg !py-3"} text="Buy Now"></PrimaryButton>
            </div>
          </div>
          <div className='md:w-[35%]'>
            <h1>Name: <span>Moly</span></h1>
            <h1>Name: <span>Moly</span></h1>
            <h1>Name: <span>Moly</span></h1>
            <h1>Name: <span>Moly</span></h1>
          </div>
        </div>
        
        {
          active == 2 && <div className='section-gap'>
            <div className=' text-secondary_text text-lg'>
              <h1 className='heading_text_1 mb-8'>Description:</h1>
              <h1 className='mb-3 '><span className='heading_text_2 text-black !font-roboto'>Origin:</span> United States</h1>
              <h1 className='mb-8'><span className='heading_text_2 text-black !text-base !font-roboto'>Year Recognized:</span> 1940</h1>
              <p><span className='text-black'>Breed History & Description:</span> The development of the American breeds is a classic case of ¿Yankee ingenuity¿¿a particular genius for adapting Old World materials to solve New World problems. Breeding hounds that specialize in trailing raccoon is a good example. So is the AWS. The European immigrants who settled Wisconsin and Minnesota depended for sustenance on the region¿s plentiful waterfowl. Over generations they utilized various Euro breeds in creating a wholly new dog, the AWS, to meet the unique challenges of hunting in and around the Great Lakes.</p>
            </div>
            <div className='mt-8'>
              <Row gutter={[26, 32]}>
                { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => <Col key={index} xs={24} md={12}>
                  <h1 className='text-2xl font-medium font-roboto'>Energy Level</h1>
                  <Progress showInfo={false} percent={80} strokeColor={'#FF5C2C'} className=''></Progress>
                </Col>) }
              </Row>
            </div>
            <div>

            </div>
          </div>
        }
        {(active == 1 || active == 2 ) && <div className='section-gap'>
          <h1 className='heading_text'>Explore other Breeds</h1>
          <p className='text-base lg:sw-1/3 text-secondary_text mt-3'>Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum sat. Neceessitatibus sonet soluta,</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-8'>
            {
              [1, 2, 3, 4].map((val, index) => <BreedCard key={index}></BreedCard>)
            }
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Page