import { MenuContext } from "@/contexts/menuContext";
import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { open, toggleMenu } = useContext(MenuContext);
  useEffect(() => {
    const body = document?.getElementById("root");

    if (!body) {
      return;
    }

    if (open) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [open]);

  const handleResize = () => {
    if (window.screen.width >= 1280) {
      toggleMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-black font-Manrope text-white w-screen min-h-screen h-full !overflow-x-hidden md:!overflow-x-clip  ">
      <Header toggleMenu={toggleMenu} menu={open} />
      {children}
      <Footer />
      <Menu open={open} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Layout;
