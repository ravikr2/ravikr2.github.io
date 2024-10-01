import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../css/Section.css";
import image from "../assets/images/rocket.png";
import arrow from "../assets/images/back-button.png";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const Section = () => {
  const [text] = useTypewriter({
    words: ["Full Stack WebDeveloper", "Web Designer", "Video Editor"],
    loop: {},
  });
  return (
    <container>
      <div className="section1">
        <div className="left-side">
          <div className="left-side-tagline">
            <span className="tagline">Welcome to my Portfolio</span>
          </div>
          <h1 className="left-side-name">Hi I am Ravi </h1>
          <h1>
            <span style={{ color: "white" }}>{text}</span>
            <span style={{ color: "blue" }}>
              <Cursor cursorColor="blue" cursorStyle=">" />
            </span>
          </h1>
          <p>
            My fullname is Saidnazarova Odinanabonu. I'm 15 years old. I study
            249-school in 10th grade.I am a front-end web developer. I can make
            the website more, more interactive with web animation I study at Web
            Brain Academy group G5.
          </p>
          <div className="lets-connect-button-div">
            {" "}
            <button>Let's Connect</button>
            <div className="arrow">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
        <div className="right-side">
          <img src={image} alt="profile_logo" />
        </div>
      </div>
      <div className="section2">
        <div className="skills">
          <div className="name">Skills</div>
          <Skills />
          <div className="radio">
            <input id="radio1" type="radio" />
            <input id="radio2" type="radio" />
            <input id="radio3" type="radio" />
          </div>
        </div>
      </div>
    </container>
  );
};
