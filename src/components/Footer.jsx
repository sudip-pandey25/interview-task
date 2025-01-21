import React from "react";
import { FooterData } from "../data";
import {
  AiFillBell,
  AiFillMail,
  AiFillPhone,
  AiOutlineFacebook,
  AiOutlineGoogle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#181818] text-white font-Poppins overflow-hidden">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 py-8">
        {FooterData.map((footer, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-12 gap-x-6 py-8"
          >
            <div className="flex flex-col gap-5">
              <h1 className="text-base font-medium ">
                {footer.header[0].head}
              </h1>
              <ul className="space-y-2">
                {footer.description1.map((desc, idx) => (
                  <li key={idx} className="text-base font-light">
                    <a href="#" className="cursor-pointer">
                      {desc.des}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-base font-medium">{footer.header[1].head}</h1>
              <ul className="space-y-2">
                {footer.description2.map((desc, idx) => (
                  <li key={idx} className="text-base font-light">
                    <a href="#" className="cursor-pointer">
                      {desc.des}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-base font-medium">{footer.header[2].head}</h1>
              <ul className="space-y-2">
                {footer.description3.map((desc, idx) => (
                  <li key={idx} className="text-base font-light">
                    <a href="#" className="cursor-pointer">
                      {desc.des}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-base font-medium">{footer.header[3].head}</h1>
              <div className="flex gap-2">
                <AiOutlineInstagram size={20} className="text-[#FF8804]" />
                <AiOutlineFacebook size={20} className="text-[#FF8804]" />
                <AiOutlineGoogle size={20} className="text-[#FF8804]" />
                <AiOutlineTwitter size={20} className="text-[#FF8804]" />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <h1 className="text-base font-medium">SOON ON:</h1>
                <img
                  src="https://s3-alpha-sig.figma.com/img/bdc5/abc5/366344168c370447fff17702ed7bd4d7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c9VdY0unyCBD7RMH1vAdPyQnsmKnTWLogiI5bH0YTGHHxlp0rdRA63wdK2ds~o7Fp-EJpEcaRHNdDs3pHPMZsawAVKyCF1gOi06Yk6l4ck9AfjvHc~ZHDkwYi~K-4NKOm1il9GYf~7VYCFt~uUImOq7zw0o0k-E6kPGI6ReUOVzGtTewq6nAATRjV1ZBwW77eooMVk7TJiqTa9q5PRFGp~eFVpwEG4EY-hX5Khdq6Fpk6pSqamCyCz7i~hg3FBxwcDxumtpsnYEO8UBx26us2z2y43BXFiisd4pWXt04HNZ47y2Aw-jVqBi6CuJkqx9wKWlLq4~hMZ7HMWrkLuFfmw__"
                  alt="App Store"
                  className="w-40 sm:w-44"
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/e103/97e9/e477647416467dd438e4880369fa98d4?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EGfcQxbKCsbRYu78~CYEfnt7mjWP4NL7xE-ovR~c1GHYRm2IwSNjR0IkGvUUokTIeuChyA11mS-nU8WGxk-ejm-84mv335CV1QJo2SJg57rPDZuyMTLK9OzPems3m9~jFHFXnZkRnNa8uYIE1zwkdt4XUD4JhLByaAerWdGumx-LMQFInhve3dTy7x1taB2Tkg75sPecDt8HcV1LiqDJ7pd4SfvOdsC7Y9seLcKf2AsLUSy--ccddkPVjqB0Nk5CI-UlOa6TREz06-B50XuYf-CUMcI2~jGD4DEnq~MVMdNQjZu4S09QB5HSxx6fjRaEsq5l0yrSFk6P4vZrKLMrUA__"
                  alt="Google Play"
                  className="w-40 sm:w-44"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-base font-medium">{footer.header[4].head}</h1>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  <AiFillBell size={20} />
                  Baneshwor, Kathmandu, Nepal
                </li>
                <li className="flex items-center gap-2">
                  <AiFillPhone size={20} />
                  +977-9100000000
                </li>
                <li className="flex items-center gap-2">
                  <AiFillMail size={20} />
                  test@gmail.com
                </li>
              </ul>
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-4 items-center text-center mt-8">
          <h1 className="text-lg">Subscribe to get amazing offers</h1>
          <input
            type="text"
            className="h-14 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] border bg-[#DCDCDC] text-black rounded-lg pl-4 text-base"
            placeholder="Enter Your Email"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
