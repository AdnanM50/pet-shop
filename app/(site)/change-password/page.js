"use client";

import PrimaryButton from "@/components/button/primary_button";
import ToggleButton from "@/components/button/toggleButton";
import PageTitle from "@/components/common/pageTitle";
import UpperSection from "@/components/common/upperSection";
import FormInput from "@/components/from/input";
import { Form } from "antd";
import Password from "antd/es/input/Password";
import { useState } from "react";
const Page = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div>
      <UpperSection title="Change Password" curTitle="Change-password" />
      <div className="container">
        <div className="py-[140px] lg:w-[70%] mx-auto flex justify-center items-center flex-col">
          <h1 className="heading_text_2 text-center mb-[80px]">
            Change Password
          </h1>
          <ToggleButton
            text1={"Forgot Password"}
            text2={"Change Password"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {activeTab == 1 ? (
            <div className="w-full">
              <div className="mt-6">
                <PageTitle
                  description={
                    "Lost your password? Please enter your username or email address. You will receive a link to create a new password via email."
                  }
                />
              </div>
              <Form
                layout="vertical"
                className="w-full register_form  chackbox"
              >
                <FormInput
                  label="Username or email"
                  placeholder="Email"
                  required={true}
                  isEmail={true}
                />
              </Form>
              <div className="flex justify-center items-center flex-col mt-20">
                <PrimaryButton text="confirm Email" className="!px-32" />
              </div>
            </div>
          ) : (
            <div className="w-full">
              <Form layout="vertical" className="w-full register_form ">
                <FormInput
                  label="old password"
                  placeholder="password"
                  required={true}
                  type={Password}
                />
                <FormInput
                  label="password"
                  placeholder="Password"
                  required={true}
                  type={Password}
                />
                <FormInput
                  label="Confirm password"
                  placeholder="Password"
                  type={Password}
                  required={true}
                />
              </Form>
              <div className="flex justify-center items-center mt-20">
                <PrimaryButton text="Reset password" className="!px-32 !py-3" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
