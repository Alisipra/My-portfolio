import React from "react";

export default function Experience() {
  return (
    <>
      <div className="mt-10 lg:text-[45px] text-24 text-center">
        <span
          data-aos="fade-up"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-bold aos-init aos-animate"
        >
          Experience
        </span>
        <div className="w-100 h-[300px]">
          <div className="text-[24px] lg:text-[36px]">
            <h3 data-aos="fade-up">May 2023 - Jan 2024</h3>
            <h4 data-aos="fade-up">At Ultimate Coders</h4>
            <h4 data-aos="fade-up">Internee</h4>
            <h5 data-aos="fade-up">Frontend Developer</h5>
            <p
              className="text-[14px] lg:text-[22px] p-2 text-justify mx-[20px] "
              data-aos="zoom-in"
            >
              Developed Frontend applications using the latest technologies
              Front-end development with React.js. Styling expertise with
              Tailwind CSS and Custom CSS E-commerce Store through Multer and
              Cloudinary. Back-end development using Node.js, Express.js MongoDB
              and firebase for Database Responsive design is an approach to web
              design that ensures web pages render well
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
