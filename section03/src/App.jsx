import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";


function App() {
  let tabContent = 'plz click a button'
  console.log('tabContent?', tabContent)
  // TabButton.jsx에 있었음
  function handleSelected(selectedButton) {
    tabContent = selectedButton
    // console.log('work?', tabContent)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
            {/* 아래와 같이 하면 오래 걸린다. (뭐 어차피 반복문 돌리겠지만) */}
            {/* <CoreConcept 
              title={CORE_CONCEPTS[0].title} 
              desc={CORE_CONCEPTS[0].description} 
              image={CORE_CONCEPTS[0].image}/> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            {/* 함수의 포인트를 넘긴다는 느낌으로 기억하자 */}
            {/* <TabButton onSelect={handleSelected}>Component!</TabButton>  */}
            {/* 문제는 위처럼 하면 함수 자체에 인자를 넘길 수 없다는 단점이 있다. */}
            <TabButton onSelect={() => handleSelected('Component')}>Component!</TabButton> 
            <TabButton onSelect={() => handleSelected('JSX')}>JSX!</TabButton>
            <TabButton onSelect={() => handleSelected('Probs')}>Probs!</TabButton>
            <TabButton onSelect={() => handleSelected('State')}>State!</TabButton>
            {/* 이런 방법도 있다느 정도만 */}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
