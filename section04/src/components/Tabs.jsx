function Tabs( { children, buttons, ButtonContainer } ){
  // 대문자로 시작하는 컨테이너 이름으로 바꾼다
  // const ButtonContainer = buttonContainer

  return <>
    <ButtonContainer>
        {buttons}
    </ButtonContainer>
    {children}
  </>
}

export default Tabs