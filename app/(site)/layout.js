import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="bg-light">
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
}
