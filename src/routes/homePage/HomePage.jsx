import React from "react";
import "./homePage.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
const HomePage = () => {
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>GEMINI AI</h1>
        <h2>Supercharge your creativity and productivity!</h2>
        <h3>
          Lorem ipsum dolor sit amet Nulla suscipit voluptates aspernatur
          repudiandae ipsam{" "}
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
          <img src="/bot.png" alt="" className="bot" />
            <TypeAnimation
              sequence={[
                
                "Search about tech ✨",
                1000, 
                "Learn new things by AI ❤️",
                1000,
                "Information about carrer 👓",
                1000,
                "Way of success 🎢",
                1000,
              ]}
              wrapper="span"
              // speed={30}
              cursor={true}
              omitDeletionAnimation={true}
              style={{ fontSize: "1yem", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Services</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
