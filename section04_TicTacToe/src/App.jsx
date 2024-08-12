import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
function App() {
  return <>
    <main>
      <div id="game-container">
        {/* Players */}
        <ol id="players">
          <Player initName="player 1" symbol="O"/>
          <Player initName="player 2" symbol="X"/>
          {/* 아래는 반복되므로 컨포넌트로 만듦 Palyer.jsx */}
          {/* <li>
            <span className='player'>
              <span className='player-name'>Player 1</span>
              <span className='player-symbol'>X</span>
            </span>
            <button>Edit</button>
          </li>
          <li>
            <span className='player'>
              <span className='player-name'>Player 1</span>
              <span className='player-symbol'>O</span>
            </span>
            <button>Edit</button>
          </li> */}
        </ol>

        {/* Game board */}
        <GameBoard />
      </div>

      LOG
    </main>
  </>
}

export default App
