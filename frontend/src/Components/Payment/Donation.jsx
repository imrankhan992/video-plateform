// DonationPage.jsx
import React from 'react';
import "./DonationPage.css"; 
import axios from 'axios';

const DonationPage = () => {
  const handleDonate = async (amount) => {
    const res = await axios.post('http://localhost:3000/api/create-checkout-session', { amount });
    window.location.href = res.data.url; // Redirect to Stripe Checkout
  };

  return (
    <div className="donation-container">
      <div className="donation-header">
        <h1>Support Our Community</h1>
        <div className="header-divider"></div>
        <p className="intro-text">
          This website is more than just another video sharing platform – it's a space uniquely designed 
          to provide women with innovative resources for self-care and beauty care.
        </p>
        <p className="support-text">
          As a growing platform, we rely on your support to continue developing valuable content and features. 
          If you've found our resources helpful, please consider making a donation.
        </p>
      </div>

      <div className="donation-cards">
        {[5, 10, 20, 40].map(amount => (
          <div className="donation-card" key={amount}>
            <div className="card-header">
              <h3>Supporter Tier</h3>
              <p className="donation-amount">${amount}</p>
              <div className="amount-divider"></div>
            </div>
            
            <div className="card-benefits">
              <ul>
                <li>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                  </svg>
                  <span>Exclusive content access</span>
                </li>
                <li>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                  </svg>
                  <span>Early feature previews</span>
                </li>
                <li>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                  </svg>
                  <span>Community recognition</span>
                </li>
              </ul>
            </div>
            
            <button className="donate-button" onClick={() => handleDonate(amount)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
              </svg>
              <span>Support Now</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationPage;