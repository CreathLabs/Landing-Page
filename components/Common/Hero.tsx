import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  Frame: StaticImageData;
  Mobile: StaticImageData;
  children: React.ReactNode;
}

const Hero: React.FC<Props> = ({ children, Frame, Mobile }) => {
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
      className={` h-screen md:h-[calc(100vh-80px)] relative w-full bg-[url('/mobile.svg')] md:bg-[url('/background.svg')]   bg-no-repeat bg-cover ${
        animate ? "animate-pulse" : "animate-none"
      }   `}
    >
      <div className="w-full h-full absolute top-0 right-0 left-0 bottom-0 hero_gradient"></div>
      <div className="w-full h-full absolute top-0 right-0 left-0 bottom-0   ">
        <div className="hidden w-full h-full lg:flex items-start justify-center">
          <Image src={Frame} onLoad={handleImageLoad} alt="Frame" />
        </div>
        <div className="hidden w-full h-full md:flex lg:hidden items-start justify-center">
          <Image src={Frame} className="!w-full" alt="Frame" />
        </div>
        <div className="w-full absolute  flex md:hidden justify-center items-start">
          <Image src={Mobile} className="w-full" alt="Frame" />
        </div>
      </div>
      <div
        className="absolute contain top-0 md:top-6 left-0 right-0 bottom-0 w-full h-full flex flex-col space-y-6 md:space-y-8 items-center justify-center "
        data-aos="fade-up"
        data-aos-delay={1000}
      >
        {children}
      </div>
    </div>
  );
};

export default Hero;
