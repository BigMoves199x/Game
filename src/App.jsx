import ColorBox from "./components/ColorBox"
import ColorOptions from "./components/ColorOptions"
import Scoreboard from "./components/Scoreboard"
import Status from "./components/Status"
import Instructions from "./components/Instructions"
import NewGameButton from "./components/NewGameButton"
import "./styles.css"

const colors = ["red", "blue", "green", "black", "purple", "orange", "brown"]

function App() {


  return (
    <>
      <div className="game-container">
        <Instructions />
        <ColorBox />
        <ColorOptions />
        <Status />
        <Scoreboard />
        <NewGameButton />
      </div>

    </>
  )
}

export default App
