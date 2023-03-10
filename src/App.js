import React, { useState } from "react";
import "./App.css";
import Typing from "./Asset/img/typing.gif";
function App() {
  const [inputText, setInputText] = useState({ text: "" });

  const inputTextHandler = (event) => {
    const { name, value } = event.target;
    return setInputText((prevInputText) => {
      return { ...prevInputText, [name]: value };
    });
  };

  // COUNT WORDS FUNCTIONALITY:

  const countWord = (str) => {
    const wordList = str.trim().split(" ");
    const filterEmpty = wordList.filter((currentWord) => currentWord != "");
    const wordListLength = filterEmpty.length;
    console.log(wordListLength);
    // return wordListLength;
  };

  // --------------------------------------------------

  return (
    <div className="app">
      <div className="app-container">
        <h1 className="app-title">how fast do you type?</h1>
        <img src={Typing} alt="typing" />
        <textarea
          className="app-input"
          name="text"
          value={inputText.text}
          onChange={inputTextHandler}
        />
        <h2 className="app-time">time remaining: 5</h2>
        <button
          className="app-button"
          onClick={() => countWord(inputText.text)}
        >
          start
        </button>
        <h3 className="app-count">word count: 10</h3>
      </div>
    </div>
  );
}

export default App;
