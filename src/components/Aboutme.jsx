import React from "react";

export default function Aboutme() {
  return (
    <>
      <div className="main flex lg:flex-row flex-col lg:mt-[50px] mt-[80px]">
        <div
          className="left lg:basis-[50%] basis-[100%] p-2 rounded-2"
          data-aos="fade-right"
        >
          <img
            src="/aboutimg.png"
            alt=""
            // loading="lazy"
            className="w-[100%] h-[400px]"
          />
        </div>

        <div className="right lg:basis-[50%]">
          <h1 className="font-bold text-5xl mt-4 text-white mb-6 aos-init">
            About Me
          </h1>
          <p
            // data-aos="fade-up"
            className="text-base lg:text-lg aos-init aos-animate p-2"
          >
            I am fullstack web developer, I am proficient in fullstack
            technology, capable of building complete web applications from start
            to finish. My skill set likely includes languages and frameworks
            like HTML, CSS, JavaScript,Typescript (and popular libraries like
            React and Next), as well as server-side language like Node.js.I
            thrive on bringing ideas to life through clean, efficient code
          </p>
        </div>
      </div>
    </>
  );
}
