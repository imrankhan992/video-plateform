// SuccessPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessPage.css';


function SuccessPage() {
   const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
          </svg>
        </div>
        <h1 className="success-title">Payment Successful!</h1>
        <p className="success-message">
          Thank you for supporting our community. Your contribution helps us continue providing 
          valuable self-care and beauty resources for women everywhere.
        </p>
       
        <div className="success-actions">
          <button 
            className="back-button"
            onClick={() => navigate('/')}
          >
            Return Home
          </button>
       
        </div>
        
      </div>
    </div>
  );
}

export default SuccessPage