import { useState } from "react";
import ColorBox from "./components/ColorBox";
import ColorOptions from "./components/ColorOptions";
import Scoreboard from "./components/Scoreboard";
import Status from "./components/Status";
import Instructions from "./components/Instructions";
import NewGameButton from "./components/NewGameButton";
import "./styles.css";

const colors = ["red", "blue", "green", "black", "purple", "orange"];

function App() {
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("");
  const [guessCount, setGuessCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function handleGuess(color) {
    if (gameOver) return; 

    if (color === targetColor) {
      setScore(score + 2);
      setStatus("✅"); 
    } else {
      setStatus("❌");
    }

    // Clear the status after 2 seconds
    setTimeout(() => {
      setStatus("");
    }, 2000);

    // Increment guess count
    setGuessCount(guessCount + 1);

    if (guessCount + 1 === 10) {
      setGameOver(true);
      setStatus(`Game Over! Final Score: ${score + (color === targetColor ? 1 : 0)}`);
    } else {
      // Set new target color for the next round
      setTargetColor(getRandomColor());
    }
  }


  function resetGame() {
    setScore(0);
    setGuessCount(0);
    setGameOver(false);
    setTargetColor(getRandomColor());
    setStatus("");
  }

  return (
    <div className="game-container">
      <Instructions />
      <ColorBox color={targetColor} />
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
