import React from "react";
import FooterCon from "../css/Footer.styled";
import {
  SiLinkedin,
  SiGmail,
  SiGithub,
} from "react-icons/si";
import { Fade } from "react-awesome-reveal";
import { BsTelephoneFill } from "react-icons/bs";
const Footer = () => {
  return (
    <FooterCon id="footer">
      <h1 className="subTitle">Contact Me</h1>
      <div className="footerCon">
        <Fade direction="up">
          <div>
            <a
              href="https://www.linkedin.com/in/manish-gupta-bb657b217"
              target={"_blank"}
              className="links"
            >
              <span>
                <SiLinkedin />
              </span>
              <span>Linkedin</span>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/ManishGupta1908"
              target={"_blank"}
              className="links"
            >
              <span>
                <SiGithub />
              </span>
              <span>Github</span>
            </a>
          </div>
          <div>
            <a
             
              className="links"
              href="mailto:developerakky2407@gmail.com"
              target={"_blank"}
            >
              <span>
                <SiGmail />
              </span>
              <span>manscans16@gmail.com</span>
            </a>
          </div>
          <div>
            <p className="links disabled">
              <span>
                <BsTelephoneFill />
              </span>
              <span>+91 9754590579</span>
            </p>
          </div>
        </Fade>
      </div>
      <div className="credits">
        <p>
          Designed & developed by <span>Manish Kumar Gupta,</span> @ 2022
        </p>
      </div>
     
    </FooterCon>
  );
};

export default Footer;
