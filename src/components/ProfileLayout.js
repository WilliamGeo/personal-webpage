import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileSocials from './ProfileSocials';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileSkills from './ProfileSkills';
import ProfileLinkedin from './ProfileLinkedin';

const ProfileLayout = ({ profileData }) => {
  const { name, age, description, headline, location, experiences, education, socials, skills, profilePicture, certifications } = profileData;
  //Import the values from the JSON to each individual section
  return (
    <div className="profile-layout">
      <ProfileHeader
        name={name}
        age={age}
        description={description}
        headline={headline}
        location={location}
        profilePicture={profilePicture} // Pass the profile picture URL here
      />
      <ProfileSocials socials={socials} />
      <ProfileExperience experiences={experiences} />
      <ProfileEducation education={education} />
      <ProfileSkills skills={skills} />
      <ProfileLinkedin data={certifications} />
      <br />
    </div>
  );
};

export default ProfileLayout;
