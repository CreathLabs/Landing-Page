import React from "react";

const Vision = () => {
  return (
    <div className="contain">
      <div className="w-full flex flex-col space-y-4 xl:space-y-0 xl:flex-row items-center py-28 justify-between">
        <h1 className="heading !text-primary " data-aos="fade-right">
          Our Vision
        </h1>
        <h1
          className="max-w-[600px] text-center xl:text-left text-[17px] md:text-[24px] leading-[45px] "
          data-aos="fade-left"
          data-aos-delay={300}
        >
          To introduce the benefits of blockchain to the masses by making it
          accessible, user-friendly, and easy to integrate into everyday life.
        </h1>
      </div>
    </div>
  );
};

export default Vision;
