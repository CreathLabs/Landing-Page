import { products } from "@/data";
import React from "react";
import Product from "../Common/Product";

const Products = () => {
  return (
    <div className="w-full contain pt-10 pb-[68px] space-y-10 ">
      <h1 id="products" className="heading text-center md:text-left ">
        Our Products
      </h1>
      <div className="w-full grid gird-cols-1 lg:grid-cols-2  gap-10">
        {products.map(({ about, badge, name, soon, link }, index) => (
          <Product
            key={index}
            about={about}
            badge={badge}
            name={name}
            soon={soon}
            link={link}
            animation={index % 2 === 0 ? "fade-right" : "fade-left"}
            delay={index % 2 === 0 ? 0 : 300}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
