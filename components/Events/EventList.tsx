import { useRouter } from "next/router";
import React from "react";
import EventCard from "../Common/EventCard";
import Pagination from "../Common/Pagination";

const EventList: React.FC<{
  events: {
    image: string;
    title: string;
    description: string;
    gate_fee: string;
    location: string;
    date: string;
  }[];
}> = ({ events }) => {
  const router = useRouter();
  return (
    <div className=" w-full contain pb-6 space-y-6 " data-aos="fade-up">
      <h1 className=" heading ">Upcoming Events</h1>
      {events.length > 0 ? (
        <>
          <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-[50px] ">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
          {events.length > 6 && (
            <div className="w-full flex items-center justify-center !mt-16">
              <Pagination itemsPerPage={6} page={1} totalItems={12} />
            </div>
          )}
        </>
      ) : (
        <div className="h-[300px] w-full flex items-center justify-center">
          <h1 className="text-secondary font-Manrope font-normal !mb-9 text-center text-[17px] leading-[45px] md:text-2xl md:!leading-10">
            There are no Upcoming events at the moment.
          </h1>
        </div>
      )}
    </div>
  );
};

export default EventList;
