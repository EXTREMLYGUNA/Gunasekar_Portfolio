/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const words = [
  "Hi 👋",
  "I am GUNASEKAR",
  "I recently started in MERN-Full stack web developer",
  "Previously I am working style for manufacturing company at CEAT Tyres Ltd",
  "EDUCATION (Electrical and Electronics Engineering)",
  "Diploma (EEE), Rajagopal Polytechnic college,Gudiyatham, June 2017 – May 2019",
  "B.Tech (EEE), SRM Institute of Science and Technology, Chennai, July 2022 – December 2025",
  "Thanks for watching ...",
  "Have a Wonderful Day !"
];

function TypingEffect() {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [letterIdx, setLetterIdx] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && letterIdx <= words[currentWordIdx].length) {
      setDisplayedText(words[currentWordIdx].substring(0, letterIdx));
      timeout = setTimeout(() => setLetterIdx(letterIdx + 1), 120);
    } else if (isDeleting && letterIdx >= 0) {
      setDisplayedText(words[currentWordIdx].substring(0, letterIdx));
      timeout = setTimeout(() => setLetterIdx(letterIdx - 1), 50);
    } else {
      timeout = setTimeout(() => {
        if (!isDeleting) {
          setIsDeleting(true);
        } else {
          setIsDeleting(false);
          setCurrentWordIdx((currentWordIdx + 1) % words.length);
          setLetterIdx(0);
        }
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [currentWordIdx, letterIdx, isDeleting]);

  return (
    <span>{displayedText}</span>
  );
}

export default TypingEffect;
