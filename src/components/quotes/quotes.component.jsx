import { Component } from "react";
import './quotes.styles.css'

class Quotes extends Component {
  render() {
    const {quote, fetchQuote} = this.props;

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
  }
}

export default Quotes;


