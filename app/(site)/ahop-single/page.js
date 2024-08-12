"use client";

import UpperSection from "@/components/common/upperSection";
import Image from "next/image";
import { Flex, Rate, Row, Col } from "antd";
import FormSelect from "@/components/from/select";
import PrimaryButton from "@/components/button/primary_button";
import { FcLike } from "react-icons/fc";
import FoodCard from "@/components/card/foodCard";
import GallerySlider from "@/components/common/gallerySlider";

const Page = () => {
  const items = [
    "/images/test_card_img.png",
    "/images/health.png",
    "/images/test_card_img.png",
    "/images/health.png",
    "/images/test_card_img.png",
  ];
  const style = { color: "#FF5C2C", cursor: "pointer", marginTop: "26px" };
  return (
    <div>
      <UpperSection title="Ahop Single" curTitle="Ahop Single" />
      <div className="container">
        <div className="my-[140px]">
          <div className="lg:grid lg:grid-cols-2 lg:gap-[128px]">
            <div>
              <GallerySlider items={items}></GallerySlider>
            </div>

            <div className="mt-20 lg:mt-0">
              <h1 className=" heading_text_1 !leading-10">
                ACANA Singles Grain Free Limited Ingredient Diet Duck and Pear
                Formula Dog reats
              </h1>
              <p className="mt-[24px] text-tertiary_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse
              </p>
              <h1 className="mt-[52px]">by NexGard</h1>
              <h1 className="mt-2">SKU: 0984504</h1>
              <div className=" my-6">
                <Flex gap="middle" vertical>
                  <Flex gap="middle">
                    <Rate defaultValue={3} />
                    <span>allowClear: true</span>
                  </Flex>
                </Flex>
              </div>
              <h1>
                <span>$22.99</span>- $12.99
              </h1>
              <Row gutter={24}>
                <Col md={16} span={24} className="mb-3 selector2 ">
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
              </Row>
              <h2>$9.99</h2>
              <div className="flex flex-wrap space-x-3 space-y-3 md:justify-between">
                <button className="border-2 rounded-full border-primary justify-center items-center lg:px-[79px] md:px-16 md:py-6 sm:px-14 sm:py-3 px-8 py-3 flex lg:py-[18px] space-x-6">
                  <span className="text-primary font-normal text-sm fredoka">
                    -
                  </span>
                  <span className="text-primary font-normal text-sm fredoka">
                    1
                  </span>
                  <span className="text-primary font-normal text-sm fredoka">
                    +
                  </span>
                </button>
                <PrimaryButton className="">Add to Cart</PrimaryButton>
                <FcLike size={24} style={style} />
              </div>
            </div>
          </div>

          <div className="grid my-[140px] lg:grid-cols-3 gap-y-6 gap-x-6">
            <FoodCard />
            <FoodCard />
            <FoodCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
