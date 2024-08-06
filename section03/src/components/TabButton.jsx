// 여기서부터 시작

function TabButton({children, onSelect}) {
    // 클릭 이벤트
    // document.querySelector('button').addEventListener('click', () => {
    // })
    // App.jsx로 이동
    // function handleClick() {
    //     console.log('work?')
    // }

    return <>
        <li>
            <button onClick={onSelect}>{children}</button>
        </li> 
    </>
}

export default TabButton