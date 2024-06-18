import { useEffect, useState } from "react";
import "./quotes.styles.css";

const Quotes = () => {
  const [quote, setQuote] = useState([])
  const fetchQuote = () => {
    fetch("https://api.api-ninjas.com/v1/quotes?", {
      method: "GET",
      headers: {
        "X-Api-Key": "4rCOiS4lvGne0vra5FpkdA==Oq9GlSDTVGa73u8i",
      },
    })
      .then((response) => response.json())
      .then((quotes) => setQuote(quotes));
  };
  
  useEffect(() => fetchQuote, [])

  return (
    <>
      <h3>Random Quote Generator</h3>
      <div className="quote-container">
        {quote.map((quote) => {
          return <p className="quote-text">{quote.quote}</p>;
        })}
        {quote.map((quote) => {
          return <p className="quote-author">- {quote.author}</p>;
        })}
      </div>
      <button onClick={fetchQuote} className="quote-button">
        New Quote
      </button>
    </>
  );
};

export default Quotes;
