import { useState } from "react"

const initialGameBoard = [
  // [null, 'X', 'O'],
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function GameBoard({ onSelectSquare, activePlayerSymbol}){ // onSelectSquare은 함수다
  // 쫘악 주석처리 
  // const [gameBoard, setGameBoard] = useState(initialGameBoard) // 객체를 받을 수도 있구나

  // function handleSelectSquare(rowIndex, colIndex){ // 필요한 게 좀 많다...
  //   setGameBoard((prevGameBoard)=>{
  //     // const updatedBoard =[...prevGameBoard] // 1. 복사하고
  //     console.log("click! ", rowIndex, colIndex)
  //     const updatedBoard =[...prevGameBoard.map(innerArr => [...innerArr])] // 1. 복사하고
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol
  //     return updatedBoard
  //     // prevGameBoard[rowIndex][colIndex] = 'X' // 이것만 쓰는 것은 추천하지 않는 방법이란다
  //     /* 만약 상태가 객체 혹은 배열이라면 이는 자바스크립트 내의 참조 값입니다
  //         그러므로 이런 방식으로 업데이트한다면 메모리 속의 기존 값을 바로 변경하게 되는데
  //         이 시점은 리액트가 실행하는 예정된 상태 업데이트보다 이전에 일어나게 됩니다
  //         그러므로 알 수 없는 버그나 부작용이 생길 수 있습니다 이것은 앱 내부의 한 상태에 대해
  //         상태 업데이트가 여러 개 예정되어 있을 때 일어납니다 그러므로 이 참조 값에 대해
  //         더 알고 싶다면 이 강의에 링크를 하나 첨부해 두겠습니다 
  //         링크 : https://academind.com/tutorials/reference-vs-primitive-values*/
  //   });
  // onSelectSquare()
  // }
  
  return <>
  <ol id="game-board">
    {gameBoard.map((row, rowIndex)=>
      <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => 
          // 함수 이름만으로는 인수를 전달 할 수 없다. 따라서
          // <li key={colIndex}><button onClick={handleSelectSquare}>{playerSymbol}</button></li>
          <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>
          )}
        </ol>
      </li>
    )}
  </ol>
  </>
}

export default GameBoard