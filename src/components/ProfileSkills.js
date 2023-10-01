import React from 'react';
import './ProfileStyle.css';

const SkillsComponent = ({ skills }) => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <p>My technical knowledge.</p>
      {Object.keys(skills).map((categoryKey) => (
        <div key={categoryKey} className="category-container">
          <h2>{categoryKey}</h2>
          <div className="skill-cards">
            {skills[categoryKey].map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="icon-container">
                  <a href={skill.url}>
                    <img className="skill-icon" src={skill.icon} alt={skill.name} />
                  </a>
                </div>
                <div className="name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <br />
    </div>
  );
};

export default SkillsComponent;

