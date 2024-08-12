"use client";

import PrimaryButton from "@/components/button/primary_button";
import ToggleButton from "@/components/button/toggleButton";
import PageTitle from "@/components/common/pageTitle";
import UpperSection from "@/components/common/upperSection";
import FormInput from "@/components/from/input";
import { Form } from "antd";
import Password from "antd/es/input/Password";
import { useState } from "react";
import { Checkbox } from "antd";
import Link from "next/link";
const Page = () => {
  const [activeTab, setActiveTab] = useState("1");
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div>
      <UpperSection title="My Account" curTitle="My-account" />
      <div className="container">
        <div className="py-[140px] lg:w-[70%] mx-auto flex justify-center items-center flex-col">
          <h1 className="heading_text_2 text-center mb-[80px]">My Account</h1>
          <ToggleButton
            text1={"SignIn"}
            text2={"Register"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {/* <PageTitle title={activeTab == 1 ? "Sign In" : "Sign Up"} /> */}
         
          {activeTab == 1 ? (
            <div className="w-full">
              
              <div className="mt-6">
                <PageTitle
                  title="Welcome Back"
                  description={"Please sign in to access your full account."}
                />
              </div>
              <Form layout="vertical" className="w-full register_form chackbox">
                <FormInput
                  label="Username or email"
                  placeholder="Email"
                  required={true}
                  isEmail={true}
                />
                <FormInput
                  label="password"
                  placeholder="Password"
                  required={true}
                  type={Password}
                />
                <Checkbox onChange={onChange}>Reminder me</Checkbox>
              </Form>
              <div className="flex justify-center items-center flex-col">
                <PrimaryButton text="Sign In" className="!px-32" />
                <Link
                  href="/change-password"
                  className="text-[#FFA58A] mt-6 font-bold text-[32px] border-[#ffA58A] border-b-2"
                >
                  Lost your password
                </Link>
              </div>
              
            </div>
          ) : (
            <div>
              <div className="mt-6">
                <PageTitle
                  title="Create Account"
                  description={
                    "Your personal data will be used to support your experience throughout this website,to manage access to your account, and for other purposes described in our privacy policy."
                  }
                />
              </div>
              <Form layout="vertical" className="w-full register_form ">
                <FormInput
                  label="Username or email"
                  placeholder="Email"
                  required={true}
                  isEmail={true}
                />
                <FormInput
                  label="password"
                  placeholder="Password"
                  required={true}
                  type={Password}
                />
                <FormInput
                  label="Email Address"
                  placeholder="Email Address"
                  required={true}
                  isEmail={true}
                />
              </Form>
              <PrimaryButton text="Create Account" />
            </div>
          )}
       
        </div>
      </div>
    </div>
  );
};

export default Page;
