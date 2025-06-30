import React from 'react';
import './LandingPage.css';
import doctorGroup from "../../assets/images/photo1.png"; // Update with your image path
import { useNavigate } from 'react-router-dom';


const LandingPage = () =>  {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h2 className="logo-text">BOOK A DOCTOR</h2>
        <div className="auth-buttons">
          <button onClick={() => navigate('/login')} className="auth-btn">Login</button>
          <button onClick={() => navigate('/signup')} className="auth-btn">Register</button>
        </div>
      </header>

      <main className="landing-main">
        <img src={doctorGroup} alt="Doctors" className="doctor-img" />
        <div className="text-content">
          <h3>Effortlessly schedule your doctor</h3>
          <p>appointments with just a few clicks, putting your health in your hands.</p>
          <button className="book-btn" onClick={() => navigate('/login')} >Book your Doctor</button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
