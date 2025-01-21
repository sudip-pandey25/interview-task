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
    <>
      <div className="bg-white flex flex-col gap-4 mx-4 mt-10 lg:flex-row md:gap-8 md:mx-12 md:mt-10">
        <div className=" flex flex-col justify-start items-center gap-8">
          {productData.map((product, index) => (
            <>
              <div key={index} className="flex flex-col gap-4 ">
                <img
                  src={product.image_Url?.[select]?.url}
                  alt=""
                  className="w-full h-auto lg:w-[593px] lg:h-[593px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] object-cover transition-opacity duration-500 ease-in-out"
                />

                <div className="flex flex-row justify-between">
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={product.image_Url?.[0]?.url}
                      alt=""
                      className="h-[85px]  transition-transform duration-300 hover:scale-110 "
                      onClick={() => setSelect(0)}
                    />
                  </div>
                  <div
                    className={`${
                      select === 1 ? "border" : "null"
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
                      select === 2 ? "border" : "null"
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
                      select === 3 ? "border" : "null"
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
            </>
          ))}
        </div>
        <div className="content flex-1">
          {productData.map((product, index) => (
            <>
              <div className="flex flex-col gap-2">
                <div className="Title text-[36px] font-Questrial ">
                  {product.name}{" "}
                  <span className="text-[12px] ml-2 my-2 px-2 py-1 bg-black text-white rounded-full  inline-block align-middle">
                    {" "}
                    #1 IN CHAIRS
                  </span>
                </div>
                <div
                  className=" right-20 md:top-40 lg:top-40 cursor-pointer flex flex-row-reverse"
                  onClick={() => {
                    setClick(!click);
                  }}
                >
                  <button className="text-[#B8134E] flex justify-center items-center gap-2 px-3 py-1 bg-[#B8134E] bg-opacity-25 rounded-full font-Poppins font-medium hover:scale-105 transition-all duration-300 ">
                    {click ? <AiFillHeart /> : <AiOutlineHeart />}
                    Add to wishlist
                  </button>
                </div>
                <hr className="mt-4 mb-2 lg:mt-8 lg:mb-4" />
                <div className="flex flex-col mt-2 mx-2 gap-3">
                  <p className="font-Poppins font-light text-sm ">
                    <span className="font-medium"> options:</span>{" "}
                    {product.options[color]}
                  </p>
                  <div className="flex flex-row gap-2 ">
                    <div
                      className={`${
                        color === 0
                          ? "border border-[#ED8F03] rounded-sm "
                          : "null"
                      } cursor-pointer`}
                    >
                      <img
                        src={product.image_Url?.[0]?.url}
                        alt=""
                        className="h-[30px]"
                        onClick={() => setColor(0)}
                      />
                    </div>
                    <div
                      className={`${
                        color === 1
                          ? "border border-[#ED8F03] rounded-sm "
                          : "null"
                      } cursor-pointer`}
                    >
                      <img
                        src={product.image_Url?.[1]?.url}
                        alt=""
                        className="h-[30px]"
                        onClick={() => setColor(1)}
                      />
                    </div>
                    <div
                      className={`${
                        color === 2
                          ? "border border-[#ED8F03] rounded-sm "
                          : "null"
                      } cursor-pointer`}
                    >
                      <img
                        src={product.image_Url?.[2]?.url}
                        alt=""
                        className="h-[30px]"
                        onClick={() => setColor(2)}
                      />
                    </div>
                    <div
                      className={`${
                        color === 3
                          ? "border border-[#ED8F03] rounded-sm "
                          : "null"
                      } cursor-pointer`}
                    >
                      <img
                        src={product.image_Url?.[3]?.url}
                        alt=""
                        className="h-[30px]"
                        onClick={() => setColor(3)}
                      />
                    </div>
                  </div>
                </div>
                <hr className="mt-4 mb-2 lg:mt-8 lg:mb-4" />
                <div className="flex flex-col ">
                  <p className="font-Poppins text-[18px] font-light text-gray-400 line-through">
                    NRs.{product.OriginalAmount}
                  </p>
                  <div className="flex flex-col md:flex-row justify-between mt-2">
                    <h1 className="font-Poppins text-3xl">
                      NRs. {product.discountAmount}
                    </h1>
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-Poppins">Quantity:</span>
                        <div className="flex flex-row gap-4 mt-1 items-center">
                          <div className="flex flex-row gap-3 items-center">
                            <button
                              className="border px-3 py-1 bg-[#ED8F03] bg-opacity-20 text-black text-lg cursor-pointer"
                              onClick={() => {
                                if (count > 0) setCount(count - 1);
                              }}
                            >
                              -
                            </button>
                            <span>{count}</span>
                            <button
                              className="border outline-none  px-3 py-1 bg-[#ED8F03] bg-opacity-20 text-black text-lg cursor-pointer"
                              onClick={() => {
                                if (count < product.stock) setCount(count + 1);
                              }}
                            >
                              +
                            </button>
                          </div>
                          <div>
                            <button className="flex flex-row items-center gap-2 text-lg bg-[#ED8F03] text-white px-6 py-2 cursor-pointer hover:scale-105 transition-all duration-300">
                              <AiOutlineShoppingCart /> Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
                <hr className="mt-4 mb-2 lg:mt-8 lg:mb-4" />
                <div className="flex flex-col gap-2 ">
                  <h1 className="font-Poppins font-medium text-lg">
                    About this item:
                  </h1>
                  <ul
                    style={{ listStyle: "disc" }}
                    className="ml-6 text-justify"
                  >
                    {productData.map((data, i) => (
                      <ul key={i} style={{ listStyle: "disc" }}>
                        {data.description.map((desc, descIndex) => (
                          <li className="font-[400] font-Poppins mt-2 text-[18px] text-[#1E1E1E] text-opacity-80 ">
                            {desc.des}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-center md:items-start mt-12 mb-12 gap-2">
                  <h1 className="font-Poppins text-[18px] font-medium mx-2">
                    Search your queries realted to this product
                  </h1>
                  <div className="flex flex-row items-center relative w-full max-w-[491px]">
                    <input
                      type="text"
                      className=" h-[61px] w-[491px] border outline-none bg-[#DCDCDC] text-[18px] ml-2 pl-16 font-Poppins  "
                      placeholder="Your Questions"
                    />
                    <span>
                      <AiOutlineSearch
                        size={35}
                        className="absolute inset-y-0 left-6 top-3 flex items-center text-gray-500"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <ProductsDetailsSection />
    </>
  );
};

export default Products;
