import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamCard: React.FC<{
  person: { name: string; role: string; link: string; image: string };
}> = ({ person }) => {
  return (
    <div
      className="w-full h-full flex flex-col items-center space-y-6 md:space-y-8 "
      data-aos="fade-up"
    >
      <div className="relative h-[250px] w-[250px] rounded-full ">
        <Image
          src={person.image}
          fill
          className="w-full h-full rounded-full object-cover object-top "
          alt="team_member"
        />
      </div>
      <div className="flex flex-col space-y-1 md:space-y-2 items-center">
        <Link
          href={person.link}
          target="_blank"
          className="flex w-full justify-center items-center space-x-2 "
        >
          <Icon icon="mdi:linkedin" className=" !text-xl !md:text-2xl" />
          <h1 className="text-xl md:text-[22px] font-bold font-Playfair leading-[50px] ">
            {person.name}
          </h1>
        </Link>
        <h1 className="text-base md:text-lg leading-10 ">{person.role}</h1>
      </div>
    </div>
  );
};

export default TeamCard;
