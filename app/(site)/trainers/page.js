"use client";

import Image from "next/image";
import { Col, Form, Row, Select } from "antd";
import Search from "antd/es/transfer/search";
import FormSelect from "@/components/from/select";
import PrimaryButton from "@/components/button/primary_button";
import ServiceCard from "@/components/card/serviceCard";
import FindPuppy from "@/components/common/findPuppy";
import FormInput from "@/components/from/input";
import PageTitle from "@/components/common/pageTitle";
const Page = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);


    const serviceData = [
        {
          imageSrc: "/images/test_card_img.png",
          heading: "Dog Walking",
          address: "1234 Main St, New York, NY 10001",
          subheading: "Meal/Female available 15 weeks old",
        },
        {
          imageSrc: "/images/test_card_img.png",
          heading: "Pet Sitting",
          address: "5678 Elm St, Los Angeles, CA 90001",
          subheading: "Meal/Female available 15 weeks old",
        },
        {
          imageSrc: "/images/test_card_img.png",
          heading: "Veterinary Care",
          address: "1213 Maple St, Houston, TX 70001",
          subheading: "Meal/Female available 15 weeks old",
        },
        {
          imageSrc: "/images/test_card_img.png",
          heading: "Grooming Services",
          address: "1213 Maple St, Houston, TX 70001",
          subheading: "Meal/Female available 15 weeks old",
        },
        {
          imageSrc: "/images/test_card_img.png",
          heading: "Training Classes",
          address: "1415 Pine St, Philadelphia, PA 80001",
          subheading: "Meal/Female available 15 weeks old",
        },
        {
          imageSrc: "/images/test_card_img.png",
          heading: "Pet Transport",
          address: "1617 Cedar St, Phoenix, AZ 85001",
          subheading: "Meal/Female available 15 weeks old",
        },
        {
          imageSrc: "/images/test_card_img.png",
          heading: "Boarding Facilities",
          address: "1819 Birch St, San Antonio, TX 90001",
          subheading: "Meal/Female available 15 weeks old",
        },
        {
          imageSrc: "/images/test_card_img.png",
          heading: "Pet Photography",
          address: "2021 Spruce St, San Diego, CA 92001",
          subheading: "Meal/Female available 15 weeks old",
        },
        {
          imageSrc: "/images/test_card_img.png",
          heading: "Pet Supplies",
          address: "2223 Oak St, Dallas, TX 95001",
          subheading: "Meal/Female available 15 weeks old",
        },
        {
          imageSrc: "/images/test_card_img.png",
          heading: "Pet Insurance",
          address: "2425 Maple St, San Jose, CA 94001",
          subheading: "Meal/Female available 15 weeks old",
        },
      ];
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
            <Row gutter={16} className="searchinput">
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
              <Col md={8} span={24} className="mb-3">
                <Search
                  placeholder="Enter ZIP, City, State"
                  onSearch={onSearch}
                  style={{
                    height:70,
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


      <PageTitle className={"mb-[60px] lg:mt-[140px] mt-20"} title="Trainers" description="Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solumsat. Neceessitatibus sonet soluta, vim eu esse accusamus."></PageTitle>

      <h1 className="font-medium text-2xl mb-6  text-primary_text">Showing 1-9 of 846 results</h1>

<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-[140px]">
  {serviceData.map((data, index) => (
    <ServiceCard
      key={index} data={data}
    />
  ))}
</div>
    </div>
  )
}

export default Page
