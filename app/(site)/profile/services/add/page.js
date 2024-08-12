"use client"
import Description from '@/components/services/description'
import Gallery from '@/components/services/gallery'
import Overview from '@/components/services/overview'
import Pricing from '@/components/services/pricing'
import Publish from '@/components/services/publish'
import React, { useState } from 'react'

const Page = () => {
  const [key, setKey] = useState('1')
  const items = [
    {
      label: 'Overview',
      key: '1',
    },
    {
      label: 'Pricing',
      key: '2',
    },
    {
      label: 'Description & FAQ',
      key: '3',
    },
    {
      label: "Gallery",
      key: '4',
    },
    {
      label: "Published",
      key: '5',
    }
  ]
  return (
    <div>
      <div className='flex items-center justify-between flex-wrap space-y-3'>
        {
          items.map((item, index) => <div onClick={() => setKey(item.key)} className='flex cursor-pointer gap-5 items-center' key={index}>
            <h1 className={`${key == item.key ?  'bg-primary text-white' : 'text-secondary_text border border-secondary_text'} w-10 h-10 rounded-full flex justify-center items-center`}>{item.key}</h1>
            <h1 className={`font-bold text-lg ${key == item.key ? 'text-primary' : 'text-secondary_text'}`}>{item.label}</h1>
          </div>)
        }
      </div>
      <hr className='border-primary my-6' />
      <div>
        {key == '1' && <Overview></Overview>}
        {key == '2' && <Pricing></Pricing>}
        {key == '3' && <Description></Description>}
        {key == '4' && <Gallery></Gallery>}
        {key == '5' && <Publish></Publish>}
      </div>
    </div>
  )
}

export default Page