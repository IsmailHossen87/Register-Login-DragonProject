import React from "react";
import Header from "../Header/Header";
import LeatestTime from "../LeateastTime/LeatestTime";
import Navbar from "../Navbar/Navbar";
import LeftNavbar from "../LeftNavbar/LeftNavbar";
import RightNavbar from "../RightNavbar/RightNavbar";
import { Outlet } from "react-router-dom";

const HomeLayOut = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <LeatestTime></LeatestTime>
      <nav>
        <Navbar></Navbar>
      </nav>
      <section className="grid md:grid-cols-12 mt-6">
        <div className="col-span-3">
          <LeftNavbar></LeftNavbar>
        </div>
        <div className="col-span-6"><Outlet></Outlet></div>
        <div className="col-span-3">
          <RightNavbar></RightNavbar>
        </div>
      </section>
    </div>
  );
};

export default HomeLayOut;
