// FailedPaymentPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FailedPaymentPage.css';

const FailedPaymentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="failed-container">
      <div className="failed-card">
        <div className="failed-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
          </svg>
        </div>
        <h1 className="failed-title">Payment Unsuccessful</h1>
        <p className="failed-message">
          We couldn't process your donation. Please check your payment details and try again.
        </p>
        
        <div className="failed-reasons">
          <h3>Possible reasons:</h3>
          <ul>
            <li>Insufficient funds in your account</li>
            <li>Incorrect card details entered</li>
            <li>Card expired or not supported</li>
            <li>Temporary bank authorization issue</li>
          </ul>
        </div>

        <div className="failed-actions">
          <button 
            className="try-again-button"
            onClick={() => navigate('/donation')}
          >
            Try Again
          </button>
          <button 
            className="contact-button"
            onClick={() => navigate('/')}
          >
           Home
          </button>
        </div>

        <div className="failed-note">
          <p>
            If you continue experiencing issues, please contact your bank or use a different payment method. 
            No funds were deducted from your account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FailedPaymentPage;