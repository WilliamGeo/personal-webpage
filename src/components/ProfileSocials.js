import React from 'react';
import './ProfileStyle.css';

const ProfileSocials = ({ socials }) => {
  return (
    <ul className="profile-socials">
      {socials.map((socials, index) => (
        <li key={index}>
          <a href={socials.url}><img className='social-icon' src={socials.icon} alt={socials.name}></img></a>
        </li>
      ))}
    </ul>
  );
};

export default ProfileSocials;