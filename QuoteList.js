import phrasesData from './data/phrases.json';

import React, { useState } from 'react';
import Button from './Button';
import './QuoteList.css';

const QuoteList = ({ phrasesData }) => {
  const [randomIndex, setRandomIndex] = useState(getRandomIndex(data));
  const randomQuote = data[randomIndex];

  function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  function changeQuote() {
    const newIndex = getRandomIndex(phrasesData);
    setRandomIndex(newIndex);
  }

  return (
    <div className="quote-container">
      <blockquote className="quote">
        <p>{randomQuote.text}</p>
        <footer>- {randomQuote.author}</footer>
      </blockquote>
      <Button onClick={changeQuote} />
    </div>
  );
};

export default QuoteList;
