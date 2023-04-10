import axios from "axios";
import React, { useEffect, useState } from "react";
import Hero from "../Common/Hero";
import EventList from "./EventList";

const Events = () => {
  const [events, setEvents] = useState<
    {
      image: string;
      title: string;
      description: string;
      gate_fee: string;
      location: string;
      date: string;
    }[]
  >([]);

  const getEvents = async () => {
    const { data } = await axios.get("https://creath.tech/api/events");
    return data;
  };

  useEffect(() => {
    getEvents().then((res) => {
      setEvents(res.data);
    });
  }, []);

  return (
    <div>
      <Hero bg="" bgMobile="">
        <>
          <div className="font-Playfair font-bold text-[25px] space-x-6 leading-[83px]  md:text-5xl ">
            <span>Events</span>
          </div>
          <h1 className="max-w-[600px] text-secondary font-Manrope font-normal !mb-9 text-center text-[17px] leading-[45px] md:text-[22px] md:!leading-10 ">
            Discover and Sign-up for our latest Physical and Virtual
            Blockchain-related events happening around the world
          </h1>
        </>
      </Hero>
      <EventList events={events} />
    </div>
  );
};

export default Events;
