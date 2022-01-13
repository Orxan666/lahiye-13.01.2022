
import "./App.scss";
import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
// import React, { useRef, useState } from "react";
import MyRoutes from "./config/MyRoutes";





function App() {
  return (

    <BrowserRouter>
          <Header />
          
          <MyRoutes />
    </BrowserRouter>


  );
}

export default App;
