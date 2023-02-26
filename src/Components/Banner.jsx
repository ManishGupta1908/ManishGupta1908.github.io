import React, { useEffect, useState } from "react";
import BannerCon from "../css/Banner.styled";
import Typewriter from "typewriter-effect";
import { BsLinkedin, BsGithub } from "react-icons/bs";
 
 import profile from "../assets/image/profile.jpg";
 
import { SiGmail } from "react-icons/si";

const Banner = () => {
  return (
    <BannerCon>
      <div id="home"  className="bannerContainer">
        <div  className="typeWirter">
          <div  className="introMyself">

            <p id="user-detail-name" className="heading">Hi 👋, My name is Manish Gupta,</p>
            <div className="subHeading">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developer !",
                    "Frontend Developer !",
                    "MERN Stack Developer",
    
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 200,
                }}
              />
            </div>
           
            <div className="typeButtons">
              <button  id="resume-button-2" className="learn-more">
                <a
                 
                  href={
                    "https://drive.google.com/file/d/1S7BtRAfUUm3Vq2ZKTEx6cphES7QML2c8/view?usp=share_link"
                  }
                  target={"_blank"}
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Resume</span>
                </a>
              </button>
              {/* <button>Resume</button> */}
            </div>
            <div className="socialIconContainer">
              <a  id="contact-linkedin"
                href="https://www.linkedin.com/in/manish-gupta-bb657b217"
                target={"_blank"}
              >
                <BsLinkedin className="socialIcons" />
              </a>
              <a id="contact-github" href="https://github.com/ManishGupta1908" target={"_blank"}>
                <BsGithub className="socialIcons" />
              </a>
              
            </div>
          </div>
        </div>

        <div className="home-img">
          <img
            src={profile}
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </BannerCon>
  );
};

export default Banner;
