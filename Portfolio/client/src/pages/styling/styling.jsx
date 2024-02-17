import { useState, useEffect } from "react";
import "./styles.css"; // Import your CSS file

const TextAnimation = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const text = "Dinkar Kumar And I am MERN Stack developer";
    const wordsArray = text.split(" ");
    setWords(wordsArray);
  }, []);

  return (
    <div>
      {words.map((word, index) => (
        <span key={index} className="word">
          {word}
        </span>
      ))}
    </div>
  );
};

export default TextAnimation;
