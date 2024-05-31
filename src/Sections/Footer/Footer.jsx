import React from "react";
import Whitelogo from "../../images/logo-white.svg"
import logo1 from "../../../public/footer/twitter.svg"
import logo2 from "../../../public/footer/facebook.svg"
import logo3 from "../../../public/footer/instagram.svg"

const Footer = () => {
  return (
    <div className="min-w-full flex items-center text-[#fff] flex-wrap justify-between max-md:justify-center gap-8">
      <a href="#">
        <img
          src={Whitelogo}
          alt="logo"
          className="mb-10"
        />
      </a>

      <div className="">
        <h2 className="text-[16px] max-md:translate-y-4 font-semibold mb-4 font-['poppin', font-serif] -translate-y-4 text-center ">
          Commponey Trade Mark <br />
          <span className="font-thin text-gray-300">
            {new Date().getFullYear().toString()} &copy; All Right Reseved
          </span>
        </h2>
      </div>
      <div className="mb-10">
        <ul className="flex gap-5 animate-pulse">
          <li>
            <a href="#">
              <img src={logo1} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={logo2} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={logo3} alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
