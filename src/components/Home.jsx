import React from "react";

import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Hero from "./Hero";
export default function Home() {
  return (
    <>
      <Hero />
      <Aboutme />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
