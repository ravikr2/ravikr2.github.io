import React from "react";
import { SkillsCard } from "./SkillsCard";
import "../css/Skills.css";
import html from "../assets/skills/html (1).png";
import js from "../assets/skills/js-file.png";
import css from "../assets/skills/css-3.png";
import react from "../assets/skills/atom (1).png";
import node from "../assets/skills/nodejs.png";
import mongo from "../assets/skills/mongodb-tutorial.jpg";
import git from "../assets/skills/git.png";
import github from "../assets/skills/github.png";
import photoshop from "../assets/skills/adobe-photoshop.png";
import videoediting from "../assets/skills/videoEditing.png"

export const Skills = () => {
  return (
    <div className="skills-image">
      <div className="skills-row1">
        <SkillsCard img={html} name="Html" />
        <SkillsCard img={js} name="Java Script" />
        <SkillsCard img={css} name="CSS" />
        <SkillsCard img={react} name="React" />
      </div>
      <div className="skills-row2">
        <SkillsCard img={node} name="Node" />
        <SkillsCard img={mongo} name="Mongo Db" />
        <SkillsCard img={git} name="Git" />
        <SkillsCard img={github} name="Git-Hub" />
      </div>
      <div className="skills-row1">
        <SkillsCard img={html} name="Html" />
        <SkillsCard img={js} name="Java Script" />
        <SkillsCard img={css} name="CSS" />
        <SkillsCard img={react} name="React" />
      </div>
      <div className="skills-row2">
        <SkillsCard img={node} name="Node" />
        <SkillsCard img={mongo} name="Mongo Db" />
        <SkillsCard img={git} name="Git" />
        <SkillsCard img={github} name="Git-Hub" />
      </div>
    </div>
    
    
  );
};
