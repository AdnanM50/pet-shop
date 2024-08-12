"use client";
import UpperSection from "@/components/common/upperSection";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { PiPawPrintFill } from "react-icons/pi";
import { FcServices } from "react-icons/fc";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import { Drawer } from "antd";
import { usePathname } from "next/navigation";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const path = usePathname();
  const [activeKey, setActiveKey] = useState("1");

  const items = [
    {
      key: "1",
      label: "Profile",
      link: "/profile",
      icon: <FaUser />,
    },
    {
      key: "2",
      label: "Services",
      link: "/profile/services",
      icon: <PiPawPrintFill />,
    },
    {
      key: "3",
      label: "Puppys",
      link: "/profile/puppys",
      icon: <FcServices />,
    },
    {
      key: "4",
      label: "Products",
      link: "/profile/products",
      icon: <MdOutlineProductionQuantityLimits />,
    },
    {
      key: "5",
      label: "Reviews",
      link: "/profile/reviews",
      icon: <FaStarHalfAlt />,
    },
  ];

  const outerContainer =
    path.split("/").includes("add") || path.split("/").includes("edit-profile");
  return (
    <>
      <UpperSection title="Add Puppy" curTitle="add-puppy" />
      <div className="container">
        <div
          className={`${
            outerContainer ? "" : "md:flex items-start gap-5"
          } section-gap`}
        >
          <div onClick={showDrawer} className="md:hidden block">          
            <TbLayoutSidebarRightCollapseFilled size={30} />
          </div>
          {!outerContainer && (
            <div className="hidden md:block w-[25%] ">
              <h1 className="heading_text">Dashboard</h1>
              <div className="flex flex-col mt-5 space-y-3">
                {items.map((item, index) => (
                  <Link
                    key={index}
                    onClick={() => setActiveKey(item.key)}
                    href={item?.link}
                    className={`${
                      activeKey == item?.key
                        ? "!text-primary"
                        : "!text-secondary_text"
                    }`}
                  >
                    <div className={`flex gap-3 items-center`}>
                      <div>{item?.icon && item?.icon}</div>
                      <h1>{item?.label}</h1>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <Drawer title="Basic Drawer" onClose={onClose} visible={open}>
            <div className="w-[25%]">
              <h1 className="heading_text">Dashboard</h1>
              <div className="flex flex-col mt-5 space-y-3">
                {items.map((item, index) => (
                  <Link
                    key={index}
                    onClick={() => setActiveKey(item.key)}
                    href={item?.link}
                    className={`${
                      activeKey == item?.key
                        ? "!text-primary"
                        : "!text-secondary_text"
                    }`}
                  >
                    <div className={`flex gap-3 items-center`}>
                      <div>{item?.icon && item?.icon}</div>
                      <h1>{item?.label}</h1>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Drawer>
          <div
            className={`${
              outerContainer ? "w-full" : "w-full md:w-[75%]"
            } mt-12 md:mt-0`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
