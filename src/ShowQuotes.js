import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

function ShowQuotes({ quotes }) {
  const [currentIndex, setCurrentIndex] = useState(null);

  //Decalare variables to be assigned to quote and author
  let quote, author;

  //check if the Quotes prop has data (prevent undefined on first render)
  if (quotes.length >= 1) {
    //set the variables to the author and quote
    quote = quotes[currentIndex].quote;
    author = quotes[currentIndex].author;
  }

  //Generate a random number from 0 to the quote array's length
  const getRandomIndex = useCallback(() => {
    let randomIndex = Math.floor(Math.random() * Math.floor(quotes.length));
    setCurrentIndex(randomIndex);
  }, [quotes.length]);

  useEffect(() => {
    getRandomIndex();
  }, [getRandomIndex]);

  return (
    <div id='quote-box'>
      <SwitchTransition>
        <CSSTransition key={currentIndex} timeout={300} classNames='fade'>
          <div className='quote'>
            <p id='text'>"{quote}"</p>
            <p id='author'>-{author}</p>
          </div>
        </CSSTransition>
      </SwitchTransition>
      <div className='click'>
        <a
          id='tweet-quote'
          target='_blank'
          rel='noreferrer'
          href={`https://twitter.com/intent/tweet?text=${quote}--${author}`}
        >
          <AiFillTwitterCircle className='icon' size={50} color='#1fa2f1' />
        </a>
        <button id='new-quote' onClick={getRandomIndex}>
          New Quote
        </button>
      </div>
    </div>
  );
}

ShowQuotes.propTypes = {
  quotes: PropTypes.array,
};

export default ShowQuotes;
