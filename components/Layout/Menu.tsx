import { MenuContext } from "@/contexts/menuContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Button from "../Common/Button";
import NavLink from "../Common/NavLink";

const Menu: React.FC<{
  open: boolean;
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open }) => {
  const router = useRouter();
  const { toggleMenu } = useContext(MenuContext);

  return (
    <div
      className="fixed xl:hidden top-0 overflow-hidden left-0 right-0 bottom-0 w-full  z-40 transition-all duration-700 ease-in-out menu_bg "
      style={{
        height: open ? "100vh" : "0px",
      }}
    >
      <div className=" mt-[120px]  flex flex-col contain space-y-[74px]">
        <NavLink text="Home" path="" />
        <NavLink text="Marketplace" path="marketplace" />
        <NavLink
          text="Products"
          path="products"
          content={<Products />}
          isdropdown
        />
        <NavLink
          text="Company"
          path="company"
          isdropdown
          content={<Company />}
        />
      </div>
      <div
        className="absolute bottom-28 left-0 right-0 px-6 transition-all duration-700 ease-in-out "
        style={{
          display: open ? "block" : "none",
        }}
      >
        <Button
          text="Contact Us"
          width="100%"
          action={() => {
            router.push("/contact");
            toggleMenu(false);
          }}
        />
      </div>
    </div>
  );
};

export default Menu;

export const Company: React.FC = () => {
  const { toggleMenu } = useContext(MenuContext);
  return (
    <div className="flex flex-col bg-transparent space-y-6 ">
      {["about-us", "team", "careers"].map((item, index) => (
        <div key={index} className="">
          <Link
            href={
              item === "team" ? `/company/about-us#team` : `/company/${item}`
            }
            className=" text-[15px] capitalize font-light hover:text-primary  "
            onClick={() => toggleMenu(false)}
          >
            <h1>{item.replace("-", " ")}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

const list = [
  {
    name: "Creath Art Marketplace",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    name: "BucketBoy NFT",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    name: "Creath Governance Token",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    name: "LaNoche",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
];

export const Products: React.FC = () => {
  const { toggleMenu } = useContext(MenuContext);
  return (
    <div className="flex flex-col bg-transparent space-y-6 ">
      {list.map((item, index) => (
        <div key={index} className="">
          <Link
            href=""
            className=" text-[15px] capitalize font-light hover:text-primary  "
            onClick={() => toggleMenu(false)}
          >
            <h1>{item.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};
