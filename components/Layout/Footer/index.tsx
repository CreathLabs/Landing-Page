import { footerLinks } from "@/data";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import SubLogo from "../../../public/SubLogo.svg";

const Footer = () => {
  return (
    <div className="contain pt-10 space-y-16 !mt-10 ">
      {/* head */}
      <div className="w-full flex flex-col items-center space-y-1">
        <h1 className=" font-semibold text-[22px] md:text-3xl font-Playfair leading-[45px] ">
          Creath Innovations
        </h1>
        <h3 className=" text-[17px] md:text-xl font-light leading-[45px] ">
          {" "}
          Creativity meets Innovation
        </h3>
      </div>
      {/* body */}
      <div className="w-full space-y-6">
        <div className="grid grid-cols-3 justify-center divide-x divide-white/20 border-b border-white/20 ">
          <div className="flex justify-center ">
            <h1 className=" font-Playfair text-xl leading-[45px] font-semibold py-5  ">
              Products
            </h1>
          </div>
          <div className="flex justify-center">
            <h1 className=" font-Playfair text-xl leading-[45px] font-semibold py-5  ">
              Company
            </h1>
          </div>
          <div className="flex justify-center">
            <h1 className=" font-Playfair text-xl leading-[45px] font-semibold py-5  ">
              Resources
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-3  ">
          <div className="flex w-full flex-col justify-start">
            <div className="space-y-6 pl-[174px]">
              {footerLinks.products.map((item, index) => (
                <h1
                  key={index}
                  className=" cursor-pointer hover:text-white/90 w-fit font-Manrope text-lg leading-[45px] font-medium  text-gray  "
                >
                  {item.name}
                </h1>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col justify-start">
            <div className="space-y-6 pl-[174px]">
              {footerLinks.company.map((item, index) => (
                <h1
                  key={index}
                  className=" cursor-pointer hover:text-white/90  w-fit font-Manrope text-lg leading-[45px] font-medium  text-gray  "
                >
                  {item.name}
                </h1>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col justify-start">
            <div className="space-y-6 pl-[174px]">
              {footerLinks.resources.map((item, index) => (
                <h1
                  key={index}
                  className=" cursor-pointer hover:text-white/90 w-fit font-Manrope text-lg leading-[45px] font-medium  text-gray  "
                >
                  {item.name}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center ">
        <div>
          <Image src={SubLogo} alt="" />
        </div>

        <div className="flex space-x-9 items-center">
          <Icon
            width={20}
            height={20}
            icon="ant-design:instagram-filled"
            className="cursor-pointer"
          />
          <Icon
            width={20}
            height={20}
            icon="ant-design:twitter-outline"
            className="cursor-pointer"
          />
          <Icon
            width={20}
            height={20}
            icon="dashicons:linkedin"
            className="cursor-pointer"
          />
          <Icon
            width={20}
            height={20}
            icon="bi:discord"
            className="cursor-pointer"
          />
          <Icon
            width={20}
            height={20}
            icon="carbon:logo-medium"
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10 pb-8 w-full !mt-0 ">
        <h1 className="text-center !font-light ">
          {" "}
          © 2022 Creath. All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
