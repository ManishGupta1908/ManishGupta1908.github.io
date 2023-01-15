import React, { useState } from "react";
import ProjectsCon from "../css/Projects.styled";
import Singleproject from "./Signleproject";
//import Resume from "./Resume/Resume";
import Indiegogo from "../assets/Project-img/Indiegogo.png";
import Modesen from "../assets/Project-img/Modesen.png";
import Nordstrom from "../assets/Project-img/Nordstrom.png";
import googleProject from "../assets/Project-img/google-project.png";
//import cricInfo from "../assets/Project-img/cricInfo.PNG"


let projectData = [
  {
    id: 1,
    heroImage: `${Modesen }`,
    title: "Modesens Clone",
    desc: "Clone of Modesens is an e-commerce website that allows users to purchase goods and services through the internet. Includes features such as product Page, shopping carts, payment gateway, and customer account management. The goal of this website is to provide a seamless and secure online shopping experience for users.",
    team: "Indivisual Project build in 3 days",
    git: "https://github.com/ManishGupta1908/waggish-mountain-218/tree/main/my-app",
    deployed: "https://exquisite-beijinho-9fb56d.netlify.app/",
    techStack:
      " React | Redux | HTML5 | CSS3 | Javascript | JSON Server | git | Google Auth",
    
  },
  {
    id: 2,
    heroImage: `${googleProject}`,
    title: "Learn With Google Clone",
    desc: "A digital learning platform by Google, where user can sigin, login, check for courses, takes live training and gets certification.",
    team: "A collaborative project, built in 5 days by team of 5 members.",
    git: "https://github.com/imrangadwal10/zonked-instrument-5361",
    deployed: "https://singular-parfait-38f0fc.netlify.app/",
    techStack:
      " HTML5 | CSS3 | Javascript | JSON Server | git",
   
  },
  
  {
    id: 3,
    heroImage:`${Indiegogo}`,
    title: "Indiegogo Clone",
    desc: "It is a crowdfunding website that allows individuals and organizations to raise money for a variety of projects and causes. The platform allows creators to set a funding goal and offer perks or rewards to backers in exchange for their financial support.",
    team: "A collaborative project, built in 5 days by team of 5 members.",
    git: "https://github.com/3003abhishek/daily-wound-486",
    deployed: "https://imaginative-starlight-13302e.netlify.app/",
    techStack:
      "HTML5 | CSS3 | Javascript | Bootstrap | JSON Server | git",
   
  },

  {
    id: 4,
    heroImage:`${Nordstrom}`,
    title: "Nordstrom Clone",
    desc: "An E-Commerce website where user can login, signup,view products with sorting and filter features, purchase goods and services, add product to cart and place order after payment",
    team: "Solo Project build in 4 days",
    git: "https://github.com/ManishGupta1908/-best-chicken-1872",
    deployed: "https://graceful-sawine-0efeaf.netlify.app/",
    techStack: "HTML5 | CSS3 | Javascript | git",
   
  },  
];

const Projects = () => {
  const [data, setData] = useState(projectData);

  return (
    <>   
     <ProjectsCon id="projects">
      <h1 style={{ color: "white" }} className="subTitle">Projects</h1>
      <div className="projectCon">
        {data.map((el) => {
          return <Singleproject key={el.id} {...el} />;
        })}
      </div>
    </ProjectsCon>
    </>
  );
};

export default Projects;
