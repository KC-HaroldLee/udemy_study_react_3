import { useState } from "react"

function Player( { initName, symbol } ){
  const [ isEditing, setIsEditing ] = useState(false)
  const [ playerName, setPalyerName ] = useState(initName)

  function handleEditClick(){
    // setIsEditing(!isEditing)
    // setIsEditing(isEditing ? false : true) // 신선한 방법인데?
    // useState를 변경할 때, 만약  "이전 값과 비교하여 값을 변경해야하는 것"이라면 아래와 같이 해서는 안된다.
    // setIsEditing(!isEditing) // 그래서 주석화
    // 왜냐하면 "리액트는 상태 변화에 대한 스케줄을 조정하기 때문이다 (?)"
    // 따라서 (?)함수를 전달해야한다.
    setIsEditing((editing)=>!editing)

    // 궁금하면 아래 두줄을 주석 풀어보면 됨
    // setIsEditing(!isEditing)
    // setIsEditing(!isEditing)
  }

  function handleChange(e) { // 오랜만에 보는 e , event이긴한데 e라고 써두자 언제까지 기억하는지
    // console.log(e.target.value)
    setPalyerName(e.target.value)
  }


  let editablePlayerName = <span className='player-name'>{playerName}</span>
  if (isEditing) {
    editablePlayerName = <input type="text" required defaultValue={playerName} onChange={handleChange}/> 
  }
  return <>
      <li>
      <span className='player'>
        {/* <span className='player-name'>{name}</span> */}
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit' }</button>
      {/* <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button> */}
    </li>
  </>
}

export default Player