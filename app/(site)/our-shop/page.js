"use client";
import ProductCard from "@/components/card/productCard";
import UpperSection from "@/components/common/upperSection";
import { Collapse, Radio } from "antd";

const Page = () => {

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
    const items = [
        {
            key: '1',
            label: <h1 className="font-medium text-2xl text-secondary_text">Category</h1>,
            children: <p>{text}</p>,
        },
        {
            key: '2',
            label: <h1 className="font-medium text-2xl text-secondary_text">Brand</h1>,
            children: <p>{text}</p>,
        },
        {
            key: '3',
            label: <h1 className="font-medium text-2xl text-secondary_text">Health Consideration</h1>,
            children: <div>
                <Radio.Group className="flex flex-col space-y-3">
                    <Radio value="a">A</Radio>
                    <Radio value="b">B</Radio>
                    <Radio value="c">C</Radio>
                    <Radio value="d">D</Radio>
                </Radio.Group>
            </div>,
        },
        {
            key: '4',
            label: <h1 className="font-medium text-2xl text-secondary_text">Flavor</h1>,
            children: <p>{text}</p>,
        },
        {
            key: '5',
            label: <h1 className="font-medium text-2xl text-secondary_text">High Protein</h1>,
            children: <p>{text}</p>,
        },
        {
            key: '5',
            label: <h1 className="font-medium text-2xl text-secondary_text">Price Range</h1>,
            children: <p>{text}</p>,
        }
    ];

    return (
        <div>
            <UpperSection title="Our Shop" curTitle="Shop" />
            <div className="container">
                <div className="my-[140px]">
                    <div className="w-full lg:flex items-start justify-center gap-10">
                        <div className="lg:w-[30%] w-full shop-filter">
                            <h1 className="heading_text border-b pb-1">Product</h1>
                            <button className="mt-[14px] leading-7  md:text-[24px] text-lg font-medium text-tertiary_text">Reset</button>

                            <div>
                                <Collapse defaultActiveKey={['1']} ghost items={items} />
                            </div>
                        </div>
                        <div className="lg:w-[70%] w-full">
                            <div className="grid gap-6 lg:grid-cols-2">
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Page;