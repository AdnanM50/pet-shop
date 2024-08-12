'use client';
import PrimaryButton from "@/components/button/primary_button";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="heading_text_2 !mb-7 !font-medium ">My Account</h1>
      <div className="bg-[#FF5C2C33] px-[19px] py-8">

     
      <div className=" rounded-md  grid lg:grid-cols-3 md:grid-cols-2 gap-y-14">
        <div>
          <h1 className="heading_text_2 !text-[18px] ">Full Name</h1>
          <h2 className="text-tertiary_text">Leton Nondi</h2>
        </div>
        <div>
          <h1 className="heading_text_2 !text-[18px] ">Email Address | <span className="text-primary">Change</span> </h1>
          <h2 className="text-tertiary_text">leton@gmail.com</h2>
        </div>
        <div>
        <h1 className="heading_text_2 !text-[18px] ">Mobile |  <span className="text-primary">Change</span> </h1>
          <h2 className="text-tertiary_text">+1 546 4523 3264</h2>
        </div>
        <div>
          <h1 className="heading_text_2 !text-[18px] ">Birthday</h1>
          <h2 className="text-tertiary_text">1983-12-07</h2>
        </div>
        <div>
          <h1 className="heading_text_2 !text-[18px] ">Gender</h1>
          <h2 className="text-tertiary_text">Male</h2>
        </div>
      </div>
      <h1 className="mt-16 mb-7 heading_text_2 !text-[18px] !text-primary">Subscribe Our Newsletter</h1>
      <div className="space-y-7 space-x-7">

      <PrimaryButton >EDIT PROFILE</PrimaryButton>
      <PrimaryButton >CHANGE PASSWORD</PrimaryButton>
      </div>
      </div>
    </div>
  );
};

export default page;
