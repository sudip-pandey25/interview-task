import React, { useState } from "react";
import { FooterTableData, productData } from "../data";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import ProductsDetailsSection from "./ProductDetails";

const Products = () => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const [color, setColor] = useState(0);

  return (
    <div className="bg-white mx-4 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Section: Product Images */}
        <div className="flex flex-col items-center gap-4">
          {productData.map((product, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 justify-center items-center "
            >
              <img
                src={product.image_Url?.[select]?.url}
                alt=""
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] sm:w-[300px] sm:h-[300px] xl:w-[593px] xl:h-[593px] object-cover transition-opacity duration-500 ease-in-out"
              />
              <div className="flex flex-row justify-between gap-2 md:gap-6">
                <div
                  className={`${
                    select === 0
                      ? "border px-1 py-1 border-[#ED8F03]"
                      : "px-1 py-1"
                  } cursor-pointer`}
                >
                  <img
                    src={product.image_Url?.[0]?.url}
                    alt=""
                    className="w-[85px] transition-transform duration-300 hover:scale-110 "
                    onClick={() => setSelect(0)}
                  />
                </div>
                <div
                  className={`${
                    select === 1
                      ? "border px-1 py-1 border-[#ED8F03]"
                      : "px-1 py-1"
                  } cursor-pointer`}
                >
                  <img
                    src={product.image_Url?.[1]?.url}
                    alt=""
                    className="h-[85px] transition-transform duration-300 hover:scale-110"
                    onClick={() => setSelect(1)}
                  />
                </div>
                <div
                  className={`${
                    select === 2
                      ? "border px-1 py-1 border-[#ED8F03]"
                      : "px-1 py-1"
                  } cursor-pointer`}
                >
                  <img
                    src={product.image_Url?.[2]?.url}
                    alt=""
                    className="h-[85px] transition-transform duration-300 hover:scale-110"
                    onClick={() => setSelect(2)}
                  />
                </div>
                <div
                  className={`${
                    select === 3
                      ? "border px-1 py-1 border-[#ED8F03]"
                      : "px-1 py-1"
                  } cursor-pointer`}
                >
                  <img
                    src={product.image_Url?.[3]?.url}
                    alt=""
                    className="h-[85px] transition-transform duration-300 hover:scale-110"
                    onClick={() => setSelect(3)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Product Details */}
        <div className="content">
          {productData.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-8 md:justify-center"
            >
              {/* Product Title */}
              <h1 className="text-2xl md:text-[36px] font-[400] md:leading-[50px] font-Questrial">
                {product.name}
                <span className="ml-2 text-xs bg-black text-white px-2 py-1 rounded-full inline-block align-middle">
                  #1 IN CHAIRS
                </span>
              </h1>

              {/* Wishlist Button */}
              <div
                className="flex justify-end  "
                onClick={() => setClick(!click)}
              >
                <button className="text-[#B8134E] flex items-center gap-2 px-3 py-1 bg-[#B8134E] bg-opacity-25 rounded-full font-medium hover:scale-105 transition-all duration-300">
                  {click ? <AiFillHeart /> : <AiOutlineHeart />} Add to wishlist
                </button>
              </div>
              <hr />

              {/* Options */}
              <div className="flex flex-col gap-3  ">
                <p className="font-light text-[18px]">
                  <span className="font-medium">Options:</span>{" "}
                  {product.options[color]}
                </p>
                <div className="grid grid-flow-col w-[60px] gap-3">
                  {product.image_Url.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`cursor-pointer ${
                        color === imgIndex
                          ? "border-2 border-[#ED8F03] rounded-sm w-[60px]"
                          : "w-[60px]"
                      }`}
                      onClick={() => setColor(imgIndex)}
                    >
                      <img
                        src={img.url}
                        alt={`Option ${imgIndex}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <hr />

              {/* Pricing and Quantity */}
              <div className="flex flex-col gap-4 font-Poppins">
                <p className="text-gray-400 text-center md:text-left md:text-[18px] line-through">
                  NRs. {product.OriginalAmount}
                </p>
                <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                  <h1 className=" text-3xl md:text-[48px] font-[400] md:leading-[65px] ">
                    NRs. {product.discountAmount}
                  </h1>
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="border px-3 py-1 bg-[#ED8F03] bg-opacity-10 text-lg"
                        onClick={() => {
                          if (count > 1) setCount(count - 1);
                        }}
                      >
                        -
                      </button>
                      <span className="text-[18px] leading-[27px] font-[400] ">
                        {count}
                      </span>
                      <button
                        className="border px-3 py-1 bg-[#ED8F03] bg-opacity-10 text-lg"
                        onClick={() => {
                          if (count < product.stock) setCount(count + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button className="flex items-center gap-2 bg-[#ED8F03] text-white px-6 py-2 hover:scale-105 transition-all duration-300">
                      <AiOutlineShoppingCart /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <hr />

              {/* Description */}
              <div>
                <h2 className="text-[24px] font-[400] font-Poppins text-center md:text-left">
                  About this item:
                </h2>
                <ul className="list-disc ml-6">
                  {product.description.map((desc, descIndex) => (
                    <li
                      key={descIndex}
                      className="text-lg lg:text-[18px] lg:leading-[47px] text-gray-700 "
                    >
                      {desc.des}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Search Queries */}
              <div className="flex flex-col items-center lg:items-start gap-2 mt-1 lg:mb-[70px]">
                <h2 className="text-lg lg:text-[18px] font-[400] font-Poppins">
                  Search your queries related to this product:
                </h2>
                <div className="relative w-full max-w-md">
                  <input
                    type="text"
                    className="w-full h-[61px] border bg-gray-200 pl-12 pr-4 text-sm"
                    placeholder="Your Questions"
                  />
                  <AiOutlineSearch
                    size={24}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProductsDetailsSection />
    </div>
  );
};

export default Products;
