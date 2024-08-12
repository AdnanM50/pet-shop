"use client";
import React from "react";
import ServiceCard from "@/components/card/serviceCard";
import Image from "next/image";
import { Col, Form, Row, Select } from "antd";
import Search from "antd/es/transfer/search";
import PrimaryButton from "@/components/button/primary_button";
import FormSelect from "@/components/from/select";
import FindPuppy from "@/components/common/findPuppy";
import FormInput from "@/components/from/input";
import PageTitle from "@/components/common/pageTitle";
import BreedCard from "@/components/card/breedCard";
const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

const page = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className="container mt-[60px]">
      <FindPuppy title={"Our Bully Mall dog sellers  lists puppies from AKC registered litters so you can choose a breeder with confidence"}>
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
            <Col md={4} span={24} className="mb-3 searchinput">
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
            <Col md={4} span={24}>
              <FormSelect></FormSelect>
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

      <PageTitle className={"mb-[60px] lg:mt-[140px] mt-20"} title="Puppy Services" description="Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solumsat. Neceessitatibus sonet soluta, vim eu esse accusamus."></PageTitle>

      <h1 className="font-medium text-2xl text-primary_text mb-6">Showing 1-9 of 846 results</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-[140px]">
        {[...Array(9)].map((data, index) => (
          <ServiceCard
            key={index} data={data}
          />
        ))}
      </div>

      <PageTitle title="Explore other Breeds" description="Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum sat. Neceessitatibus sonet soluta,"></PageTitle>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[65px] mt-8">
        {[...Array(4)].map((data, index) => (
          <BreedCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default page;
