import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, useRef, useState } from "react";

interface Props {
  path: string;
  text: string;
  isdropdown?: boolean;
  content?: ReactElement;
}

const NavLink: React.FC<Props> = ({ path, text, isdropdown, content }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const pathname = router.pathname.split("/")[1];
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div
      onMouseOver={() => {
        if (!isdropdown) {
          return;
        }
        setShow(true);
      }}
      onMouseLeave={() => {
        if (!isdropdown) {
          return;
        }
        setShow(false);
      }}
      className="w-fit h-full flex items-center  relative "
    >
      <Link
        href={!isdropdown ? `/${path}` : ""}
        className={`${
          path === pathname ? "text-white" : "text-gray"
        } font-medium  ${
          isdropdown && show ? "text-white" : "hover:text-white"
        }  cursor-pointer `}
      >
        {text}
      </Link>
      {path === pathname && (
        <div className="absolute top-[40%] -right-[110%]  xl:top-[68%] xl:right-0 bottom-0 w-full h-full flex justify-center">
          <div className=" w-[8px] h-[8px] bg-white rounded-full "></div>
        </div>
      )}

      {isdropdown && (
        <div
          className=" transition-all duration-300 ease-linear  absolute top-[100%] overflow-hidden -left-5 "
          style={{
            height: show ? dropdownRef.current?.clientHeight + "px" : "0px",
          }}
        >
          <div
            ref={dropdownRef}
            className="overflow-hidden rounded-b-[20px] py-6 px-6 whitespace-nowrap !w-full min-w-[300px] bg-black"
          >
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavLink;
