import { useEffect, useState } from "react";
import BasicQuotes from "./basicQuotes.component";
import "./quotes.styles.css";
import withAsync from "../withAsync/withAsync";

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchQuote = () => {
    fetch("https://api.api-ninjas.com/v1/quotes?", {
      method: "GET",
      headers: {
        // eslint-disable-next-line
        "X-Api-Key": "${{secrets.API_KEY}}",
      },
    })
      .then((response) => response.json())
      .then((quotes) => {
        setQuote(quotes);
        setIsLoading(false);
      })
      .catch(setError);
  };

  useEffect(() => fetchQuote, []);

  const AsyncQuotes = withAsync(BasicQuotes);

  return (
    <AsyncQuotes
      quote={quote}
      isLoading={isLoading}
      fetchQuote={fetchQuote}
      error={error}
    />
  );
};

export default Quotes;
