import { truncate } from "@/helper";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  type: string;
  title: string;
  description: string;
  where: string;
  animation: string;
  delay?: number;
  id: number;
}

const Role: React.FC<Props> = ({
  type,
  title,
  description,
  where,
  animation,
  delay,
  id,
}) => {
  const router = useRouter();
  return (
    <div
      className="relative  rounded-[20px] bg-[#868686]/[22%] cursor-pointer "
      data-aos={animation}
      data-aos-delay={delay}
      onClick={() => router.push(`/company/careers/${id}`)}
    >
      <div className="absolute top-0 bottom-0 right-0 w-[31px] md:w-[50px] h-full  rounded-r-[20px] bg-[url('/side.svg')] bg-no-repeat bg-cover "></div>
      <div className="w-full p-4 md:p-6  flex flex-col space-y-4 md:space-y-6 pr-10 md:pr-32">
        <div className="px-[18px] flex justify-center w-[113px] md:w-[124px] bg-white/20 rounded-[10px] py-2 text-[13px] md:text-sm  ">
          {type}
        </div>
        <div className="flex space-x-3 items-center ">
          <h1 className="font-Playfair text-xl  md:text-[26px] leading-[50px] font-semibold  ">
            {title}
          </h1>
        </div>
        <div className="!mt-1 md:!mt-4">
          <p className="hidden md:block text-base md:text-xl  font-light !leading-10  ">
            {description}
          </p>
          <p className="md:hidden text-base md:text-xl  font-light !leading-10  ">
            {truncate(description, 48, 46)}
          </p>
        </div>
        <span className="text-primary font-Manrope text-xs  md:text-[15px] font-semibold  ">
          {where}
        </span>
      </div>
    </div>
  );
};

export default Role;
