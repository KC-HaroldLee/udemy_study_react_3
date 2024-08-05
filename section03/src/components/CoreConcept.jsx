// function CoreConcept(probs) { // probs는 하나다!
function CoreConcept({ image, title, desc }) { // 하지만 분리 또한 가능하다. probs를 분리한다고 생각하면된다.
    // 하지만 위에서처럼 분리 할 경우 모든 이름을 맞춰줘야함
    return (
      <>
        <li>
          <img src={image}/>
          <h3>{title}</h3>
          <p>{desc}</p>
        </li>
      </>
    );
  }

export default CoreConcept