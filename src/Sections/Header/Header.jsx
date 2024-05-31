import React, { useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useContextState } from "../../context/ContextProvider";
import { auth } from "../../firebase/firebase";
import pic from "../../images/logo-white.svg";
import CloseIcon from "@mui/icons-material/Close";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const Header = () => {
  const [isTrue, setIsTrue] = useState();
  const [{ basket, User }, dispatch] = useContextState();
  console.log(User);

  const HandelAuthentication = () => {
    if (User) {
      auth.signOut();
    }
  };

  return (
    <header className="w-full max-sm:bg-white bg-black p-5 font-semibold mx-auto max-sm:-mb-10">
      <div
        className="fixed hidden max-sm:flex text-2xl left-10 top-12 z-10 cursor-pointer text-red-500"
        onClick={() => setIsTrue(!isTrue)}
      >
        {isTrue ? <CloseIcon /> : <MenuOpenIcon />}
      </div>
      {isTrue ? (
        <header
          className="min-w-[70vw] flex-col items-center justify-between z-30 fixed border-black left-[42vw] -translate-x-1/2 translate-y-1/4
    rounded-lg backdrop-blur-md py-32 m-10 space-y-10 border min-h-[600px] -top-20 hidden max-sm:flex"
        >
          <nav>
            <div className="absolute top-5 right-5 text-5xl"></div>
            <div className="flex justify-center text-[14px] ">
              <ul className="flex flex-col justify-center gap-10 max-sm:mr-0 mr-20 items-center">
                <li className="hover:text-[17px] border-b border-accent hover:duration-200 hover:text-accent">
                  <Link to={`/`} onClick={() => setIsTrue(!true)}>
                    Home
                  </Link>
                </li>
                <li className="hover:text-[17px] border-b border-accent hover:duration-200 hover:text-accent">
                  <Link to={`/checkout`} onClick={() => setIsTrue(!true)}>
                    Shop
                  </Link>
                </li>
                <li className="hover:text-[17px] border-b border-accent hover:duration-200 hover:text-accent hidden max-sm:flex">
                  <Link to={`/payment`} onClick={() => setIsTrue(!true)}>
                    Payment
                  </Link>
                </li>
                {User ? (
                  <p className="text-sm text-accent/80 font-poppins border-b font-bold">
                    {User.email}{" "}
                    <span className="animate-pulse">&#128516;</span>
                  </p>
                ) : (
                  <p className="text-sm text-accent/80 font-poppins">
                    Gust Account{" "}
                    <span className="animate-pulse">&#128578;</span>
                  </p>
                )}
                <li className="mx-2 hover:mb-2 hover:duration-200 ease-out cursor-pointer">
                  <Link to={`/checkout`}>
                    <AddShoppingCartOutlinedIcon className="hover:text-red-500" />
                  </Link>
                  <strong className="animate-pulse text-red-400">
                    {" "}
                    {basket.length}
                  </strong>
                </li>
                <li
                  className="border max-md:px-5 py-3 px-12
              hover:text-accent duration-200 font-semibold cursor-pointer hover:border-accent/40
              gap-2 items-center"
                >
                  {User ? (
                    <button onClick={HandelAuthentication}>SignOut</button>
                  ) : (
                    <Link to={`/login`} onClick={() => setIsTrue(!true)}>
                      Sign In
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </header>
      ) : (
        ""
      )}

      <nav className="flex justify-between items-center flex-wrap max-sm:hidden">
        <div className="w-28 hover:w-36 duration-300 animate-pulse hover:animate-none">
          <Link to={`/`}>
            <img src={pic} alt="logo" />
          </Link>
        </div>

        {User ? (
          <p className="text-sm text-white font-poppins border-b max-sm:mr-60 max-sm:mt-3 mb-3 font-bold">
            {User.email} <span className="animate-pulse">&#128516;</span>
          </p>
        ) : (
          <p className="text-sm text-accent/80 font-poppins max-sm:mr-60 max-sm:mt-3">
            Gust Account <span className="animate-pulse">&#128578;</span>
          </p>
        )}

        <div className="flex justify-center text-[14px] text-white">
          <ul className="flex gap-4 max-sm:mr-0 mr-20 items-center">
            <li className="hover:text-[17px] hover:duration-200 hover:text-accent">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="hover:text-[17px] hover:duration-200 hover:text-accent">
              <Link to={`/checkout`}>Shop</Link>
            </li>
            <li className="hover:text-[17px] hover:duration-200 hover:text-accent hidden max-sm:flex">
              <Link to={`/payment`}>Payment</Link>
            </li>
            <li
              className="border  py-3 px-12
              hover:text-accent duration-200 hover:border-accent/40
              gap-2 items-center"
            >
              {User ? (
                <button onClick={HandelAuthentication}>SignOut</button>
              ) : (
                <Link to={`/login`}>Sign In</Link>
              )}
            </li>
            <li className="mx-2 hover:mb-2 hover:duration-200 ease-out cursor-pointer">
              <Link to={`/checkout`}>
                <AddShoppingCartOutlinedIcon className="hover:text-red-500" />
              </Link>
              <strong className="animate-pulse text-red-400">
                {" "}
                {basket.length}
              </strong>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
