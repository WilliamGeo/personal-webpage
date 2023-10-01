import React from 'react';
import './ProfileHeader.css'

function ProfileLinkedin({ data }) {
  return (
    <div className='flex-container'>
      <div className='text-section'>
        <p>These are the Linkedin Skills obtained by taking short quizes on various technical topics.</p>
      </div>
      <div className='skill-section'>
        <table className='skill-table'>
          <thead>
            <tr>
              <th>Icon</th>
              <th>Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img className="skill-table-icon" src={item.icon} alt={item.name} />
                  </a>
                </td>
                <td>{item.name}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfileLinkedin;
