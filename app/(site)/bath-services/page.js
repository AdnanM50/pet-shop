"use client";
import PrimaryButton from "@/components/button/primary_button";
import ServiceCard from "@/components/card/serviceCard";
import FindPuppy from "@/components/common/findPuppy";
import PageTitle from "@/components/common/pageTitle";
import FormInput from "@/components/from/input";
import FormSelect from "@/components/from/select";
import { Col, Form, Row, Select } from "antd";
import Search from "antd/es/transfer/search";
import Image from "next/image";
const Page = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className="container mt-[60px]">
      <div className="relative">
        {/* Image */}
        <div className="absolute -top-[91px] sm:-top-[229px] left-1/2 transform -translate-x-1/2 z-40">
          <Image
            src="/images/cute-puppy.png"
            alt="test"
            width={553}
            height={397}
            className="sm:w-[397px] w-[200px] sm:h-[290px] object-fill"
          />
        </div>

        <FindPuppy title={'Says AKC Instend of Bully Mall'}>
          <Form layout="vertical" onFinish={(values) => console.log(values)}>
            <Row gutter={16} className="">
              <Col md={8} span={24}>
                <FormSelect
                  name={"breed"}
                  placeholder={"Select Breed"}
                  options={[
                    {
                      value: "jack",
                      label: "Jack (100)",
                    },
                    {
                      value: "lucy",
                      label: "Lucy (101)",
                    },
                  ]}
                />
              </Col>
              <Col md={8} span={24} className="mb-3 searchinput">
                <Search
                  placeholder="Enter ZIP, City, State"
                  onSearch={onSearch}
                  style={{
                    height: 56,
                  }}
                />
              </Col>
              <Col md={8} span={24}>
                <FormInput name={"age"} className="w-full"></FormInput>
              </Col>
            </Row>
            <div className="mb-[44px] mt-4 md:mt-6 flex justify-center items-center">
              <PrimaryButton
                text="Find Puppy"
                size=""
              />
            </div>
          </Form>
        </FindPuppy>
      </div>

      <PageTitle className={"mb-[60px] lg:mt-[140px] mt-20"} title="Bath Services" description="Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solumsat. Neceessitatibus sonet soluta, vim eu esse accusamus."></PageTitle>

      <h1 className="font-medium text-2xl mb-6  text-primary_text">Showing 1-9 of 846 results</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-[140px]">
        {[...Array(9)].map((data, index) => (
          <ServiceCard
            key={index} data={data}
          />
        ))}
      </div>
    </div>
  )
}

export default Page
