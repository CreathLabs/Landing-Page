import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const EventCard = () => {
  const [hoverd, setHovered] = useState(false);

  const router = useRouter();
  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      //   onClick={() => router.push(`/blogs/12`)}
      className=" relative w-full h-[293px] md:h-[434px] overflow-hidden rounded-[10px] cursor-pointer "
    >
      <Image
        src="https://res.cloudinary.com/dk6uhtgvo/image/upload/v1679643203/events_civg2s.png"
        fill
        className={`object-cover rounded-[10px] transition-all  ease-in-out duration-500 ${
          hoverd ? "scale-105" : ""
        } `}
        alt="Blog_image"
      />
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full blog_overlay flex items-end px-3 md:px-6 ">
        <div className=" md:py-4 flex flex-col space-y-3 md:space-y-4 ">
          <h1 className=" font-Playfair text-xl md:text-[27px] font-semibold ">
            Lagos Fashion Week
          </h1>
          <div>
            <h3 className=" text-base md:text-lg font-light leading-[28px] md:leading-[45px] ">
              Location:{" "}
              <span className="font-normal"> 26 Wase Road, Kubwa. Abuja</span>
            </h3>
            <h3 className=" text-base md:text-lg font-light ">
              Gate Fee: <span className="font-normal"> 10,000</span>
            </h3>
          </div>

          <h4 className=" text-sm md:text-lg text-primary font-semibold md:leading-[45px] ">
            April 09, 2022
          </h4>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
