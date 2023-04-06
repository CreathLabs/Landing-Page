import React from "react";

const Mission = () => {
  return (
    <div className="contain">
      <div className="w-full flex flex-col space-y-4 xl:space-y-0 xl:flex-row items-center py-16 justify-between">
        <h1 className="heading !text-primary " data-aos="fade-right">
          Our Mission
        </h1>
        <h1
          className="max-w-[600px] text-center xl:text-left text-[17px] md:text-[24px] leading-[45px] "
          data-aos="fade-left"
          data-aos-delay={300}
        >
          To create secure, transparent and decentralised digital
          infrastructures which empowers individuals and businesses to control
          their assets and data.
        </h1>
      </div>
    </div>
  );
};

export default Mission;
