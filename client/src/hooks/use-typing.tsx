import { useState, useEffect } from "react";

export function useTyping(text: string, speed: number = 100) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timeoutId);
    } else {
      setIsComplete(true);
    }
  }, [displayedText, text, speed]);

  return { displayedText, isComplete };
}
