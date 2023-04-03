import React from "react";
import Hero from "../Common/Hero";
import EventList from "./EventList";

const Events = () => {
  return (
    <div>
      <Hero bg="" bgMobile="">
        <>
          <div className="font-Playfair font-bold text-[25px] space-x-6 leading-[83px]  md:text-5xl ">
            <span>Events</span>
          </div>
          <h1 className="max-w-[600px] text-secondary font-Manrope font-normal !mb-9 text-center text-[17px] leading-[45px] md:text-2xl md:!leading-10 ">
            Discover and Sign-up for our latest Physical and Virtual
            Blockchain-related events happening around the world.
          </h1>
        </>
      </Hero>
      <EventList />
    </div>
  );
};

export default Events;
