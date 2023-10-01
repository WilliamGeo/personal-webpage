import React from 'react';
import './ProfileStyle.css';

const ProfileEducation = ({ education }) => {
  return (
    <div className="profile-education">
      <h2>Education</h2>
      <p>I have been lucky enough to of worked a number of very professional jobs which have shown me how to structure my work professionally. I have been able to develop my teamwork skills and work place practices specific to the jobs standards. Being taught about how the company operates.</p>
      {education.map((education, index) => (
        <div key={index} className="education-item">
          <h3>{education.school}</h3>
          <img className='education-icon' src={education.icon} alt=''/>
          <p>{education.degree}</p>
          <p className='profile-date'>{education.duration}</p>
          <p>{education.grade}</p>
          <p>{education.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileEducation;