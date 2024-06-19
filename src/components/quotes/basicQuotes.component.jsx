
const BasicQuotes = ({quote, fetchQuote}) => {
    return <div className="quotes-container">
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
  </div>
}

export default BasicQuotes; 

