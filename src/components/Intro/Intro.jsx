import React, { useContext } from "react";
import "./Intro.css";
import profile from "../../img/profile.jpg"
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
//import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
  
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! My name is</span>
          <span>Manish Kumar Gupta</span>
          <span style={{ color: darkMode ? "white" : "" }}>I'm a Full Stack Web Developer</span>
         
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <a href="">Resume</a>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="https://github.com/MANSCANS" />
          <img src={LinkedIn} alt="https://www.linkedin.com/in/manish-gupta-bb657b217" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
       
        <img src={profile} alt="" />
      
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
      
    </div>

    
    
  );
};

export default Intro;
