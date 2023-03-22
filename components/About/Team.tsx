import React from "react";
import TeamCard from "../Common/TeamCard";

const Team: React.FC<{ limit: number }> = ({ limit }) => {
  return (
    <div className="contain" data-aos="fade-up" id="teams">
      <div className="pt-10 pb-16 space-y-16 flex flex-col items-center  ">
        <h1 className="heading">Meet The Team</h1>
        <div className="grid gris-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-x-16 gap-y-10 md:gap-y-20 ">
          {[...Array(8)].slice(0, limit).map((_, index) => (
            <TeamCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
