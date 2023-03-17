import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Typing from "./Asset/img/typing.gif";
import useWordGame from "./useWordGame";
function App() {
  const {
    wordCount,
    startTyping,
    isTimeRunning,
    textAreaRef,
    inputText,
    inputTextHandler,
    timeRemaining,
  } = useWordGame(15);
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
