"use client";
import UpperSection from "@/components/common/upperSection";
import { Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";

export default function UserLayout({ children }) {
  const page = usePathname();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // useEffect(() => {
  //   fetchProfile().then(({ error, data }) => {
  //     if (error === false && data?.user?.role === "user") {
  //       hideLoader();
  //       setUser(data?.user);
  //     } else {
  //       router.push("/login");
  //     }
  //   });
  // }, []);

  // const handleLogOut = () => {
  //   localStorage.removeItem("token");
  //   message.success("You have successfully logged out!!");
  //   router.push("/login");
  // };

  // if (!user) {
  //   return (
  //     <>
  //       <MainLoader />
  //     </>
  //   );
  // }

  return (
    <>
      <UpperSection title="Manage my Account" curTitle="Shop/cart" />
      <div className="container my-[140px]  mx-auto ">
        <div className="rounded-md  md:flex  mt-[46px] gap-6 ">
          <div onClick={showDrawer} className=" block lg:hidden">
            <TbLayoutSidebarRightCollapseFilled size={30} />
          </div>

          <div className="  rounded md:min-w-60 lg:block hidden lg:min-w-[312px] ">
            <h1 className="heading_text_2 !mb-7 !font-medium">
              Hello, Leton Nondi
            </h1>
            <Link href="/manage-account">
            <h1 className="heading_text_2  !font-medium">Manage My Account</h1>
            </Link>
            <ul className="mt-10  space-y-3 ">
              <li
                className={` ${
                  page === "/my-account"
                    ? " text-primary font-medium"
                    : " text-tertiary_text"
                }`}
              >
                <Link
                  className=" cursor-pointer"
                  href="/manage-account/my-account"
                >
                  <span className="font-medium text-base">My profile</span>
                </Link>
              </li>
              <li
                className={` ${
                  page === "/my-account/address-book"
                    ? " text-primary font-medium"
                    : " text-tertiary_text"
                }`}
              >
                <Link
                  className=" cursor-pointer"
                  href="/manage-account/address-book"
                >
                  <span className="font-medium text-base">Address Book</span>
                </Link>
              </li>
              <li
                className={` ${
                  page === "/my-account/my-Payment"
                    ? " text-primary font-medium"
                    : " text-tertiary_text"
                }`}
              >
                <Link
                  className=" cursor-pointer"
                  href="/manage-account/my-Payment"
                >
                  <span className="font-medium text-base">
                    MY Payment Options{" "}
                  </span>
                </Link>
              </li>
              <li
                className={` ${
                  page === "/my-account"
                    ? " text-primary font-medium"
                    : " text-tertiary_text"
                }`}
              >
                <Link
                  className=" cursor-pointer"
                  href="/manage-account/my-account"
                >
                  <span className="font-medium text-base">Vouchers</span>
                </Link>
              </li>
            </ul>
            <h1 className="heading_text_2 !font-medium mt-10">My Orders</h1>
            <ul className="mt-10  space-y-3 ">
              <li
                className={` ${
                  page === "/my-account"
                    ? " text-primary font-medium"
                    : " text-tertiary_text"
                }`}
              >
                <Link
                  className=" cursor-pointer"
                  href="/manage-account/my-account"
                >
                  <span className="font-medium text-base">My Returns</span>
                </Link>
              </li>
              <li
                className={` ${
                  page === "/my-account"
                    ? " text-primary font-medium"
                    : " text-tertiary_text"
                }`}
              >
                <Link
                  className=" cursor-pointer"
                  href="/manage-account/my-account"
                >
                  <span className="font-medium text-base">My Cancelations</span>
                </Link>
              </li>
            </ul>
            <h1 className="heading_text_2 !font-medium mt-10">My Reviews</h1>
            <h1 className="heading_text_2 !font-medium mt-10">Sell with Us</h1>
          </div>
          <Drawer title="Basic Drawer" onClose={onClose} open={open}>
            <div className=" md:min-w-60  lg:min-w-[312px] ">
              <h1 className="heading_text_2 !mb-7 !font-medium">
                Hello, Leton Nondi
              </h1>
              <Link href="/manage-account">
            <h1 className="heading_text_2 !font-medium">Manage My Account</h1>
            </Link>
              <ul className="mt-10  space-y-3 ">
                <li
                  className={` ${
                    page === "/my-account"
                      ? " text-primary font-medium"
                      : " text-tertiary_text"
                  }`}
                >
                  <Link
                    className=" cursor-pointer"
                    href="/manage-account/my-account"
                  >
                    <span className="font-medium text-base">My profile</span>
                  </Link>
                </li>
                <li
                  className={` ${
                    page === "/my-account/address-book"
                      ? " text-primary font-medium"
                      : " text-tertiary_text"
                  }`}
                >
                  <Link
                    className=" cursor-pointer"
                    href="/manage-account/address-book"
                  >
                    <span className="font-medium text-base">Address Book</span>
                  </Link>
                </li>
                <li
                  className={` ${
                    page === "/my-account/my-Payment"
                      ? " text-primary font-medium"
                      : " text-tertiary_text"
                  }`}
                >
                  <Link
                    className=" cursor-pointer"
                    href="/manage-account/my-Payment"
                  >
                    <span className="font-medium text-base">
                      MY Payment Options{" "}
                    </span>
                  </Link>
                </li>
                <li
                  className={` ${
                    page === "/my-account"
                      ? " text-primary font-medium"
                      : " text-tertiary_text"
                  }`}
                >
                  <Link
                    className=" cursor-pointer"
                    href="/manage-account/my-account"
                  >
                    <span className="font-medium text-base">Vouchers</span>
                  </Link>
                </li>
              </ul>
              <h1 className="heading_text_2 !font-medium mt-10">My Orders</h1>
              <ul className="mt-10  space-y-3 ">
                <li
                  className={` ${
                    page === "/my-account"
                      ? " text-primary font-medium"
                      : " text-tertiary_text"
                  }`}
                >
                  <Link
                    className=" cursor-pointer"
                    href="/manage-account/my-account"
                  >
                    <span className="font-medium text-base">My Returns</span>
                  </Link>
                </li>
                <li
                  className={` ${
                    page === "/my-account"
                      ? " text-primary font-medium"
                      : " text-tertiary_text"
                  }`}
                >
                  <Link
                    className=" cursor-pointer"
                    href="/manage-account/my-account"
                  >
                    <span className="font-medium text-base">
                      My Cancelations
                    </span>
                  </Link>
                </li>
              </ul>
              <h1 className="heading_text_2 !font-medium mt-10">My Reviews</h1>
              <h1 className="heading_text_2 !font-medium mt-10">
                Sell with Us
              </h1>
            </div>
          </Drawer>

          <div className=" mt-5 md:mt-0 w-full  bg-transparent rounded ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
