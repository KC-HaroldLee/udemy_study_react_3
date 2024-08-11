// CoreConcepts.jsx, Example.jsx의 유사한 구조를 합치기 위한 컴포넌트

function Section({ title, children , ...props}) { 
  //...props는 파이썬의 **kwargs로 생각해보자 일단,
  //이름을 지정하지 않은 prop들을 뭉쳐온다.
  return <>
    {/* <section id={props.id}> // 이렇게 해도 되지만 */}
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  </>
} 

export default Section