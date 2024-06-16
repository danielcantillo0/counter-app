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
      animation: "",
      buttons: [
        { button: "+/-" },
        { button: "CE" },
        { button: "C" },

        { button: "<-" },
        { button: "7" },
        { button: "8" },
        { button: "9" },

        { button: "X" },

        { button: "4" },
        { button: "5" },
        { button: "6" },
        { button: "-" },

        { button: "1" },
        { button: "2" },
        { button: "3" },
        { button: "+" },
        { button: "." },

        { button: "0" },

        { button: "=" },
        { button: "÷" },
      ],
      display: "",
      quote: [],
      weather: {},
      city: "",
    };
  }

  addToCounter = () => {
    this.setState(
      (prevState) => ({
        counter: prevState.counter + 1,
        animation: "plus",
      }),
      () => {
        setTimeout(() => {
          this.setState(() => ({ animation: "" }));
        }, 200);
      }
    );
  };

  substractFromCounter = () => {
    this.setState(
      (prevState) => ({
        counter: prevState.counter - 1,
        animation: "minus",
      }),
      () => {
        setTimeout(() => {
          this.setState(() => ({ animation: "" }));
        }, 200);
      }
    );
  };



  handleCalcButton = (button) => {
    switch (button.button) {
      case "=":
        return this.setState((prevState) => ({
          // eslint-disable-next-line
          display: eval(prevState.display),
        }));

      case "CE":
        return this.setState({
          display: "",
        });

      case "C":
        return this.setState({
          display: "",
        });  

      default:
        return this.setState((prevState) => ({
          display: prevState.display + button.button,
        }));
    }
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
      fetchWeather,
      fetchQuote,
      citySearch,
      addToCounter,
      substractFromCounter,
      handleCalcButton,
    } = this;
    const { quote, weather, counter, buttons, display, animation } = this.state;

    return (
      <div className="App">
        <h1> REACT PROJECTS</h1>
        <div className="project-container">
          <CounterApp
            counter={counter}
            animation={animation}
            addToCounter={addToCounter}
            substractFromCounter={substractFromCounter}
          />
        </div>
        <div className="project-container">
          <Calculator
            handleCalcButton={handleCalcButton}
            buttons={buttons}
            display={display}
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
