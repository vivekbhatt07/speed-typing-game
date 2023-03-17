import { useState, useEffect, useRef } from "react";

const useWordGame = (count = 10) => {
  const [inputText, setInputText] = useState({ text: "" });
  const [timeRemaining, setTimeRemaining] = useState(count);
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
    setTimeRemaining(count);
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
  return {
    wordCount,
    startTyping,
    isTimeRunning,
    textAreaRef,
    inputText,
    inputTextHandler,
    timeRemaining,
  };
};

export default useWordGame;
