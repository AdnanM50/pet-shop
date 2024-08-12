"use client";
import { useState } from "react";
import UpperSection from "@/components/common/upperSection";
import { RiDeleteBinLine } from "react-icons/ri";
import { Space, Table, Input, Checkbox } from "antd";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Cart_button from "@/components/button/cart_button";

const ProductImage = ({ src, alt }) => (
  <div className=" w-fit bg-[#f4f4f4] rounded-[8px] p-4">
    <Image src={src} width={68} height={60} alt={alt} className="lg:w-[68px]  lg:h-[60px]"/>
  </div>
);
const Page = () => {
  // Static data list
  const [cartData, setCartData] = useState([
    {
      key: "1",
      image: <ProductImage src="/images/food.png" alt="product" />,
      Product: "Product 1",
      Type: "Type 1",
      Price: "$10",
      Quantity: 2,
      Total: "$20",
    },
    {
      key: "2",
      image: <ProductImage src="/images/food.png" alt="product" />,
      Product: "Product 2",
      Type: "Type 2",
      Price: "$15",
      Quantity: 1,
      Total: "$15",
    },
    {
      key: "3",
      image: <ProductImage src="/images/food.png" alt="product" />,
      Product: "Product 3",
      Type: "Type 3",
      Price: "$5",
      Quantity: 3,
      Total: "$15",
    },
  ]);

  const increaseQuantity = (key) => {
    const updatedCart = cartData.map((item) =>
      item.key === key ? { ...item, Quantity: item.Quantity + 1 } : item
    );
    setCartData(updatedCart);
  };

  const decreaseQuantity = (key) => {
    const updatedCart = cartData.map((item) =>
      item.key === key && item.Quantity > 1
        ? { ...item, Quantity: item.Quantity - 1 }
        : item
    );
    setCartData(updatedCart);
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "",
      dataIndex: "Product",
      key: "Product",
      render: (text) => (
        <p className="whitespace-pre text-secondary_text">{text}</p>
      ),
    },
    {
      title: "Type",
      dataIndex: "Type",
      key: "Type",
      render: (text) => (
        <p className="whitespace-pre text-secondary_text">{text}</p>
      ),
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
      render: (text) => (
        <p className="whitespace-pre text-secondary_text">{text}</p>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      key: "Quantity",
      render: (text, record) => (
        <div className="flex items-center justify-around border border-[#D9D9D9] rounded-[5px] text-[#515151]">
          <button
            onClick={() => decreaseQuantity(record.key)}
            className=" px-2 py-1 rounded-l border-r"
          >
            -
          </button>
          <span className="px-2">{text}</span>
          <button
            onClick={() => increaseQuantity(record.key)}
            className=" px-2 py-1 rounded-r border-l"
          >
            +
          </button>
        </div>
      ),
    },
    {
      title: "Total",
      dataIndex: "Total",
      key: "Total",
      render: (text) => (
        <p className="whitespace-pre text-secondary_text">{text}</p>
      ),
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space className="cursor-pointer" size="middle">
          <RiDeleteBinLine className="text-[20px]" style={{ color: "red" }} />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <UpperSection title="Shopping / Cart" curTitle="Shop" />
      <div className="container">
        <div className="py-[140px] flex lg:flex-nowrap flex-wrap xl:gap-[173px] lg:gap-[140px] gap-[40px]">
          <div className="bg-white p-3 custom-cart rounded-[10px] xl:w-[770px] lg:w-[600px] w-full">
            <div className="flex justify-between mb-[41px]">
              <h3 className="heading_text_2 !font-roboto font-bold">
                1 Items In Card
              </h3>
              <h3 className="heading_text_2 !font-roboto font-bold">
                Constitute
              </h3>
            </div>
            <Table
              className=" "
              columns={columns}
              dataSource={cartData}
              scroll={{ x: 250 }}
              scrollToFirstRowOnChange={true}
              pagination={false}
              rowHoverable={false}
            />
            <p className="text-lg font-bold mt-[31px] text-primary_text mb-[7px]">
              Apply Coupon
            </p>
            <div className="mb-[23px] max-w-[322px]">
              <Input
                placeholder="Enter coupon code"
                suffix={
                  <button className="bg-primary p-2 text-white rounded-full">
                    <FaArrowRight />
                  </button>
                }
              />
            </div>
          </div>

          <div className="bg-white px-[22px] pt-[19px] pb-9 rounded-[10px] h-fit max-w-[370px] ">
            <h3 className="heading_text_2 !font-roboto font-bold">
              Order Summary
            </h3>
            <hr className="h-[1px] w-full text-[#ebeced] mt-2" />
            <ul className="leading-[32px] mt-8 !font-roboto mb-12 ">
              <li className="flex justify-between items-center">
                <p>Subtotal</p>
                <span>$48.90</span>
              </li>
              <li className="flex justify-between items-center">
                <p>Discount</p>
                <span>$5.00</span>
              </li>
              <li className="flex justify-between items-center">
                <p>Shipping Charge</p>
                <span>$0.00</span>
              </li>
              <hr className="h-[1px] w-full text-[#ebeced] mt-2" />
              <li className="flex justify-between items-center text-lg font-bold leading-[26px]">
                <p>Total</p>
                <span>$43.90</span>
              </li>
            </ul>
            <Checkbox className="h-[18px] text-sm leading-4 text-[#938683] font-roboto">
              By placing your order, you agree with our company privacy policy
              and <span className="text-primary">condition</span> of use.
            </Checkbox>
            <Cart_button title="Proceed to checkout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
