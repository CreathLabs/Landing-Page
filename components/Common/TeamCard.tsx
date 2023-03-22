import Image from "next/image";
import React from "react";

const TeamCard = () => {
  return (
    <div
      className="w-full h-full flex flex-col space-y-6 md:space-y-12 "
      data-aos="fade-up"
    >
      <div className="relative h-[250px] md:h-[279px] w-full rounded-[20px] ">
        <Image
          src="https://res.cloudinary.com/dk6uhtgvo/image/upload/v1679368291/Person_xxyebx.png"
          fill
          className="w-full h-full rounded-[20px] object-cover object-center "
          alt="team_member"
        />
      </div>
      <div className="flex flex-col space-y-1 md:space-y-2 items-center">
        <h1 className="text-xl md:text-[22px] font-bold font-Playfair leading-[50px] ">
          Maverick Banjo
        </h1>
        <h1 className="text-base md:text-lg leading-10 ">
          PM, Creath Innovations
        </h1>
      </div>
    </div>
  );
};

export default TeamCard;
