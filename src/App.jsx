import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
export default function App() {
  return (
    <>
      {/* routes */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<Aboutme />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
