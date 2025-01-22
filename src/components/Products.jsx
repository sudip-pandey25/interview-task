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
    <div className="bg-white mx-12 mt-2 2xl:ml-[95px] 2xl:mt-[91px]  ">
      <div className="grid grid-cols-1 w-auto md:grid-cols-1 mt-10 ml-3 gap-8 lg:grid-cols-2 xxxl:gap-[134px]  2xl:max-w-[1587px]">
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
                className="w-[300px] h-[300px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] sm:w-[300px] sm:h-[300px] xxxl:w-[593px] xxxl:h-[593px] object-cover transition-opacity duration-500 ease-in-out rounded-2xl "
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
        <div className="content w-auto">
          {productData.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-1 w-auto gap-6 xxxl:gap-0 md:justify-center"
            >
              {/* Product Title */}
              <h1 className="text-2xl w-auto lg:text-[28px] xxxl:text-[32px] font-[400] 2xl:leading-[50px] font-Questrial  ">
                {product.name}
                <span className="ml-2 text-xs bg-black text-white px-2 py-1 rounded-full inline-block align-middle">
                  #1 IN CHAIRS
                </span>
              </h1>

              {/* Wishlist Button */}
              <div
                className="flex justify-end xxxl:mb-[14px] "
                onClick={() => setClick(!click)}
              >
                <button className="text-[#B8134E] flex items-center gap-2 px-3 py-1 bg-[#B8134E] bg-opacity-25 rounded-full font-medium hover:scale-105 transition-all duration-300">
                  {click ? <AiFillHeart /> : <AiOutlineHeart />} Add to wishlist
                </button>
              </div>
              <hr />

              {/* Options */}
              <div className="flex flex-col gap-3 xxxl:mt-[14px] xxxl:mb-[26px] ">
                <p className="font-light xxl:text-[18px]">
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
              <div className="flex flex-col gap-4 font-Poppins xxxl:mt-[26px] xxxl:mb-[70px] ">
                <p className="text-gray-400 text-center md:text-left lg:text-[14px] xxl:text-[18px] line-through">
                  NRs. {product.OriginalAmount}
                </p>
                <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                  <h1 className=" text-3xl lg:text-[40px] md:text-[48px] font-[400] xxxl:leading-[65px] ">
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
                <h2 className="text-[24px] font-[400] font-Poppins text-center md:text-left xxxl:mt-[70px] xxxl:mb-[21px] ">
                  About this item:
                </h2>
                <ul className="list-disc ml-6">
                  {product.description.map((desc, descIndex) => (
                    <li
                      key={descIndex}
                      className="text-lg md:leading-10 lg:text-[18px] lg:leading-[38px] xxxl:leading-[47px] text-gray-700 "
                    >
                      {desc.des}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Search Queries */}
              <div className="flex flex-col items-center lg:items-start gap-2 mt-1 lg:mb-[35px] xxxl:mt-[21px]">
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
