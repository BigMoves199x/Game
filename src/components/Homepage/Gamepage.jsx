import { useState } from "react";
import ColorBox from "../ColorBox";
import ColorOptions from "../ColorOptions";
import Scoreboard from "../Scoreboard";
import Status from "../Status";
import Instructions from "../Instructions";
import NewGameButton from "../NewGameButton";
import "../styles.css";

const colors = ["red", "blue", "green", "indigo", "purple", "orange"];

function App() {
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("");
  const [guessCount, setGuessCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false); // Track if color is revealed

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function handleGuess(color) {
    if (gameOver) return;

    if (color === targetColor) {
      setScore(score + 2);
      setStatus("✅ Correct");
      setIsRevealed(true); // Reveal the color on correct guess
    } else {
      setStatus("❌ Try again!");
    }

    setTimeout(() => {
      setStatus("");
      if (color !== targetColor) {
        setTargetColor(getRandomColor()); // Set a new color if incorrect
        setIsRevealed(false); // Hide again for the next round
      }
    }, 4000);

    setGuessCount(guessCount + 1);

    if (guessCount + 1 === 10) {
      setGameOver(true);
      setStatus(`Game Over! Final Score: ${score + (color === targetColor ? 2 : 0)}`);
    } else {
      // Hide color after 4 seconds and pick a new target color
      setTimeout(() => {
        setIsRevealed(false);
       
        setTargetColor(getRandomColor());
      }, 2000);
    }
  }

  function resetGame() {
    setScore(0);
    setGuessCount(0);
    setGameOver(false);
    setTargetColor(getRandomColor());
    setStatus("");
    setIsRevealed(false);
  }

  return (
    <div className="game-container">
      <Instructions />
      <ColorBox color={targetColor} isRevealed={isRevealed} />
      <hr className="line" />
      <ColorOptions colors={colors} onGuess={handleGuess} disabled={gameOver} />
      <hr className="line" />
      <Status status={status} />
      <Scoreboard score={score} />
      <NewGameButton onReset={resetGame} />
    </div>
  );
}

export default App;
