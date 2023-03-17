import { footerLinks } from "@/data";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import SubLogo from "../../../public/SubLogo.svg";

const Footer = () => {
  return (
    <div className="contain pt-10 space-y-12 lg:space-y-16 !mt-10 ">
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
      <div className="w-full">
        <div className="grid grid-cols-1 gap-y-6 lg:gap-y-0 lg:grid-cols-3 w-full">
          {/* Products */}

          <div className="w-full space-y-2 md:space-y-8 ">
            <div className="border-b lg:border-r border-white/20 py-3 lg:py-5 flex lg:pl-[80px] xl:pl-[140px] ">
              <h1 className="footer_heading">Products</h1>
            </div>
            {footerLinks.products.map((item, index) => (
              <div key={index} className=" lg:pl-[80px] xl:pl-[140px]">
                <h1 className=" footer_links ">{item.name}</h1>
              </div>
            ))}
          </div>

          {/* Comapany */}

          <div className="w-full space-y-2 md:space-y-8 ">
            <div className="border-b lg:border-r border-white/20 py-3 lg:py-5 flex lg:pl-[120px] xl:pl-[164px]">
              <h1 className="footer_heading">Company</h1>
            </div>
            {footerLinks.company.map((item, index) => (
              <div key={index} className="lg:pl-[120px] xl:pl-[164px]">
                <h1 className=" footer_links ">{item.name}</h1>
              </div>
            ))}
          </div>

          {/* Resources */}

          <div className="w-full space-y-2 md:space-y-8 ">
            <div className="border-b  border-white/20 py-3 lg:py-5 flex lg:pl-[90px] xl:pl-[160px]">
              <h1 className="footer_heading">Resources</h1>
            </div>
            {footerLinks.resources.map((item, index) => (
              <div key={index} className="lg:pl-[90px] xl:pl-[160px]">
                <h1 className=" footer_links ">{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row space-y-16 lg:space-y-0  lg:justify-between items-center ">
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
        <h1 className="text-center text-sm md:text-base !font-light ">
          {" "}
          © 2022 Creath. All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
