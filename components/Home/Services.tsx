import { services } from "@/data";
import React, { useEffect, useState } from "react";
import Button from "../Common/Button";
import Service from "../Common/Service";

const Services = () => {
  const [end, setEnd] = useState(0);

  const handleResize = () => {
    if (screen.width >= 768) {
      setEnd(services.length);
    } else {
      setEnd(5);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSeeAll = () => {
    setEnd(services.length);
  };

  return (
    <section className="contain  pt-10 pb-16 space-y-16 flex flex-col items-center ">
      <h1 className=" heading ">Services We Offer</h1>
      <div className="w-full grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16  ">
        {services.slice(0, end).map(({ title, icon, body, rotate }, index) => (
          <Service
            key={index}
            title={title}
            icon={icon}
            body={body}
            rotate={rotate}
          />
        ))}
      </div>
      {end < services.length && (
        <div className="w-full md:hidden ">
          <Button text="See all Services" width="100%" action={handleSeeAll} />
        </div>
      )}
    </section>
  );
};

export default Services;
