import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx"
import { useState } from "react"

function App() {
  const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurns, setGameTurns] = useState()
  // Log에 들어갈 정보를 state를 따로 만들 수도 있지만, 이미 GameBoard컴포넌트에서 "끌어올릴 수"있는 정보이기에
  // 만들지 않을 예정 

  function handleSelectSquare(){ // 이 함수는 GameBoard컴포넌트에 전달할 예정이다 
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns()
  }
  return <>
    <main>
      <div id="game-container">
        {/* Players */}
        <ol id="players" className="highlight-player">
          <Player initName="player 1" symbol="O" isActive={activePlayer==='O'}/>
          <Player initName="player 2" symbol="X" isActive={activePlayer==='X'}/>
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
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>

      <Log></Log>
    </main>
  </>
}

export default App
