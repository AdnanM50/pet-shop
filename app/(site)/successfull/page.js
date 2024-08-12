"use client";

import PrimaryButton from "@/components/button/primary_button";
import UpperSection from "@/components/common/upperSection";
import Image from "next/image";
const Page = () => {
  return (
    <div>
      <UpperSection title="Change Password" curTitle="Change-password" />
      <div className="container">
        <div className="py-[140px] lg:w-[70%] mx-auto flex justify-center items-center flex-col">
          <h1 className="heading_text_2 text-center mb-[80px]">
            {" "}
            successfully!😊🤞
          </h1>
          <Image
            src="/images/confirmpass.png"
            width={300}
            height={300}
            alt="successfull image"
          />
          <h1 className="heading_text_2 text-center mt-[50px]"> Verified</h1>
          <h1 className="heading_text_2 text-center my-[30px] !text-secondary_text w-[349px]">
            Your account has been verified successfully!
          </h1>
          <div className="flex justify-center items-center flex-col ">
            <PrimaryButton text="Done" className="!px-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
