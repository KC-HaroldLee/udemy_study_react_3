// import sampleImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

// const reactDescriptions = ["Fundamental", "Crucial", "Core"];

// 옮김 그리고 가져옴
import Header from "./components/Header/Header";
// function genRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }

// function Header() {
//   const rand = genRandomInt(reactDescriptions.length - 1);
//   console.log(rand);
//   return (
//     <header>
//       <img src={sampleImg} alt="Stylized atom" />
//       <h1>React Essentials</h1>
//       <p>
//         {reactDescriptions[rand]} React concepts you will need for almost any
//         app you are going to build!
//       </p>
//     </header>
//   );
// }

import CoreConcept from "./components/CoreConcept";
// // function CoreConcept(probs) { // probs는 하나다!
// function CoreConcept({ image, title, desc }) { // 하지만 분리 또한 가능하다. probs를 분리한다고 생각하면된다.
//   // 하지만 위에서처럼 분리 할 경우 모든 이름을 맞춰줘야함
//   return (
//     <>
//       <li>
//         <img src={image}/>
//         <h3>{title}</h3>
//         <p>{desc}</p>
//       </li>
//     </>
//   );
// }

function App() {
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
        <section id="example">
          <menu>

          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
