import React, { useState } from "react";
import NavbarDiv from "../css/NavbarDiv.styled";

import { VscChromeClose } from "react-icons/vsc";
import { FaBars } from "react-icons/fa";
import { animateScroll, scroller } from "react-scroll";
import logo from "../assets/image/logo.png";
//import { animateTopScroll } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(false);

  const scrollTo = (toEL) => {
    scroller.scrollTo(toEL, {
      duration: 500,
      smooth: true,
      offset: -60,
    });
  };
  return (
    <NavbarDiv showMenu={showMenu}>
      <div id="nav-menu">
        <div className="logo" onClick={() => animateScroll.scrollToTop()}>
          <img src={logo} alt="" />
         
          
        </div>
        <div className="options">
          <ul>
            <li className="nav-link home"
              onClick={() => {
                animateScroll.scrollToTop();
                setShowMenu(false);
              }}
            >
              Home{" "}
            </li>
            <li className="nav-link about"
              onClick={() => {
                scrollTo("about");
                setShowMenu(false);
              }}
            >
              About
            </li>
            <li className="nav-link skills"
              onClick={() => {
                scrollTo("skills");
                setShowMenu(false);
              }}
            >
              Skills
            </li>
            <li className="nav-link projects"
              onClick={() => {
                scrollTo("projects");
                setShowMenu(false);
              }}
            >
              Projects
            </li>
            <li className="nav-link contact"
              onClick={() => {
                scrollTo("footer");
                setShowMenu(false);
              }}
            >
              Contact
            </li>
            <li id="resume-link-1" className="nav-link resume">
            <a href="https://drive.google.com/file/d/1S7BtRAfUUm3Vq2ZKTEx6cphES7QML2c8/view?usp=share_link"
                  >Resume</a>

            </li>
          </ul>
        </div>
        <div className="icons">
          {showMenu ? (
            <VscChromeClose
              className="mobile-bars"
              onClick={() => setShowMenu(!showMenu)}
              style={{ color: "#ffffff" }}
            />
          ) : (
            <FaBars
              className="mobile-bars"
              onClick={() => setShowMenu(!showMenu)}
            />
          )}
          {/* 
          <button onClick={() => setTheme(!theme)} className="themeIcon">
            {theme ? <BsMoonStarsFill /> : <BsFillSunFill />}
          </button> */}
        </div>
      </div>
    </NavbarDiv>
  );
};

export default Navbar;
