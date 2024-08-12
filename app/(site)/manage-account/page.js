'use client';

const Page = () => {
  return (
    <div className="w-full xl:flex xl:gap-6 xl:space-y-0 space-y-8">
        <div className="xl:w-[30%] w-full bg-[#FF5C2C1A] rounded-md px-[19px] py-8">
        <h1 className="heading_text_2 !text-[18px]">Personal Profile | EDIT</h1>
          <div className="space-y-2 mt-5 text-tertiary_text">
        
          <h2>Leton Nondi</h2>
          <h3>leton@gmail.com</h3>
          </div>
          <h1 className="my-8 heading_text_2 !text-[18px] !text-primary">Subscribe Our Newsletter</h1>
        </div>
        <div className="xl:w-[70%] w-full bg-[#FF5C2C1A] rounded-md p-8"> 
        <h1 className="heading_text_2 !text-[18px]">
        Address Book | <span className="text-primary">EDIT</span> 
        </h1>
        <div className="flex gap-2 mt-5">
           <div className="lg:w-1/2">
           <h1 className="mb-12">
           DEFOULT SHIPPING ADDRESS
        </h1>
        <h1 className="heading_text_2 !text-[18px]">Leton Nondi</h1>
        <div className="space-y-2 mt-5">  
        <h2 className="lg:w-[280px]">Chulkathi Bazer Khulna - Bagerhat - Foyla + 1 235 4654 326</h2>
        </div>
           </div>
            <div className="border-l-2  lg:w-1/2 ">
            <div className="pl-4">
            <h1 className="mb-12">
           DEFOULT SHIPPING ADDRESS
        </h1>
        <h1 className="heading_text_2 !text-[18px]">Leton Nondi</h1>
        <div className="space-y-2 mt-5">  
        <h2 className="lg:w-[280px]">Chulkathi Bazer Khulna - Bagerhat - Foyla + 1 235 4654 326</h2>
        </div>
            </div>
            </div>
        </div>  
        </div>
    </div>
  )
}

export default Page