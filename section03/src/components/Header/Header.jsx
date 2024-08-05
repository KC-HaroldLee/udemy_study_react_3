import sampleImg from "../../assets/react-core-concepts.png";
import './Header.css'

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

export default Header