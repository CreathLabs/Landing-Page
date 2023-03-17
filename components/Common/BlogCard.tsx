import Image from "next/image";
import React, { useState } from "react";

const BlogCard = () => {
  const [hoverd, setHovered] = useState(false);
  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className=" relative w-full h-[293px] md:h-[434px] overflow-hidden rounded-[10px] cursor-pointer "
    >
      <Image
        src="https://res.cloudinary.com/dk6uhtgvo/image/upload/v1678915136/Rectangle_11_gmgywo.png"
        fill
        className={`object-cover transition-all ease-in-out duration-500 ${
          hoverd ? "scale-105" : ""
        } `}
        alt="Blog_image"
      />
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full blog_overlay flex items-end px-3 md:px-6 ">
        <div className=" md:py-4 flex flex-col space-y-3 md:space-y-4 ">
          <h1 className=" font-Playfair text-xl md:text-[27px] font-semibold ">
            What are NFTS
          </h1>
          <h3 className=" text-base md:text-xl font-light leading-[28px] md:leading-[40px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,tur
            adipiscing elit,
          </h3>
          <h4 className=" text-sm md:text-lg text-primary font-semibold md:leading-[45px] ">
            April 09, 2022
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
