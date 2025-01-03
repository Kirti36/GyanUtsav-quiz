import React from 'react';
import '../App.css';

const EndScreen = () => {
  return (
    <div className="end-screen-container">
      <h2>🎉 Congratulations! 🎉</h2>
      <p>You’ve successfully completed the quiz!</p>
      <button className="home-button" onClick={() => window.location.href = '/'}>
        Go to Home
      </button>
    </div>
  );
};

export default EndScreen;
