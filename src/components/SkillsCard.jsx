import React from "react";
import "../css/Skills.css";

export const SkillsCard = ({img,name}) => {
  return (
    <div className="skill-cards">
      <img src={img} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
