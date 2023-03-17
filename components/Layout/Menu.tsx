import React from "react";
import NavLink from "../Common/NavLink";

const Menu: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <div
      className="fixed xl:hidden top-0 overflow-hidden left-0 right-0 bottom-0 menu_bg z-40 transition-all duration-700 ease-in-out "
      style={{
        height: open ? "100vh" : "0px",
      }}
    >
      <div className=" mt-[120px]  flex flex-col contain space-y-[74px]">
        <NavLink text="Home" path="" />
        <NavLink text="Marketplace" path="/marketplace" />
        <NavLink text="Products" path="/products" />
        <NavLink text="Company" path="/company" />
      </div>
    </div>
  );
};

export default Menu;
