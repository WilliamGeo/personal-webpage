import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProfileLayout from './components/ProfileLayout';
import MarkdownPage from './components/MarkdownPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    fetch('/data.json') // Relative path to your JSON file in the public folder
      .then((response) => response.json())
      .then((data) => setProfileData(data))
      .catch((error) => console.error('Error fetching profile data:', error));
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={profileData ? <ProfileLayout profileData={profileData} /> : <p>Loading...</p>} />
          <Route path="/blog" element={<MarkdownPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
