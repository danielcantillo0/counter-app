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
        { button: "x" },
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
      calc: "",
      clear: 0,
      operator: "",
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
      case "+/-":
        if (this.state.display > 0) {
          return this.setState((prevState) => ({
            display: "-" + prevState.display,
          }));
        } else {
          return this.setState((prevState) => ({
            display: prevState.display * (-1), calc: `-(${prevState.display})`,
          }));
        }

      case "<-":
        return this.setState((prevState) => ({
          display: prevState.display.slice(0, -1),
        }));
      case "+":
        return this.setState((prevState) => ({
          calc: prevState.display,
          operator: "+",
          display: "",
        }));
      case "-":
        return this.setState((prevState) => ({
          calc: prevState.display,
          operator: "-",
          display: "",
        }));

      case "x":
        return this.setState((prevState) => ({
          calc: prevState.display,
          operator: "*",
          display: "",
        }));

      case "÷":
        return this.setState((prevState) => ({
          calc: prevState.display,
          operator: "/",
          display: "",
        }));
      case "=":
        return this.setState((prevState) => ({
          // eslint-disable-next-line
          display: eval(
            prevState.calc + prevState.operator + prevState.display
          ),
          calc: prevState.calc + prevState.operator + prevState.display,
          operator: "",
          clear: 1,
        }));

      case "C":
        return this.setState({
          display: "",
          calc: "",
        });

      case "CE":
        if (this.state.clear === 0) {
          return this.setState({
            display: "",
          });
        } else {
          return this.setState({
            display: "",
            calc: "",
            clear: 0,
          });
        }
        

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
    const {
      quote,
      weather,
      counter,
      buttons,
      display,
      animation,
      calc,
      operator,
    } = this.state;

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
            calc={calc}
            operator={operator}
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
