import { services } from "@/data";
import React from "react";
import Button from "../Common/Button";
import Service from "../Common/Service";

const Services = () => {
  return (
    <section className="contain  pt-10 pb-16 space-y-16 flex flex-col items-center ">
      <h1 className=" heading ">Services We Offer</h1>
      <div className="w-full grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16  ">
        {services.map(({ title, icon, body, rotate }, index) => (
          <Service
            key={index}
            title={title}
            icon={icon}
            body={body}
            rotate={rotate}
          />
        ))}
      </div>
      <Button text="See all Services" />
    </section>
  );
};

export default Services;
