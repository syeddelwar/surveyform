"use client";

import Image from "next/image";
import React from "react";

import logo from "../../assets/logo.png";

const LeftHeading = ({ setFromData, formData }) => {
  return (
    <>
      <div className=" w-full flex flex-col justify-center pl-3 lg:pl-[8%] ">
        <Image className="w-[20%]" src={logo} alt="" />
        <h2 className="font-semibold mb-5">Your satisfiction form</h2>
        <h2 className="font-bold text-3xl mb-5">
          Please Take <span className="text-purple-950">Survey</span>{" "}
        </h2>
        <p className="text-gray-500  mb-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="">
          <form>
            <input
              onChange={(e) =>
                setFromData({ ...formData, name: e.target.value })
              }
              className="py-[13px] px-6 border-2 border-gray-300 rounded-sm lg:w-[40%] outline-none text-sm placeholder-gray-500 placeholder-medium block mb-5 "
              type="text"
              placeholder="Enter your Name"
              required
            />

            <input
              onChange={(e) =>
                setFromData({ ...formData, email: e.target.value })
              }
              className="py-[13px] px-6 border-2 border-gray-300 rounded-sm lg:w-[40%] outline-none text-sm placeholder-gray-500 placeholder-medium block mb-10"
              type="email"
              placeholder="Enter your Email"
              required
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default LeftHeading;
