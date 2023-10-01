import React from 'react';
import './ProfileStyle.css';

const ProfileExperience = ({ experiences }) => {
  return (
    <div className="profile-experience">
      <h2>Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-item">
          <img className='experience-icon' src={experience.icon} alt=''></img>
          <h3>{experience.title} | {experience.company}</h3>
          <p className='profile-date'>{experience.duration}</p>
          <p>{experience.description}</p>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default ProfileExperience;