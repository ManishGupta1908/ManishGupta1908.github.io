import React from "react";
import AboutDiv from "../css/About.styled";
import { Fade } from "react-awesome-reveal";
//import Aboutme from "../assets/icons/aboutme.svg";
//import AboutPic from "../assets/image/aboutPic.webp";
const About = () => {
  return (
    <AboutDiv id="about">
      <div className="conatainerAbout">
       
        <Fade direction="left" className="iconContainer">
          <img className="iconAboutMe" src="https://media.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif" alt="" />
        </Fade>
        {/* </div> */}

        <div className="aboutDesc">
          <Fade direction="left">
            <h1 className="subTitle">About me</h1>
            <p className="desc">
           Aspiring full stack web developer having knowledge in HTML, CSS, JavaScript, React, Redux, Chakra UI,
           MongoDB, Data Structures and Algorithms. I have made some individual and collabrative projects and gain
           some experiance as well as acquiring more knowledge. Now I'm Looking forward to making a significant 
           contribution to an organization.
            </p>
          </Fade>
        </div>
      </div>
    </AboutDiv>
  );
};

export default About;

