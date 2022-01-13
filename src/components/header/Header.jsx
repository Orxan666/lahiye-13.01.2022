import React, { useEffect, useState } from "react";
import logo from "../../image/compar-light.svg";
import darkLogo from "../../image/compar-dark.svg";
import { Link } from "react-router-dom";
import "./header.scss";
const Header = () => {
  const [activeClass, setActiveClass] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setActiveClass("active");
      } else {
        setActiveClass("");
      }
    });
  });
  return (
    // HEADER START
    <header className={`header ${activeClass}`}>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-auto">
            <nav className="menu">
              <ul className="d-flex list-unstyled m-0">
                <li className="drop-item">
                  <Link to="/tedris-proqramlari">Tədris Proqramları</Link>
                  <ul className="dropped-menu">  
                    <li>
                      <Link to="">Qrafik və Web-Dizayn</Link>
                    </li>
                    <li>
                      <Link to="">Front-End</Link>
                    </li>

                    <li>
                      <Link to="">Back-End(Pyton)</Link>
                    </li>
                    <li>
                      <Link to="">Back-End(C#)</Link>
                    </li>
                    <li>
                      <Link to="">Full-Stack</Link>
                    </li>
                  </ul>
                </li>
                <li className="drop-item">
                  <Link to="/haqqimizda">Akademiya</Link>
                  <ul className="dropped-menu">
                    <li>
                      <Link to="/haqqimizda">Haqqımızda</Link>
                    </li>
                    <li>
                      <Link to="/xeberler">Xəbərlər</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/karyera">Karyera</Link>
                </li>
                <li>
                  <Link to="/elaqe">Əlaqə</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-auto">
            <img
              width="120"
              className="img-fluid"
              src={activeClass === "active" ? darkLogo : logo}
              alt="Compar logo"
            />
          </div>
          <div className="col-auto">
            <div className="header-right">
              <ul className="d-flex list-unstyled align-items-center justify-content-end m-0">
                <li className="nav-phone">
                  <Link to="">
                    (+994 50) 800 63 53
                    <i aria-hidden="true" className="phone icon"></i>
                  </Link>
                </li>
                <li className="drop-item">
                  <i aria-hidden="true" className="search icon"></i>
                  <ul className="dropped-menu right drop-search">
                    <li>
                      <span>Search</span>
                      <div className="d-flex search-input align-items-center">
                        <input placeholder="Search" type="text" />
                        <i aria-hidden="true" className="search icon"></i>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <i aria-hidden="true" className="bars icon"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    // HEADER END
  );
};

export default Header;
