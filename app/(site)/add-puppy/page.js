"use client";

import React from "react"; // Add missing import for React
import UpperSection from "@/components/common/upperSection";
import FormInput from "@/components/from/input";
import { Form } from "antd";
import MultipleImageInput from "@/components/from/multiImage";
import PrimaryButton from "@/components/button/primary_button";

const Page = () => {
    return (
        <div>
            <UpperSection title="Add Puppy" curTitle="add-puppy" />
            <div className="container">
                <div className="py-[140px]">
                    <button className="bg-white text-[#0702AA] border border-[#0702AA] px-7 py-2 rounded-full">Back to Profile</button>
                    <div className=" bg-[#FF5C2C1A] mt-[32px] border border-[#FF5C2C] rounded-lg py-[73px] px-[40px]">
                        <Form layout="vertical" className="w-full ">
                            <div className="lg:w-[60%] register_form2 mb-[40px]">
                                <FormInput placeholder="Breed Name" />
                            </div>
                            <div className="lg:flex gap-7 register_form2">
                                <div className="w-full ">
                                    <FormInput placeholder="Breed Name" textArea={true} label='Description' />
                                </div>
                                <div className="w-full">
                                    <FormInput placeholder="Breed Name" textArea={true} label='Health' />
                                </div>
                            </div>
                            <h1 className="heading_text_2">Breed Traits</h1>
                            <div className="lg:flex gap-7 register_form2">
                                <div className="w-full">
                                    <FormInput label='Personality:' />
                                    <FormInput label='Energy Level:' />
                                    <FormInput label='With Children:' />
                                    <FormInput label='Shedding:' />
                                    <FormInput label='Grooming:' />
                                </div>
                                <div className="w-full">
                                    <FormInput label='Trainability:' />
                                    <FormInput label='Height:' />
                                    <FormInput label='Weight:' />
                                    <FormInput label='Life Expectancy:' />
                                    <FormInput label='Barking Level:' />
                                </div>
                            </div>
                            <h1 className="heading_text_2 my-4">History</h1>
                            <div className="lg:w-[50%] register_form2">
                                    <FormInput  textArea={true}  />
                                </div>
                                <h1 className="heading_text_2 my-4">Upload Image</h1>
                                
                                <div className="flex gap-7 w-full">
                                    <MultipleImageInput 
                                        label='Upload Image'
                                        max={3}
                                        min={1} />
                                </div>
                                <h1 className="heading_text_2 my-4">Upload Video</h1>
                                
                                <div className="flex gap-7 w-full">
                                    <MultipleImageInput 
                                        label='Upload Video'
                                        max={3}
                                        min={1} />
                                </div>
                                <div className="flex justify-end ">
                                    <PrimaryButton text="Continue" className="!px-9 !py-2" />
                                </div>
                            
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page