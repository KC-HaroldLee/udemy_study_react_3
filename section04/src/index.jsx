import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// ReactDOM.createRoot(entryPoint).render(React.createElement(App)); // 이거도 된다. jsx안쓸경우
/* 컴포넌트에 하나의 부모 태그가 있어야한다는 의미를 생각해보면 재밌는 걸 알 수 있다.ㅋㅋ */