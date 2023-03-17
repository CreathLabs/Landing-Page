import { useRouter } from "next/router";
import React from "react";

interface Props {
  path: string;
  text: string;
}

const NavLink: React.FC<Props> = ({ path, text }) => {
  const router = useRouter();
  const pathname = router.pathname.split("/")[1];

  return (
    <div className="w-fit h-fit  relative ">
      <h1
        className={`${
          path === pathname ? "text-white" : "text-gray"
        } font-medium  hover:text-white cursor-pointer `}
      >
        {text}
      </h1>
      {path === pathname && (
        <div className="absolute top-[40%] -right-[110%]  xl:top-[108%] xl:right-0 bottom-0 w-full h-full flex justify-center">
          <div className=" w-[8px] h-[8px] bg-white rounded-full "></div>
        </div>
      )}
    </div>
  );
};

export default NavLink;
