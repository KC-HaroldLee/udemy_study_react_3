import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react"; // use~는 Hooks, 
// Hooks는 컴포넌트 안에서 호출되어야 한다.
// 가장 탑레벨에서만 된다.
// useState는 컴포넌트 간의 연결을 관리해준다. 변화감지, 재검토?
import {EXAMPLES} from './data.js'


// useState() // 이건 안되는 건가??????
function App() {
  // const stateArray = useState('Plz clck btn') 
  // const [ selectedTopic, setSelectedTopic ] = useState('Plz clck btn') 
  // const [ selectedTopic, setSelectedTopic ] = useState('components')  // 초기값이 있어야했다.
  const [ selectedTopic, setSelectedTopic ] = useState('') 
  // console.log (selectedTopic)
  // console.log (setSelectedTopic)
  // 앞에껀 변수 뒤에껀 함수(글씨 색이 다름)

  // let tabContent = 'plz click a button'
  // console.log('tabContent?', tabContent)
  // TabButton.jsx에 있었음
  function handleSelected(selectedButton) {
    // tabContent = selectedButton // useState를 사용게 되면서 삭제
    // console.log('work?', tabContent)
    setSelectedTopic(selectedButton)
    console.log('work?', selectedTopic)
  }

let tabContent = <p>Plz Slct a tpc</p>

  if (selectedTopic) {
    tabContent = <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => 
              <CoreConcept key={conceptItem.title}{...conceptItem}></CoreConcept>) // 억지로라도 key prob을 줘야한다.
            }
            {/* 아래를 위 처럼 반복문으로 만듦 */}
            {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}
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
            <TabButton isSelected={selectedTopic==='components'} onSelect={() => handleSelected('components')}>Component!</TabButton> 
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={() => handleSelected('jsx')}>JSX!</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={() => handleSelected('props')}>Probs!</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={() => handleSelected('state')}>State!</TabButton>
            {/* 이런 방법도 있다느 정도만 */}
          </menu>

          {tabContent}
          {/* 이방법 말고 상위로 올림 */}
          {/* {!selectedTopic // 삼항 연산자를 사용할 경우
                ? <p>Plz Slct a tpc</p> 
                : null} */}
          {/* {!selectedTopic &&
                 <p>Plz Slct a tpc</p>}

          {selectedTopic &&
            <div id="tab-content">
              {selectedTopic}
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
          </div>} */}

        </section>
      </main>
    </div>
  );
}

export default App;
