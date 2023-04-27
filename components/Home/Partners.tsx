import Image from "next/image";
import Link from "next/link";
import React from "react";

const partners = [
  {
    logo: "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1681110380/Brokenegg_Logo_White_2_pheyhy.png",
    link: "https://www.brokenegg.io",
  },
  {
    logo: "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1681110380/Sportrex_logo_and_logo_mark_white_1_dmqso0.png",
    link: "https://www.sportrex.io",
  },
];

const Partners = () => {
  return (
    <div className="pt-8 pb-14 contain space-y-11 flex flex-col items-center ">
      <h1 className=" text-[22px] md:text-3xl font-Playfair  ">Our Partners</h1>
      <div className="flex w-full max-w-[1155px] mx-auto justify-center space-x-10 items-center scroller overflow-x-auto">
        {partners.map((item, index) => (
          <Link
            href={item.link}
            target="_blank"
            key={index}
            className=" w-full max-w-[145px]  md:max-w-[180px] relative h-[65px] md:h-[90px]  "
          >
            <Image
              src={item.logo}
              fill
              className=" object-contain "
              alt="Partner"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Partners;
