import { Icon } from "@iconify/react";
import React from "react";

interface Props {
  title: string;
  body: string;
  icon: string;
  rotate?: string;
}

const Service: React.FC<Props> = ({ title, body, icon, rotate }) => {
  return (
    <article
      className="w-full cursor-pointer relative bg-secondaryTwo space-y-3 px-3 md:px-6 flex flex-col items-center rounded-[20px] pt-14 pb-5 "
      data-aos="fade-up"
    >
      <h1 className="font-Playfair text-xl text-center font-semibold leading-[50px] ">
        {title}
      </h1>
      <p className="text-center text-base md:text-lg  font-light leading-10 ">
        {body}
      </p>

      <div className="absolute w-full left-0 right-0 -top-[46px] flex justify-center">
        <div className=" w-[64px] h-[64px] md:w-[80px] md:h-[80px] rounded-full bg-primary flex justify-center items-center ">
          <Icon
            icon={icon}
            className={`text-black text-3xl ${rotate ? rotate : "  "} `}
          />
        </div>
      </div>
    </article>
  );
};

export default Service;
