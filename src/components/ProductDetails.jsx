import { useState } from "react";
import { FooterTableData } from "../data";

const ProductsDetailsSection = () => {
  const [active, setActive] = useState(1);

  return (
    // Description
    <div className="2xl:mb-[90px]  w-auto xxxl:w-[1730px] rounded h-[40vh] md:h-auto xxxl:h-[30vh] font-Poppins 2xl:[mt-35px] ">
      <div className="w-full flex justify-center gap-6 xxxl:gap-[36px] border-b pt-10 pb-2 ">
        <div className="relative">
          <h5
            className={`${
              active === 1 ? "text-[#FF8804]" : null
            } transition-all duration-300 cursor-pointer text-sm md:text-[24px] md:leading-[36px] font-Poppins font-[400]   `}
            onClick={() => {
              setActive(1);
            }}
          >
            Description
          </h5>
          {active === 1 ? (
            <div className="absolute bottom-[-29%] left-0 h-[3px] w-full bg-[#FF8804] transition-all duration-300  "></div>
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={`${
              active === 2 ? "text-[#FF8804]" : null
            } transition-all duration-300 cursor-pointer text-sm md:text-[24px]  md:leading-[36px] font-Poppins font-[400]`}
            onClick={() => {
              setActive(2);
            }}
          >
            Specification
          </h5>
          {active === 2 ? (
            <div className="absolute bottom-[-29%] left-0 h-[3px] w-full bg-[#FF8804] transition-all duration-300  "></div>
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={`${
              active === 3 ? "text-[#FF8804]" : null
            } transition-all duration-300 cursor-pointer text-sm md:text-[24px] md:leading-[36px] font-Poppins font-[400]`}
            onClick={() => {
              setActive(3);
            }}
          >
            {" "}
            Q/A
          </h5>
          {active === 3 ? (
            <div className="absolute bottom-[-29%] left-0 h-[3px] w-full bg-[#FF8804] transition-all duration-300 "></div>
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={`${
              active === 4 ? "text-[#FF8804]" : null
            } transition-all duration-300 cursor-pointer text-sm md:text-[24px] md:leading-[36px] font-Poppins font-[400]`}
            onClick={() => {
              setActive(4);
            }}
          >
            {" "}
            Ratings & Review
          </h5>
          {active === 4 ? (
            <div className="absolute bottom-[-29%] left-0 h-[3px] w-full bg-[#FF8804] transition-all duration-300 "></div>
          ) : null}
        </div>
      </div>
      {/* Description Explain */}
      <div className="mx-12 gap-1 mt-4 mb-20 pb-2 w-auto 2xl:mx-auto lg:ml-[200px] lg:mr-[200px] xxxl:mr-[390px]  xxxl:ml-[383px] xxxl:my-10">
        {active == 1 ? (
          <div>
            <p className=" px-2 lg:px-12 py-2 md:text-[18px] text-sm leading-8 pb-10 whitespace-pre-line">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolorum fugiat magnam voluptate assumenda ipsa, ut corrupti! Iure
              optio, fugiat, amet quidem magnam beatae, ducimus quia tempore
              saepe hic laboriosam!
            </p>
          </div>
        ) : null}
        {/* table */}
        {active == 2 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xxxl:gap-[23px]">
            <div className="w-auto h-auto">
              <div>
                <label className="font-[400] lg:text-[18px] ">
                  Technical Specification
                </label>
                <table className="w-full text-sm text-left border-collapse border border-gray-300">
                  <tbody>
                    {FooterTableData.map((item, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0 ? "bg-white" : "bg-gray-100"
                        }`}
                      >
                        {item.row.map((data, i) => (
                          <>
                            <td className="border border-gray-300 px-4 py-2 font-[500] text-xs  lg:text-[18px] lg:leading-[27px]  ">
                              {data.head}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-xs   lg:text-[18px] lg:leading-[27px]  ">
                              {data.Details}
                            </td>
                          </>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className=" w-auto h-auto lg:w-[562px] lg:h-[195px]">
              <div>
                <label className="font-medium">Other Specification</label>
                <table className="w-full text-sm text-left border-collapse border border-gray-300">
                  <tbody>
                    {FooterTableData.map((item, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0 ? "bg-white" : "bg-gray-100"
                        }`}
                      >
                        {item.row.map((data, i) => (
                          <>
                            <td className="border border-gray-300 px-4 py-2 font-[500] text-xs lg:text-[18px] lg:leading-[27px]  ">
                              {data.head}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-xs   lg:text-[18px] lg:leading-[27px]  ">
                              {data.Details}
                            </td>
                          </>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}
        {active == 3 ? (
          <div>
            <p className="px-2 lg:px-12 py-2 md:text-[18px] text-sm leading-8 pb-10 whitespace-pre-line">
              This is Q/A section
            </p>
          </div>
        ) : null}
        {active == 4 ? (
          <div>
            <p className=" px-2 lg:px-12  py-2 md:text-[18px] text-sm leading-8 pb-10 whitespace-pre-line">
              This is Ratings & Review section
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductsDetailsSection;
