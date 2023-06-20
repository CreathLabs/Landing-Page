import { team } from "@/data";
import React from "react";
import TeamCard from "../Common/TeamCard";

const Team: React.FC<{ limit: number }> = ({ limit }) => {
  return (
    <div className="contain" data-aos="fade-up" id="team">
      <div className="pt-10 pb-16 space-y-16 flex flex-col items-center  ">
        <h1 className="heading">Meet The Team</h1>
        <div className="grid gris-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-x-12 gap-y-10 md:gap-y-20 ">
          {team.slice(0, limit).map((person, index) => (
            <TeamCard key={index} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
