import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-black font-Manrope text-white w-screen min-h-screen h-full !overflow-x-hidden md:!overflow-x-clip  ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
