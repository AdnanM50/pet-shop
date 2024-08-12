"use client";

import PrimaryButton from "@/components/button/primary_button";
import UpperSection from "@/components/common/upperSection";
import FormInput from "@/components/from/input";
import { Form } from "antd";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaFax } from "react-icons/fa";

const page = () => {
  const style = { color: "#FF5C2C" };
  return (
    <div>
      <UpperSection title="Our Shop" curTitle="Our Shop" />
      <div className="w-full my-[140px]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-20 place-content-between mb-[140px]">
            <div className="w-full lg:p-[46px] p-5 formShadow rounded-3xl formBorder flex flex-col justify-center items-start">
              <h1 className="font-bold text-lg leading-[26px] text-[#FE4651]">
                Contact Us
              </h1>
              <h1 className="heading_text_1 leading-[42px] mt-2 ">
                Send Us a Message
              </h1>
              <p className="mt-[32px] text-tertiary_text">
                Please do not hesitate to send us a message, We are looking
                forward to hearing from you! We reply within 24 hours.
              </p>
              <Form name="basic" layout="vertical" className="mt-[32px] w-full">
                <FormInput name="fname" placeholder="Fast Name" type="text" />
                <FormInput name="lname" placeholder="Last Name" type="text" />
                <FormInput
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />
                <FormInput name="phone" placeholder="Phone" type="number" />
                <FormInput name="subject" placeholder="Subject" type="text" />
                <FormInput
                  textArea={true}
                  name="message"
                  placeholder="Enter your message"
                  type="text"
                />
                <div className="flex justify-center items-center">
                <PrimaryButton className="mt-[32px]" htmlType="submit">
                  Send Message
                </PrimaryButton>
                </div>
              </Form>
            </div>
            <div className="lg:flex justify-center lg:justify-end">
            <div className="">
              <div className="flex justify-start items-center mb-6">
                <Image
                  alt="contact us image"
                  src="/logo/customer-service 1.png"
                  width={120}
                  height={120}
                />
                <h2 className="heading_text_1">Contact Us 24/7</h2>
              </div>
              <div className="flex flex-col space-y-7">
                <div className="flex justify-start items-center space-x-[23px]">
                  <MdLocationOn size={51} style={style} />
                  <div>
                    <p className="heading_text_2 !font-roboto">Address</p>
                    <p className="text-tertiary_text lg:w-[290px]">
                      85 KDA Outer bypass Road, Sonadanga, Khulna 9100,
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-center space-x-[23px]">
                  <BsFillTelephoneInboundFill size={48} style={style} />
                  <div>
                    <p className="heading_text_2 !font-roboto">Tel</p>
                    <p className="text-tertiary_text">+8801404049797</p>
                  </div>
                </div>
                <div className="flex justify-start items-center space-x-[23px]">
                  <MdMarkEmailUnread size={48} style={style} />
                  <div>
                    <p className="heading_text_2 !font-roboto">Email</p>
                    <p className="text-tertiary_text">
                      Support.appstick.com.bd
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-center space-x-[23px]">
                  <FaFax size={48} style={style} />
                  <div>
                    <p className="heading_text_2 !font-roboto">Fax</p>
                    <p className="text-tertiary_text">+8801404049797</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29214.076314471324!2d90.44000255230473!3d23.755952807723435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1709545907559!5m2!1sen!2sbd"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
