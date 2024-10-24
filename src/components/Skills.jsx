import React from "react";
import skills from "./data/skills.json";
export default function Skills() {
  return (
    <>
      <div className="mt-10">
        <h1
          className="font-bold aos-init aos-animate text-center text-[24px] md:text-[45px]"
          data-aos="fade-down"
        >
          Skills
        </h1>
        <div className="skillscontainer flex flex-wrap space-x-3 sm:space-x-0 justify-center">
          {skills.map((data, index) => {
            return (
              <span key={index}>
                <a
                  className="flex transition-all duration-300 hover:bg-neutral-800 border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4 text-white p-2 "
                  data-aos="flip-left"
                >
                  {data.skill}
                  <img src={data.path} alt="" className="w-[20px]" />
                </a>
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
