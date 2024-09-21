import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";

const CombineRouter = () => {
  return (
    <div className="h-[75.8vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default CombineRouter;
