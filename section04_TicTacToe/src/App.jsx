import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations"


function deriveActivePlayer(gameTurns) {
  let curPlayer = 'X' // 일단 두고
  if (gameTurns.length > 0 && gameTurns[0].player ==='X') {
    curPlayer = 'O'
  } //가장 최근의
  return curPlayer
}

function App() {
  // const [activePlayer, setActivePlayer] = useState('X')  // 필수적이지 않은 것이 되어버림
  const [gameTurns, setGameTurns] = useState([])
  const [hasWinner, setHasWinner] = useState(false)

  // Log에 들어갈 정보를 state를 따로 만들 수도 있지만, 이미 GameBoard컴포넌트에서 "끌어올릴 수"있는 정보이기에
  // 만들지 않을 예정 

    const curPlayer = deriveActivePlayer(gameTurns)

  function handleSelectSquare(rowIndex, colIndex){ // 이 함수는 GameBoard컴포넌트에 전달할 예정이다 
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')

    // 펑션바깥으로 뺌
    // let curPlayer = 'X' // 일단 두고
    // if (prevTurns.length > 0 && prevTurns[0].player ==='X') {
    //   curPlayer = 'O'
    // } //가장 최근의


    setGameTurns(prevTurns => {

        const updatedTurns = [{ square : {row : rowIndex, col : colIndex},
                                // player : activePlayer }
                                player : curPlayer }
                                , ...prevTurns] // 불변한 값을 위하여! 
          
        console.log("updatedTurns", updatedTurns)
        return updatedTurns
      }
    )
  }

  return <>
    <main>
      <div id="game-container">
        {/* Players */}
        <ol id="players" className="highlight-player">
          <Player initName="player 1" symbol="O" isActive={curPlayer==='O'}/>
          <Player initName="player 2" symbol="X" isActive={curPlayer==='X'}/>
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
        <GameBoard onSelectSquare={handleSelectSquare}
         turns={gameTurns}/>
      </div>

      <Log turns={gameTurns}/>
    </main>
  </>
}

export default App
