import React from "react";
import pic1 from "../../../public/categories/watches-category.png";
import pic2 from "../../../public/categories/laptops-category.png";
import pic3 from "../../../public/categories/phones-category.png";
import pic4 from "../../../public/categories/tv-home-category.png";
import pic5 from "../../../public/categories/ipads-category.png";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
import img1 from "../../../public/categories/items/1.png";
import img0 from "../../../public/categories/items/6.png";
import img3 from "../../../public/categories/items/14.png";
import img4 from "../../../public/categories/items/9.png";
import img8 from "../../../public/categories/items/2.png";
import img01 from "../../../public/categories/items/14.png";
import img02 from "../../../public/categories/items/13.png";
import img03 from "../../../public/categories/items/11.png";
import Typewriter from "typewriter-effect";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import dash1 from "../../../public/hero/hero-1.png";
import dash2 from "../../../public/hero/hero-2.png";
import page from "../../../src/images/image/image-1.svg"

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col mt-10 max-sm:mt-2">
      <div className="relative">
        <Carousel>
          <div>
            <img src={dash1} alt="back pic" />
          </div>
          <div>
            <img src={dash2} alt="back pic" />
          </div>
        </Carousel>

        {/* <img
          src=""
          alt="home/logo"
          className="w-[1590px] bg-slate-50 mx-auto h-[670px] max-md:h-[400px] max-sm:h-[250px] rounded-md"
        /> */}

        <div className="absolute max-sm:top-20 top-52 max-md:top-10 max-md:left-8 max-sm:left-10 left-20">
          <h1 className="text-5xl duration-300 max-sm:text-2xl max-md:text-3xl font-bold text-left text-gray-400">
            <Typewriter
              options={{
                strings: [" Unleash Innovation", "By Top G!"],
                autoStart: true,
                loop: true,
              }}
            />
            <br />
            <span className="absolute top-8 hidden max-sm:flex">
              in Every Byte.
            </span>
            <span className="flex max-sm:hidden">
              <Typewriter
                options={{
                  strings: ["in Every Byte.", "Welcome in tech Haven!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className="mt-10 max-sm:-mt-1 max-sm:text-[12px] animate-pulse text-gray-400 font-medium  text-xl translate-x-2">
            Explore a World of Cutting-Edge Tech
          </p>

          <a
            href={"#shop"}
            className="border border-gray-500 max-md:px-5 py-3 px-12
            hover:text-accent duration-200 hover:border-accent/40
            gap-2 items-center absolute mt-8 font-semibold max-sm:hidden max-lg:hidden flex"
          >
            Shop Now
          </a>
        </div>

        <div className="h-screen mt-16 w-full mx-auto flex flex-col text-gray-400">
          <div className="flex animate-pulse justify-between items-center font-medium text-2xl  max-sm:text-[10px]">
            <p className="ml-10">Shop by Categories</p>
            <p className="text-sm mr-10  max-sm:text-[8px]">Show All</p>
          </div>

          <div className="flex justify-evenly flex-wrap">
            <Products
              img={pic1}
              name="Watch"
              price={400}
              detail="watch 200sc"
              id="253"
            />
            <Products
              img={pic2}
              name="Laptop"
              price={900}
              detail="Laptom 2c series"
              id="255"
            />

            <Products
              img={pic3}
              name="Phone"
              price={1000}
              detail="I phone 14 pro max"
              id="251"
            />
            <Products
              img={pic4}
              name="Tv - Home"
              price={1400}
              detail="Ultra size TV"
              id="258"
            />

            <Products
              img={img0}
              name="IPad light"
              price={3000}
              detail="I pad x series"
              id="2512"
            />
            <Products
              img={img3}
              name="laptop"
              price={300}
              detail="Asus ROG Strix series"
              id="2543"
            />

            <Products
              img={img4}
              name="IPhone-13"
              price={250}
              detail="IPhone 13 Pro"
              id="25456"
            />
            <Products
              img={img1}
              name="IPad"
              price={1200}
              detail="Ipad 2c series"
              id="25753"
            />

            <Products
              img={img8}
              name="Laptop"
              price={2500}
              detail="Asus ROG Series 20"
              id="25123"
            />
          </div>
          <div className="relative h-screen bottom-0 w-full p-10 max-md:hidden">
            <img
              className="h-40 w-full object-cover"
              src={page}
            />
            <div className="flex justify-center items-center font-medium text-2xl max-sm:text-[10px]">
              <p className="ml-10 animate-pulse">New Categories</p>
            </div>
            <p className="text-gray-600 font-medium mt-10">
              Showing 1.4 From 15 Products
            </p>
            <div id="shop" className="grid grid-cols-4 grid-flow-row">
              <Products
                img={pic5}
                name="I pad"
                detail="Ipad 20 series"
                price={900}
                id="250980"
              />
              <Products
                img={img01}
                name="Laptop"
                detail="asus rog Series"
                price={900}
                id="25999"
              />

              <Products
                img={img02}
                name="smart watch"
                detail="Apple Watch"
                price={900}
                id="25777"
              />
              <Products
                img={img03}
                name="Tv - Home"
                detail="Smart Tv projecter"
                price={900}
                id="25444"
              />
            </div>
          </div>
          <div className="relative top-[5vh] w-full bg-gradient-to-r from-purple-500 to-pink-500 p-10 rounded-md overflow-hidden max-md:overflow-visible">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
