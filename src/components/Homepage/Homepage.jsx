import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [isInstructionsVisible, setIsInstructionsVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/game'); // Redirect to the game page
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Color Guessing Game!</h1>

      <div className="instructions">
        <h2 onClick={() => setIsInstructionsVisible(!isInstructionsVisible)}>
          Instructions
        </h2>
        {isInstructionsVisible && (
          <p>
            Guess the hidden color and earn points! Each correct guess reveals
            the color, and you get a new target color for the next round.
          </p>
        )}
      </div>

      <div className="about">
        <h2 onClick={() => setIsAboutVisible(!isAboutVisible)}>
          About
        </h2>
        {isAboutVisible && (
          <p>
            This game challenges you to identify a randomly selected color.
            Keep guessing until you hit 10 rounds or choose to reset the game!
          </p>
        )}
      </div>

      <button className="start-button" onClick={handleStartGame}>
        Start Game
      </button>
    </div>
  );
};

export default HomePage;
