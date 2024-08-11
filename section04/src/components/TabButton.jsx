// 여기서부터 시작

// function TabButton({children, onSelect, isSelected}) {
function TabButton({children, isSelected, ...props }) {
  return <>
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li> 
  </>
}

export default TabButton