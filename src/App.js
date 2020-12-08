import React, { useState, useEffect } from 'react';
import ShowQuotes from './ShowQuotes';

function App() {
  const [quotes, setQuotes] = useState([]);

  const url =
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

  const getQuotes = async () => {
    const data = await fetch(url);

    const response = await data.json();

    setQuotes(response.quotes);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return <ShowQuotes quotes={quotes} />;
}

export default App;
