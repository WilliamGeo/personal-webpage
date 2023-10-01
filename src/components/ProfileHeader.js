import React from 'react';
import './ProfileHeader.css'

const ProfileHeader = ({ profilePicture, name, age, description, headline, location }) => {
  return (
    <div className="profile-header">
      <img src={profilePicture} alt={`${name}'s Profile`} className="profile-picture" />
      <h1>{name}</h1>
      <p>{headline} | {location}</p>
      <br />
      <p>Hello, I am {name}. I am {age} years old from {location}. {description}</p>
      <br />
    </div>
  );
};

export default ProfileHeader;