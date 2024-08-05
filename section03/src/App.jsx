import sampleImg from "./assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const rand = genRandomInt(reactDescriptions.length - 1);
  console.log(rand);
  return (
    <header>
      <img src={sampleImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[rand]} React concepts you will need for almost any
        app you are going to build!
      </p>
    </header>
  );
}

function CoreConcept(probs) { // probs는 하나다!
  return (
    <>
      <li>
        <img src={probs.image}/>
        <h3>{probs.title}</h3>
        <p>{probs.desc}</p>
      </li>
    </>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept image={sampleImg} title="111" desc="aaa"/>
            <CoreConcept image={sampleImg} title="222" desc="bbb"/>
            <CoreConcept image={sampleImg} title="333" desc="ccc"/>
            <CoreConcept image={sampleImg} title="444" desc="ddd"/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
