import Image from "next/image";
import React from "react";
import { Rate } from "antd";
import Link from "next/link";

const Page = () => {
  return (
    <div className="container">
      <div className="">
        <div className="flex justify-between">
          <button className="border border-primary text-primary rounded-full px-6 py-1 hover:bg-primary hover:text-white duration-300">
            Online
          </button>
          <Link href="/profile/edit-profile">
            <button className="border border-primary text-primary rounded-full px-6 py-1 hover:bg-primary hover:text-white duration-300">
              Edit Profile
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-10 mb-10">
          <div>
            <Image
              src={"/images/Ellipse2905.png"}
              alt="img"
              height={250}
              width={250}
            ></Image>
          </div>
          <div className="space-y-3">
            <p className="font-bold text-4xl">James Anderson</p>
            <p className="text-secondary_text text-2xl">Dog Trainer</p>
            <div className="flex items-center gap-2">
              <Rate allowHalf defaultValue={5} className="text-[#ffa58a]" />
              <p className="text-secondary_text text-lg">5 (125 reviews)</p>
            </div>
          </div>
        </div>
        <hr className="mb-6 border-primary"></hr>
        <div className="flex justify-between mb-10">
          <div className="space-x-2 space-y-1">
            <button className="border border-primary text-primary rounded-full px-6 py-1 hover:bg-primary hover:text-white duration-300">
              Contact Me
            </button>
            <button className="border border-primary text-primary rounded-full px-6 py-1 hover:bg-primary hover:text-white duration-300">
              Get a Quote
            </button>
          </div>
          <div>
            <button className="border border-primary text-primary rounded-full px-6 py-1 hover:bg-primary hover:text-white duration-300">
              Book a Consultation
            </button>
          </div>
        </div>
        <div className="bg-[#ffebe3] text-center text-secondary_text font-bold mb-10 p-10 space-y-5">
          <p className="text-4xl text-primary">About Me</p>
          <p className="uppercase pb-3">IN BUSINESS SINCE 2014</p>
          <p className="pb-3">
            We are a reward-based training company that offers private in-home
            training, as well as, group classes at The Pooch Palace in the
            beautiful, Alabama town of Cullman. For more information about us,
            visit our website, NamasteDogTraining.com, or find us on Facebook,
            Instagram, Tik Tok, and Youtube!
          </p>
          <p className="text-4xl text-primary">HOURS OF OPERATION</p>
          <div className="space-y-0 pb-10">
            <p>Tue: 8:30AM - 5:00PM</p>
            <p>Wed: 8:30AM - 5:00PM</p>
            <p>Thu: 8:30AM - 5:00PM</p>
            <p>Fri: 8:30AM - 5:00PM</p>
            <p>Sat: 9:00AM - 4:00PM</p>
          </div>
          <hr className="mb-10 border-primary"></hr>
          <p className="text-4xl text-primary py-5">My Services</p>
        </div>
        <div className="bg-[#ffebe3] text-center text-secondary_text font-bold p-10 space-y-1">
          <p className="text-4xl text-primary mb-5">Contact</p>
          <p>249 Upper Bailey RoadNewport, PA </p>
          <p>17074</p>
          <p>+1 456 245 4632</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
