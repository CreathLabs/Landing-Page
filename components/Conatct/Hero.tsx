import Image from "next/image";
import React, { useEffect, useState } from "react";
import Frame from "../../public/Frame.png";
import HalfFrame from "../../public/halfFrame.png";
import MobileFrame from "../../public/MobileFrame.png";

interface Props {
  children: React.ReactNode;
  bg?: string;
  bgMobile?: string;
}

const Hero: React.FC<Props> = ({ children, bg, bgMobile }) => {
  const [animate, setAnimate] = useState(true);
  const [loaded, setLoaded] = useState(false);

  function handleImageLoad() {
    console.log("done");
    setLoaded(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 1750);
  }, []);

  return (
    <div
      className={` h-screen md:h-[calc(100vh-80px)] relative w-full ${
        bg ? bg : ""
      } ${bgMobile ? bgMobile : ""}      bg-no-repeat bg-cover ${
        animate ? "animate-pulse" : "animate-none"
      }   `}
    >
      <div className="w-full h-full absolute top-0 right-0 left-0 bottom-0 hero_gradient"></div>
      <div className="hidden w-full absolute -left-[250px] xl:-left-[320px] top-[0px] h-full lg:flex items-start justify-center">
        <Image
          src={Frame}
          onLoad={handleImageLoad}
          className="w-[985px] "
          alt="Frame"
        />
      </div>
      <div className="w-full h-full absolute top-0 right-0 left-0 bottom-0   ">
        <div className="hidden w-full h-full md:flex lg:hidden items-start justify-center">
          <Image src={Frame} className="!w-full" alt="Frame" />
        </div>
        <div className="w-full absolute -top-8 flex md:hidden justify-center items-start">
          <Image src={MobileFrame} className="w-full" alt="Frame" />
        </div>
      </div>
      <div
        className="absolute contain top-16 md:top-6  left-0 right-0 bottom-0 w-full h-full flex flex-col space-y-6 md:space-y-8 items-center justify-center "
        data-aos="fade-up"
        data-aos-delay={1000}
      >
        {children}
      </div>
    </div>
  );
};

export default Hero;
