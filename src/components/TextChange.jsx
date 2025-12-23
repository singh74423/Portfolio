import React, { useState, useEffect } from "react";

const TextChange = () => {
  const text = "Hi, I'm Ujjwal Singh";
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      // Only append if index is valid
      if (index < text.length) {
        setCurrentText(text.slice(0, index + 1)); // safe way
        index++;
      } else {
        clearInterval(intervalId); // stop interval
      }
    }, 200); // typing speed

    return () => clearInterval(intervalId);
  }, []);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;
