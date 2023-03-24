import { roles } from "@/data";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Common/Button";

const Details = () => {
  const router = useRouter();

  const id: number = Number(router.query.id);

  const role = roles.find((item) => item.id === id);

  return (
    <div className="contain">
      <div className="pt-20 pb-14 space-y-8 ">
        <h3 className="text-lg text-gray font-semibold ">April 09, 2022</h3>
        <div className="w-full h-full space-y-14 ">
          <div className="w-full flex justify-between items-center ">
            <h1 className="heading !text-[35px] ">What are NFTS</h1>
            <Button text="Apply Now" px="px-11" />
          </div>

          <div className="w-full h-full space-y-10 ">
            <div className="w-full h-[434px] contrast-125 relative ">
              <Image
                src="https://res.cloudinary.com/dk6uhtgvo/image/upload/v1678915136/Rectangle_11_gmgywo.png"
                fill
                className={`object-cover rounded-[10px] `}
                alt="Blog_image"
              />
            </div>
            <div className="w-full h-full space-y-6 ">
              {/* <h1 className="sub_heading">Lorem ipsum dolor </h1> */}
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
      </div>
    </div>
  );
};

export default Details;
