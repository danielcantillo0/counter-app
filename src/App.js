import { Component } from "react";

import "./App.css";
import Calculator from "./components/calculator/calculator.component";
import CounterApp from "./components/counter-app/counter-app.component";
import Quotes from "./components/quotes/quotes.component";
import Weather from "./components/weather/weather.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      buttons: [
        { button: "/" },
        { button: "1" },
        { button: "2" },
        { button: "3" },
        { button: "*" },
        { button: "4" },
        { button: "5" },
        { button: "6" },
        { button: "-" },
        { button: "7" },
        { button: "8" },
        { button: "9" },
        { button: "+" },
        { button: "." },
        { button: "0" },
        { button: "=" },
      ],
      display: "",
      quote: [],
      weather: {},
      city: "",
    };
  }

  addToCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  substractFromCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  isButtonEquals = (button) => {
    button.button !== "="
      ? this.setState((prevState) => ({
          display: prevState.display + button.button,
        }))
      : this.setState((prevState) => ({
          // eslint-disable-next-line
          display: eval(prevState.display),
        }));
  };

  reset = () => {
    this.setState({
      display: "",
    });
  };

  fetchQuote = () => {
    fetch("https://api.api-ninjas.com/v1/quotes?", {
      method: "GET",
      headers: {
        "X-Api-Key": "4rCOiS4lvGne0vra5FpkdA==Oq9GlSDTVGa73u8i",
      },
    })
      .then((response) => response.json())
      .then((quotes) =>
        this.setState(() => {
          return { quote: quotes };
        })
      );
  };

  fetchWeather = () => {
    fetch("https://api.api-ninjas.com/v1/weather?city=" + this.state.city, {
      method: "GET",
      headers: {
        "X-Api-Key": "4rCOiS4lvGne0vra5FpkdA==Oq9GlSDTVGa73u8i",
      },
    })
      .then((response) => response.json())
      .then((weather) => {
        this.setState(() => {
          return { weather };
        });
      });
  };

  componentDidMount() {
    this.fetchQuote();
  }

  citySearch = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  render() {
    const {
      isButtonEquals,
      fetchWeather,
      fetchQuote,
      citySearch,
      addToCounter,
      substractFromCounter,
      reset,
    } = this;
    const { quote, weather, counter, buttons, display } = this.state;

    return (
      <div className="App">
          <h1> REACT PROJECTS</h1>
        <div className="project-container">
          <CounterApp
            counter={counter}
            addToCounter={addToCounter}
            substractFromCounter={substractFromCounter}
          />
        </div>
        <div className="project-container">
          <Calculator
            isButtonEquals={isButtonEquals}
            buttons={buttons}
            display={display}
            reset={reset}
          />
        </div>

        <div className="project-container">
          <Quotes quote={quote} fetchQuote={fetchQuote} />
        </div>
        <div className="project-container">
          <Weather
            fetchWeather={fetchWeather}
            citySearch={citySearch}
            weather={weather}
          />
        </div>
      </div>
    );
  }
}

export default App;
