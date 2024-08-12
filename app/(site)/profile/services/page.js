import PrimaryButton from '@/components/button/primary_button'
import ServiceCard from '@/components/card/serviceCard'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='heading_text_2 !font-roboto'>Showing 1-9 of 846 results</h1>
        <Link href="/profile/services/add">
        <PrimaryButton className={"btn-hover !py-2"} text={'Add New'}></PrimaryButton>

        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-[140px] mt-6">
        {[...Array(9)].map((data, index) => (
          <ServiceCard
            key={index} data={data}
          />
        ))}
      </div>
    </div>
  )
}

export default Page