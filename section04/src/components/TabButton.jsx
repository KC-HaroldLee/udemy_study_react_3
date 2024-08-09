// 여기서부터 시작

function TabButton({children, onSelect, isSelected}) { // className을 동적으로 설정하기 위해 isSelected추가함
    // 클릭 이벤트
    // document.querySelector('button').addEventListener('click', () => {
    // })
    // App.jsx로 이동
    // function handleClick() {
    //     console.log('work?')
    // }

    return <>
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li> 
    </>
}

export default TabButton