import React, { useState, useEffect } from 'react';

const Typewriter = ({ 
  words, 
  typingSpeed = 80, 
  deletingSpeed = 40, 
  pauseTime = 1500 
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timer = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      if (text === currentWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="relative inline-flex items-center min-h-[1.2em]">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10A37F] to-[#00E1FF]">
        {text || '\u200B'}
      </span>
      <span 
        className={`w-[4px] h-[0.9em] bg-[#10A37F] ml-2 ${isDeleting || text === words[wordIndex] ? 'animate-pulse' : ''}`}
        style={{ animationDuration: '0.8s' }}
      ></span>
    </span>
  );
};

export default Typewriter;
