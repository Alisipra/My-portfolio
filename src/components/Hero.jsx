import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="main flex md:flex-row flex-col">
        {/* left div */}
        <div
          className="col-span-7 px-12  md:px-14 text-center sm:text-left"
          data-aos="fade-up"
        >
          <p className="text-xl mt-6 md:mt-12  sm:text-2xl md:text-3xl  text-white  tracking-wider">
            Hello, I'm
          </p>
          <p className="text-3xl  tracking-wide sm:text-3xl md:text-4xl lg:text-6xl bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text font-serif font-bold   md:mt-7 lg:mt-8 mt-4 ">
            Ali Ijaz
          </p>
          <h1 className=" text-2xl mt-4  sm:text-3xl md:text-4xl  lg:text-5xl  text-white font-semibold md:mt-5  ">
            <TypeAnimation
              sequence={[
                "WEB DEVELOPER",
                3000,
                "WEB DESIGNER",
                3000,
                "FULLSTACK DEVELOPER",
                3000,
                "MERN DEVELOPER",
                3000,
              ]}
              wrapper="span"
              speed={20}
              //   style={{ fontSize: "46px", display: "inline-block" }}
              className="lg:text-[43px] lg:inline-block text-[24px]"
              repeat={Infinity}
            />
          </h1>
          <h1
            data-aos="fade-up"
            className="text-[#ADB7BE] md:mt-4 mt-4 text-base sm:text-lg lg:text-xl aos-init aos-animate"
          >
            <p>Hey I am Ali, an experienced web developer committed</p>
            to building responsive websites that engage and inspire
          </h1>
          <div>
            <a
              data-aos="fade-right"
              href="https://github.com/Alisipra"
              className="flex items-center justify-center mt-8 px-6 py-3 w-full sm:w-fit rounded-md mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white hover:scale-105 aos-init aos-animate"
            >
              Github Profile{" "}
            </a>
          </div>
        </div>
        {/* right div */}
        <div
          className="bg-[#181818]  rounded-full w-[300px] h-[300px] lg:w-[400] lg:h-[400] relative ml-4 top-12 lg:left-[2%] left-[10%] p-4"
          data-aos="fade-up"
        >
          <img
            src="/profileimg.jpg"
            alt=""
            className="rounded-[100%] border-8	 border-yellow-400"
          />
        </div>
      </div>
    </>
  );
}
