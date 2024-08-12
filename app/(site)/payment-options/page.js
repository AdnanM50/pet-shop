"use client";
import Image from "next/image";
import React from "react";
import { TiTick } from "react-icons/ti";
import { IoLockClosedOutline } from "react-icons/io5";
import FormInput from "@/components/from/input";

import { Checkbox, Form, Radio } from "antd";

const page = () => {
  return (
    <section className="bg-light">
      <div className="container bg-light py-20">
        <div className="grid  grid-cols-1 lg:grid-cols-5 lg:gap-5">
          <div className="col-span-3">
            <div className="p-6 bg-white border border-primary rounded-lg font-bold shadow-md">
              <p>Payment Options</p>
            </div>
            <div className="flex items-center font-bold py-5 ">
              <Form.Item label="" className="pt-5 md:pl-10">
                <Radio value="Credit"> Credit & Debit Cards </Radio>
              </Form.Item>
              <div className="flex gap-5 ">
                <div>
                  <Image
                    src={"/images/visa.png"}
                    alt="img"
                    width={50}
                    height={50}
                  ></Image>
                </div>
                <div>
                  <Image
                    src={"/images/credit-card.png"}
                    alt="img"
                    width={50}
                    height={50}
                  ></Image>
                </div>
                <div>
                  <Image
                    src={"/images/credit-card (1).png"}
                    alt="img"
                    width={50}
                    height={50}
                  ></Image>
                </div>
                <div>
                  <Image
                    src={"/images/credit-card (2).png"}
                    alt="img"
                    width={50}
                    height={50}
                  ></Image>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 payment-form lg:pr-40 p-10 bg-white rounded-lg border border-primary shadow-md">
              <div>
                <Form layout="vertical">
                  <FormInput
                    label={"Card Number"}
                    name={"CardNumber"}
                  ></FormInput>
                </Form>
              </div>
              <div className="">
                <Form layout="vertical">
                  <div className="grid grid-cols-2 gap-2">
                    <FormInput
                      label={"Expiration Date"}
                      name={"ExpDate"}
                    ></FormInput>
                    <FormInput
                      label={"Security Code?"}
                      name={"Code"}
                    ></FormInput>
                  </div>
                </Form>
              </div>

              <div>
                <Form layout="vertical">
                  <FormInput
                    label={"First Name"}
                    name={"FirstName"}
                  ></FormInput>
                </Form>
              </div>
              <div>
                <Form layout="vertical">
                  <FormInput label={"Last Name"} name={"LastName"}></FormInput>
                </Form>
              </div>
              <div>
                <Checkbox className="text-secondary_text">
                  Save as Default?
                </Checkbox>
              </div>
            </div>

            <div className="flex items-center font-bold py-5 gap-2 ">
              <Form.Item label="" className="pt-5 md:pl-10 pl-5">
                <Radio value="Paypal"></Radio>
              </Form.Item>
              <div>
                <Image
                  src={"/images/paypal1.png"}
                  alt="img"
                  width={100}
                  height={100}
                ></Image>
              </div>
            </div>

            <div>
              <div className=" bg-white rounded-lg border-[#acb5bd] shadow-xl">
                <div className="p-6 border border-primary rounded-lg font-bold bg-light">
                  <p>Payment Options</p>
                </div>
                <div className="flex items-center font-bold pt-5 ">
                  <Form.Item label="" className="pt-5 md:pl-10">
                    <Radio value="Credit"> Credit & Debit Cards </Radio>
                  </Form.Item>
                  <div className="flex gap-5 ">
                    <div>
                      <Image
                        src={"/images/visa.png"}
                        alt="img"
                        width={50}
                        height={50}
                      ></Image>
                    </div>
                    <div>
                      <Image
                        src={"/images/credit-card.png"}
                        alt="img"
                        width={50}
                        height={50}
                      ></Image>
                    </div>
                    <div>
                      <Image
                        src={"/images/credit-card (1).png"}
                        alt="img"
                        width={50}
                        height={50}
                      ></Image>
                    </div>
                    <div>
                      <Image
                        src={"/images/credit-card (2).png"}
                        alt="img"
                        width={50}
                        height={50}
                      ></Image>
                    </div>
                  </div>
                </div>
                <div className="flex items-center font-bold pb-5 gap-2 ">
                  <Form.Item label="" className="pt-5 md:pl-10 pl-5">
                    <Radio value="Paypal"></Radio>
                  </Form.Item>
                  <div>
                    <Image
                      src={"/images/paypal1.png"}
                      alt="img"
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                </div>
                <div className="p-6 border border-primary rounded-lg bg-light">
                  <Checkbox className="text-secondary_text">
                    Remember for future payments
                  </Checkbox>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="rounded border border-primary">
              <div className="bg-primary flex items-center rounded pr-6 py-2">
                <div>
                  <Image
                    src={"/images/image102.png"}
                    alt="img"
                    width={200}
                    height={200}
                  ></Image>
                </div>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor t
                  dolore magna aliqua. Ut e
                </p>
              </div>
              <div className="px-4 font-bold bg-white">
                <div className="flex justify-between py-5 mt-2">
                  <p>Silver</p>
                  <p>60$</p>
                </div>
                <div className="flex items-center gap-2 mb-3 mt-3">
                  <TiTick className="text-2xl text-[#5868b9]" />
                  <p>Near me optimization</p>
                </div>
                <div className="flex items-center gap-2 mb-8">
                  <TiTick className="text-2xl text-[#5868b9]" />
                  <p>Regional keyword research</p>
                </div>
                <p className="mb-5">Enter Promo Code</p>
                <div className="flex justify-between py-5">
                  <p>Service Fee</p>
                  <p>04 $</p>
                </div>
                <div className="flex justify-between py-5">
                  <p>Total 08 $</p>
                  <p>60$</p>
                </div>
                <div className="flex justify-between py-5">
                  <p>Total delivery time</p>
                  <p className="text-end">14 days</p>
                </div>
                <div className="flex flex-col justify-center items-center mt-3">
                  <button className="bg-primary text-white rounded-full px-12 py-4 text-lg">
                    Confirm Pay
                  </button>
                  <div className="flex items-cente gap-2 mt-2 mb-5">
                    <IoLockClosedOutline className="text-lg" />
                    <p className="font-normal text-secondary_text">
                      SSL Secure Payment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
