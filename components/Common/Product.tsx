import { useRouter } from "next/router";
import React from "react";

interface Props {
  badge: string;
  name: string;
  about: string;
  soon: boolean;
  animation: string;
  delay?: number;
  link?: string;
}

const Product: React.FC<Props> = ({
  badge,
  name,
  about,
  soon,
  animation,
  delay,
  link,
}) => {
  const router = useRouter();
  return (
    <div
      className="relative cursor-pointer  rounded-[20px] bg-[#868686]/[22%] "
      data-aos={animation}
      data-aos-delay={delay}
      onClick={() => {
        if (!link) {
          return;
        }
        router.push(link);
      }}
    >
      <div className="absolute top-0 bottom-0 right-0 w-[31px] md:w-[50px] h-full  rounded-r-[20px] bg-[url('/side.svg')] bg-no-repeat bg-cover "></div>
      <div className="w-full p-4 md:p-6  flex flex-col space-y-4 md:space-y-6 pr-10 md:pr-32">
        <div className="px-[18px] flex justify-center w-[120px] md:w-[124px] bg-white/20 rounded-[10px] py-2 text-[13px] md:text-sm  ">
          {badge}
        </div>
        <div className="flex space-x-3 items-center ">
          <h1 className="font-Playfair text-xl  md:text-[26px] leading-[50px] font-semibold  ">
            {name}
          </h1>
          {soon && (
            <span className="text-primary hidden md:block whitespace-nowrap  font-Manrope text-sm font-semibold  ">
              Coming soon
            </span>
          )}
        </div>
        <div className="!mt-1 md:!mt-4">
          <p className=" text-base md:text-xl  font-light !leading-10  ">
            {about}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
