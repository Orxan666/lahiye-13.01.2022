import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/about" exact element={<About/>}/>
    </Routes>
  );
};

export default MyRoutes;
