import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Typing from "./Asset/img/typing.gif";
function App() {
  const START_COUNT = 5;

  const [inputText, setInputText] = useState({ text: "" });
  const [timeRemaining, setTimeRemaining] = useState(START_COUNT);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const inputTextHandler = (event) => {
    const { name, value } = event.target;
    return setInputText((prevInputText) => {
      return { ...prevInputText, [name]: value };
    });
  };

  const textAreaRef = useRef(null);

  // GAME START FUNCTIONALITY:

  const startTyping = () => {
    setIsTimeRunning(true);
    setTimeRemaining(START_COUNT);
    setInputText((prevInputText) => ({ ...prevInputText, text: "" }));
    setWordCount(0);
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  };

  const endTyping = () => {
    setIsTimeRunning(false);
    const numberOfWords = countWord(inputText.text);
    setWordCount(numberOfWords);
  };

  // COUNT WORDS FUNCTIONALITY:

  const countWord = (str) => {
    const wordList = str.trim().split(" ");
    const filterEmpty = wordList.filter((currentWord) => currentWord != "");
    const wordListLength = filterEmpty.length;
    return wordListLength;
  };

  // --------------------------------------------------

  // COUNTDOWN FUNCTIONALITY:

  useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining == 0) {
      endTyping();
    }
  }, [timeRemaining, isTimeRunning]);
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
          disabled={!isTimeRunning}
          ref={textAreaRef}
        />
        <h2 className="app-time">time remaining: {timeRemaining}</h2>
        <button
          className="app-button"
          onClick={() => startTyping()}
          disabled={isTimeRunning}
        >
          start
        </button>
        <h3 className="app-count">word count: {wordCount}</h3>
      </div>
    </div>
  );
}

export default App;
