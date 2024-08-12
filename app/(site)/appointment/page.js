"use client";
import PrimaryButton from "@/components/button/primary_button";
import ToggleButton from "@/components/button/toggleButton";
import UpperSection from "@/components/common/upperSection";
import FormInput from "@/components/from/input";
import { Col, Form, Radio, Row } from "antd";
import { DatePicker, Space } from "antd";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const [activeTab, setActiveTab] = useState("1");
  // const plainOptions = [
  //   "Veterinary",
  //   "Bording",
  //   "Grooming",
  //   "Grooming",
  //   "Training",
  // ];

  const onChange1 = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div>
      <UpperSection title="Appointment" curTitle="Shop" />
      <div className="container">
        <div className="my-[140px]">
          <div className="flex flex-col  lg:w-[70%] mx-auto justify-center items-center">
            <h1 className="heading_text_1 lg:w-[205px] mb-4 text-center">
              Book an Appointment
            </h1>
            <ToggleButton
              text1={"About Care"}
              text2={"About You"}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <Form layout="vertical" className=" lg:w-[70%] w-full mt-[30px]">
              {activeTab == "1" && (
                <div className="flex flex-col space-y-4 gap-[20px]  mx-auto">
                  <div className="flex justify-center items-center">
                    <div className="py-5 bg-[#FF5C2C1A] px-5 w-full text-center rounded-xl">
                      <h1 className="heading_text_2 !text-2xl !font-medium">
                        1 Day FREE daycare trail for new clients!
                      </h1>
                      <p className="text-tertiary_text mt-1">
                        Reservation requared. Discount cannot be applied during
                        peak periods.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center ">
                    <div className="bg-white  rounded-xl w-full pl-5 py-4 flex justify-between items-center border formShadow1">
                      <div className="flex flex-wrap lg:space-x-10 chackbox lg:justify-center items-center">
                        <h1 className="heading_text_2 pt-1 !text-2xl !font-medium">
                          Interested in :
                        </h1>
                        <Radio.Group className="flex flex-wrap">
                          <Radio value="a" className="mx-4 mt-2">
                            A
                          </Radio>
                          <Radio value="b" className="mx-4 mt-2">
                            B
                          </Radio>
                          <Radio value="c" className="mx-4 mt-2">
                            C
                          </Radio>
                          <Radio value="d" className="mx-4 mt-2">
                            D
                          </Radio>
                        </Radio.Group>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white pt-3 rounded-xl w-full px-3 py-4   border  formShadow1">
                    <div className=" space-x-14 datepicker ">
                      <Space className="flex flex-wrap items-center  w-full">
                        <DatePicker onChange={onChange1} />
                        <DatePicker onChange={onChange1} picker="Pm" />
                        <DatePicker onChange={onChange1} picker="min" />
                      </Space>
                    </div>
                  </div>
                  <PrimaryButton
                    text="Start Reservation"
                    className="mt-[32px] !text-lg !md:w-[40%] mx-auto"
                  />
                </div>
              )}

              {activeTab == "2" && (
                <div className="flex flex-col gap-[20px] input-border w-full mx-auto">
                  <div className="bg-white pt-3 rounded-xl formShadow px-3 border">
                    <Col sm={24}>
                      <FormInput placeholder="First Name" name="firstName" />
                    </Col>
                  </div>

                  <div className="bg-white pt-3 rounded-xl formShadow px-3 border">
                    <Row gutter={24}>
                      <Col span={12}>
                        <FormInput placeholder="First Name" name="firstName" />
                      </Col>

                      <Col span={12}>
                        <FormInput placeholder="Last Name" name="lastName" />
                      </Col>
                    </Row>
                  </div>
                  <div className="bg-white pt-3 rounded-xl formShadow px-3 border">
                    <Col sm={24}>
                      <FormInput placeholder="First Name" name="firstName" />
                    </Col>
                  </div>
                  <div className="bg-white pt-3 rounded-xl formShadow px-3 border textarea-border">
                    <Col sm={24}>
                      <FormInput
                        textArea={true}
                        placeholder="First Name"
                        name="firstName"
                      />
                    </Col>
                  </div>
                  <div className="flex justify-center">
                    <PrimaryButton
                      text="Previous"
                      className={" mr-4 !bg-[#FF5C2C1A] !text-primary "}
                    />
                    <PrimaryButton text="Send" className={" mr-4"} />
                  </div>
                </div>
              )}
            </Form>
          </div>
          <div className="grid lg:grid-cols-2 gap-[100px] my-[140px] items-center">
            <div className="flex justify-center">
              <div className="flex lg:justify-start justify-center relative mr-20">
                <Image
                  src="/images/app1.png"
                  alt="appointment"
                  className="md:w-[450px] w-[180px] h-[300px] md:h-[680px] object-fill"
                  width={1000}
                  height={1000}
                />
                <div className="absolute top-6 -right-[90px] md:top-[83px] lg:-right-[175px] md:-right-[173px]">
                  <Image
                    src="/images/app2.png"
                    className="object-fill md:w-[340px] w-[140px] h-[250px] md:h-[510px]"
                    alt="appointment"
                    width={1000}
                    height={1000}
                  />
                </div>
            </div>
            </div>

            <div>
              <div className="flex justify-start items-start flex-col">
                <h1 className="heading_text_1 mb-[22px]">Benefits:</h1>
                <h1 className="heading_text_2 !text-[18px] !font-bold">
                  Total Wellness: 10
                </h1>
                <p className="text-secondary_text">
                  we focus on your dog’s total wellness and don’t merely limit
                  ourselves to veterinary care. We coordinate with groomers,
                  trainers, dog walkers, etc. to ensure that in addition to
                  being healthy your dog is getting enough exercise, mental
                  stimulation, and is well mannered among other things
                </p>
                <h1 className="heading_text_2 !text-[18px] !font-bold mt-[32px]">
                  Prevention:
                </h1>
                <p className="text-secondary_text">
                  most veterinarians see their patients when they are sick. We
                  work with you to craft a comprehensive wellness plan that
                  improves your dog’s long-term health and quality of life
                </p>
                <h1 className="heading_text_2 !text-[18px] !font-bold mt-[32px]">
                  Convenience:
                </h1>
                <p className="text-secondary_text">
                  we can see you dog while he or she is receiving other services
                  like grooming and overnight care without your having to be
                  present and provide transportation to and from our facilities.
                  We also offer telemedicine. No more trips to the vet!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
