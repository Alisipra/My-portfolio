import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <nav className="bg-[#121212] text-white flex justify-between items-center sticky top-0 px-4 xl:px-8 z-20">
        <div className="text-xl  md:text-4xl lg:text-5xl font-bold p-3">
          ALI
        </div>
        <div className=" hidden md:block md:w-auto ">
          <ul className="space-x-8 flex text-[#ADB7BE] rounded font-semibold   mx-6 p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
            <Link
              to={"/"}
              className="cursor-pointer hover:border-b-2 border-orange-400"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="cursor-pointer hover:border-b-2 border-orange-400"
            >
              About
            </Link>
            <Link
              to={"/skills"}
              className="cursor-pointer hover:border-b-2 border-orange-400"
            >
              Skills
            </Link>

            <Link
              to={"/contact"}
              className="cursor-pointer hover:border-b-2 border-orange-400"
            >
              Contact
            </Link>
          </ul>
        </div>

        <div className="lg:hidden md:hidden sm:flex flex-col justify-end  text-2xl">
          <button className="py-3" onClick={() => setShowNav(!showNav)}>
            {showNav ? (
              <li>&#10005;</li>
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
          {showNav && (
            <div
              className="w-[100%] h-[300px] absolute right-0 bg-black text-white"
              onClick={() => setShowNav(!showNav)}
            >
              <ul className=" flex flex-col  items-center text-[#ADB7BE] rounded font-semibold text-center  duration-700">
                <Link
                  to={""}
                  className="cursor-pointer hover:border-b-2 border-orange-400"
                >
                  Home
                </Link>
                <Link
                  to={"/about"}
                  className="cursor-pointer hover:border-b-2 border-orange-400"
                >
                  About
                </Link>
                <Link
                  to={"/skills"}
                  className="cursor-pointer hover:border-b-2 border-orange-400"
                >
                  Skills
                </Link>

                <Link
                  to={"/contact"}
                  className="cursor-pointer hover:border-b-2 border-orange-400"
                >
                  Contact
                </Link>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
