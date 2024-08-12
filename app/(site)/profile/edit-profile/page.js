"use client";
import React, { useState } from "react";
import FormInput from "@/components/from/input";
import { Col, Form, Row, Select } from "antd";
import MultipleImageInput from "@/components/from/multiImage";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const Page = () => {
  const [key, setKey] = useState('1')
  const items = [
    {
      label: 'Personal Info',
      key: '1',
    },
    {
      label: 'Professional Info',
      key: '2',
    }
  ]

  return (
    <div className="bg-page">
      <div className="container bg-page">
        <div className="bg-page">
          <div className="flex justify-between mb-5">
            <div className='flex items-center justify-between gap-12'>
              {
                items.map((item, index) => <div onClick={() => setKey(item.key)} className='flex cursor-pointer gap-5 items-center' key={index}>
                  <h1 className={`${key == item.key ? 'bg-primary text-white' : 'text-secondary_text border border-secondary_text'} w-10 h-10 rounded-full flex justify-center items-center`}>{item.key}</h1>
                  <h1 className={`font-bold text-lg ${key == item.key ? 'text-primary' : 'text-secondary_text'}`}>{item.label}</h1>
                </div>)
              }
            </div>
            <div>

              <button onClick={() => window.history.back()} className="border border-primary text-primary rounded-full px-6 py-1 hover:bg-primary hover:text-white duration-300">
                Back to Profile
              </button>
            </div>
          </div>
          <hr className="mb-16 border-primary"></hr>
          <p className="mb-16">
            Tell us a bit about yourself. This information will appear on your
            public<br></br> profile, so that potential customer can get to know
            your better.{" "}
          </p>
          { key == '1' && <div className="payment-form">
             <div className="w-full lg:w-[85%]">
                <Form className="w-full space-y-3 md:space-y-20" onFinish={(values) => console.log(values)}>
                  <Row gutter={16}>
                    <Col xs={24} md={6}>
                      <p className="font-normal text-base mt-3">
                        Full Name
                        <span className="text-primary">
                          <sup>*</sup>
                        </span>
                      </p>
                    </Col>
                    <Col xs={24} md={9}>
                      <FormInput className="w-full" name={"firstName"} placeholder={"First Name"}></FormInput>
                    </Col>
                    <Col xs={24} md={9}>
                      <FormInput className="w-full" name={"lastName"} placeholder={"Last Name"}></FormInput>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={6}>
                      <p className="font-normal text-base mt-3">
                        Display Name
                        <span className="text-primary">
                          <sup>*</sup>
                        </span>
                      </p>
                    </Col>
                    <Col xs={24} md={9}>
                      <FormInput className="w-full" name={"firstName"} placeholder={"First Name"}></FormInput>
                    </Col>

                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={6}>
                      <p className="font-normal text-base mt-3">
                        Profile Picture
                        <span className="text-primary">
                          <sup>*</sup>
                        </span>
                      </p>
                    </Col>
                    <Col xs={24} md={9}>
                      <MultipleImageInput></MultipleImageInput>
                    </Col>

                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={6}>
                      <p className="font-normal text-base mt-3">
                        About
                        <span className="text-primary">
                          <sup>*</sup>
                        </span>
                      </p>
                    </Col>
                    <Col xs={24} md={18} className="w-full register_form2">
                      <FormInput name={"about"} placeholder={"About"} textArea={true} className=""></FormInput>
                    </Col>

                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={6}>
                      <p className="font-normal text-base mt-3">
                        Language
                        <span className="text-primary">
                          <sup>*</sup>
                        </span>
                      </p>
                    </Col>
                    <Col xs={24} md={18} className="w-full register_form2">
                      <Form.List name="nearest_location">
                        {(fields, { add, remove }) => (
                          <>
                            {fields.map(({ name }, index) => (

                              <div key={index} className=' flex items-center gap-12'>
                                <div className='w-full'>
                                  <FormInput name={[name, 'location']}></FormInput>
                                </div>
                                <div className='w-full'>
                                  <FormInput name={[name, 'distance']} type={"number"} rules={[() => ({
                                    validator(_, value) {
                                      if (value && value < 0) {
                                        return Promise.reject(new Error("Cost can't be negative"))
                                      }
                                      return Promise.resolve()
                                    }
                                  }), () => ({
                                    validator(_, value) {
                                      if (isNaN(value)) {
                                        return Promise.reject(new Error("Cost should be number"))
                                      }
                                      return Promise.resolve()
                                    }
                                  })
                                  ]}></FormInput>
                                </div>
                                {fields.length ? (
                                  <MinusCircleOutlined
                                    className="dynamic-delete-button"
                                    onClick={() => remove(index)}
                                  />
                                ) : null}
                              </div>
                            ))}
                            <div className='hover:bg-primary bg-slate-500 text-white flex justify-end px-6 py-2 ml-auto rounded-full w-fit cursor-pointer' onClick={() => add()} block icon={<PlusOutlined />}>
                              {'Add More'}
                            </div>
                          </>
                        )}
                      </Form.List>
                    </Col>

                  </Row>
                </Form>
              </div>
            <div className="text-right mb-10 mt-5">
              <button className="border border-primary rounded-full px-10 h-12  bg-primary text-white duration-300">
                Continue
              </button>
            </div>
          </div>}

          {
            key == "2" && <div>
              <div className="payment-form space-y-10">
                <div className="flex gap-[148px] items-center">
                  <div>
                    <p>
                      Occupation
                      <span className="text-primary">
                        <sup>*</sup>
                      </span>
                    </p>
                  </div>
                  <div>
                    <div className="flex lg:flex-row flex-col gap-5">
                      <Form layout="horizontal">
                        <Select
                          placeholder={"Select Occupation"}
                          name={"occupation"}
                          className="border border-primary rounded-lg w-60"
                        ></Select>
                      </Form>
                      <button className="border border-primary rounded-lg px-10 h-14  bg-primary text-white duration-300">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[170px] items-center">
                  <div>
                    <p>
                      Services
                      <span className="text-primary">
                        <sup>*</sup>
                      </span>
                    </p>
                  </div>
                  <div className="flex lg:flex-row flex-col gap-5">
                    <Form layout="horizontal">
                      <Select
                        placeholder={"Select Service"}
                        name={"Service"}
                        className="border border-primary rounded-lg w-60"
                      ></Select>
                    </Form>
                    <Form layout="horizontal">
                      <Select
                        placeholder={"Experience Level"}
                        name={"explevel"}
                        className="border border-primary rounded-lg w-60"
                      ></Select>
                    </Form>
                    <button className="border border-primary rounded-lg px-10 h-14  bg-primary text-white duration-300">
                      Add
                    </button>
                  </div>
                </div>
                <div className="flex gap-[170px] items-center">
                  <div>
                    <p>
                      Location
                      <span className="text-primary">
                        <sup>*</sup>
                      </span>
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-5">
                      <Form layout="horizontal" className="lg:w-[500px]">
                        <FormInput
                          placeholder={"Add your location"}
                          name={"Location"}
                        ></FormInput>
                      </Form>
                      <button className="border border-primary rounded-lg px-10 h-[51px] bg-primary text-white duration-300">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[187px] items-center">
                  <div>
                    <p>
                      Phone
                      <span className="text-primary">
                        <sup>*</sup>
                      </span>
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-5">
                      <Form layout="horizontal" className="lg:w-[500px]">
                        <FormInput
                          placeholder={"+1 235 6456 326"}
                          name={"Phone"}
                        ></FormInput>
                      </Form>
                      <button className="border border-primary rounded-lg px-10 h-[51px] bg-primary text-white duration-300">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right my-10">
                <button className="border border-primary rounded-full px-10 h-12  bg-primary text-white duration-300">
                  Continue & Create your Service
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Page;
