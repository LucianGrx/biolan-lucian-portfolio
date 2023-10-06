import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";


const SocialMedia = () => {
  return <div className="app__social">
    <div className="social">
      <a href="https://www.linkedin.com/in/biolan-lucian/" target="_blank" rel="noreferrer">
      <BsLinkedin />
      </a>
        
    </div>
    <div>
      <a href="https://www.instagram.com/luciangrrr/" target="_blank" rel="noreferrer">
      <BsGithub />
      </a>
        
    </div>
  </div>;
};

export default SocialMedia;
