import { useState } from "react"

const initialGameBoard = [
  // [null, 'X', 'O'],
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function GameBoard(){
  const [gameBoard, setGameBoard] = useState(initialGameBoard) // 객체를 받을 수도 있구나

  function handleSelectSquare(e){ // 필요한 게 좀 많다...
    console.log(e.target)
    setGameBoard((prevGameBoard)=>{
      
    });
  }
  return <>
  <ol id="game-board">
    {initialGameBoard.map((row, rowIndex)=>
      <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => 
          <li key={colIndex}><button onClick={handleSelectSquare}>{playerSymbol}</button></li>
          )}
        </ol>
      </li>
    )}
  </ol>
  </>
}

export default GameBoard