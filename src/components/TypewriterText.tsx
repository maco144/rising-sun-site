"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
  className?: string;
  onComplete?: () => void;
}

export default function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  showCursor = true,
  className = "",
  onComplete,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      onComplete?.();
    }
  }, [displayText, text, speed, hasStarted, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span
          className={`inline-block w-2 h-4 ml-1 align-middle bg-terminal-green ${
            isTyping ? "animate-blink" : "opacity-0"
          }`}
        />
      )}
    </span>
  );
}
