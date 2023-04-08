import Image from "next/image";
import React from "react";

const arr = [1, 2, 3, 4, 5, 6, 9, 10, 11, 12];

const partners = [
  {
    logo: "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1680962970/Sportrex_White_apxym2.png",
    link: "",
  },
  {
    logo: "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1680962970/WhatsApp_Image_2023-04-07_at_6.28.51_PM_d1ohcu.jpg",
    link: "",
  },
];

const Partners = () => {
  return (
    <div className="pt-8 pb-14 contain space-y-11 flex flex-col items-center ">
      <h1 className=" text-[22px] md:text-3xl font-Playfair  ">Our Partners</h1>
      <div className="flex w-full max-w-[1155px] mx-auto justify-center space-x-10 items-center scroller overflow-x-auto">
        {partners.map((item, index) => (
          <div
            key={index}
            className=" max-w-[98px] md:min-w-[154px] relative h-[65px] md:h-[85px]  "
          >
            <Image
              src={item.logo}
              fill
              className=" object-contain "
              alt="Partner"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
