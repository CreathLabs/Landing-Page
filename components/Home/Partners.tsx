import Image from "next/image";
import React from "react";

const arr = [1, 2, 3, 4, 5, 6, 9, 10, 11, 12];

const Partners = () => {
  return (
    <div className="pt-8 pb-14 contain space-y-11 flex flex-col items-center ">
      <h1 className=" text-[22px] md:text-3xl font-Playfair  ">Our Partners</h1>
      <div className="flex w-full max-w-[1155px] mx-auto justify-between space-x-10 items-center scroller overflow-x-auto">
        {arr.map((item) => (
          <div
            key={item}
            className=" min-w-[98px] md:min-w-[154px] relative h-[65px] md:h-[102px]  "
          >
            <Image
              src="https://res.cloudinary.com/dk6uhtgvo/image/upload/v1678713100/image_8_rziquf.png"
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
