'use client';

import Image from "next/image";

const Page = () => {
  return (
    <div>
        <div className="flex  justify-between">
    <h1 className="heading_text_2 !mb-7 !font-medium ">My Payment Options</h1>
    <h1 className="heading_text_2 !mb-7 !font-medium ">+ Add New Payment Option</h1>
        </div>
      <div className="bg-[#FF5C2C33] px-[19px] py-8 rounded-md">

     <div className="border-b">
      <h1 className="heading_text_2 !mb-3 !font-extralight !text-[24px] ">Account</h1>   
     </div>
     <div className="flex justify-between items-center my-1 border-b">
        <div className="flex justify-start space-x-3 items-center">
          <Image src="/images/visa.png" width={50} height={50} alt="visacard" />
          <h2 className="text-tertiary_text lg:w-[295px]">014*****326</h2>
        </div>
        <div>
          <button className="text-primary text-lg">Delete</button>
        </div>
     </div>
        
      
     <div className="flex justify-between items-center my-1 border-b">
        <div className="flex justify-start space-x-3 items-center">
          <Image src="/images/credit-card.png" width={50} height={50} alt="visacard" />
          <h2 className="text-tertiary_text lg:w-[295px]">014*****224</h2>
        </div>
        <div>
          <button className="text-primary text-lg">Delete</button>
        </div>
     </div>
   
   
      </div>
    </div>
  )
}

export default Page