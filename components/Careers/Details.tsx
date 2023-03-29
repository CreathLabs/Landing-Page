import { roles } from "@/data";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Common/Button";

const Details = () => {
  const router = useRouter();

  const id: number = Number(router.query.id);

  const role = roles.find((item) => item.id === id);

  return (
    <div className="contain">
      <div className=" pt-28 md:pt-20 pb-14 space-y-6 md:space-y-8 ">
        <h3 className="text-base md:text-lg text-gray font-semibold ">
          {role?.where}
        </h3>
        <div className="w-full h-full space-y-12 md:space-y-14 ">
          <div className="w-full flex justify-between items-center ">
            <h1 className="heading !text-[25px] md:!text-[35px] ">
              {role?.title}
            </h1>
            <div className="hidden md:block w-fit ">
              <Button text="Apply Now" px="px-11" />
            </div>
          </div>

          <div className="w-full h-full space-y-10 ">
            <div className="w-full h-full space-y-6 ">
              <h1 className="sub_heading">Lorem ipsum dolor </h1>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,tur
                adipiscing elit,Lorem ipsum dolor sit amet, consectetur
                adipiscing elit,tur adipiscing elit,Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,tur adipiscing elit,Lorem ipsum
                dolor sit amet, consectetur adipiscing elit,tur adipiscing
                elit,Lorem ipsum dolor sit amet, you can be canada, ca
                consectetur adipiscing elit,tur adipiscing elit,Lorem ipsum
                dolor sit amet, consectetur adipiscing elit,tur adipiscing
                elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,tur
                adipiscing elit,Lorem ipsum dolor sit amet, consectetur
                adipiscing elit,tur adipiscing elit,Lorem ipsum dolor sit amet,
                consectetur adipiscingnad elit,tur adipiscing elit,Lorem ipsum
                dolor sit amet, consectetur adipiscing elit,tur adipiscing
                elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,tur
                adipiscing elit,
              </p>
            </div>
            <div className="w-full h-full space-y-6 ">
              <h1 className="sub_heading">Lorem ipsum dolor </h1>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,tur
                adipiscing elit, Lorem ipsum dolor sit amet, consectetur
                adipiscing elit,tur adipiscing elit, Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,tur adipiscing elit,Lorem ipsum
                dolor sit amet, consectetur adipiscing elit,tur adipiscing
                elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,tur
                adipiscing elit,Lorem ipsum dolor sit amet, consectetur
                adipiscing elit,tur adipiscing, you can be canada elit,Lorem
                ipsum dolor sit amet, consectetur adipiscing elit,tur adipiscing
                elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,tur
                adipiscing elit,Lorem ipsum dolor sit amet, consectetur
                adipiscing elit,tur adipiscing elit,Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,tur adipiscing elit,Lorem ipsum
                dolor sit amet, consectetur adipiscing elit,tur adipiscing elit,
              </p>
            </div>
            <div className="w-full h-full space-y-6 ">
              <h1 className="sub_heading">Lorem ipsum dolor </h1>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,tur
                adipiscing elit,Lorem ipsum dolor sit amet, consectetur
                adipiscing elit,tur adipiscing elit,Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,tur adipiscing elit,Lorem ipsum
                dolor sit amet, consectetur adipiscing elit,tur adipiscing
                elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,tur
                adipiscing elit,Lorem ipsum dolor sit amet, consectetur
                adipiscing elit,tur adipiscing elit,Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,tur adipiscing elit,Lorem ipsum
                dolor sit amet, consectetur adipiscing elit,tur adipiscing
                elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,tur
                adipiscing elit,Lorem ipsum dolor sit amet, consectetur
                adipiscing elit,tur adipiscing elit,Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,tur adipiscing elit,
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:hidden !mt-20 ">
          <Button text="Apply Now" />
        </div>
      </div>
    </div>
  );
};

export default Details;
