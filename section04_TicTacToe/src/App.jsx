import Player from "./components/Player.jsx"

function App() {
  return <>
    <main>
      <div id="game-container">
        {/* Players */}
        <ol id="players">
          <Player name="player 1" symbol="O"/>
          <Player name="player 2" symbol="X"/>
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

        Game board
      </div>

      LOG
    </main>
  </>
}

export default App
