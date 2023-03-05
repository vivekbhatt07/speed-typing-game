import "./App.css";
import Typing from "./Asset/img/typing.gif";
function App() {
  return (
    <div className="app">
      <div className="app-container">
        <h1 className="app-title">how fast do you type?</h1>
        <img src={Typing} alt="typing" />
        <textarea className="app-input" />
        <h2 className="app-time">time remaining: 5</h2>
        <button className="app-button">start</button>
        <h3 className="app-count">word count: 10</h3>
      </div>
    </div>
  );
}

export default App;
