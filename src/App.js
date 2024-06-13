import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,

      buttons: [
        { button: "7" },
        { button: "8" },
        { button: "9" },
        { button: "/" },
        { button: "4" },
        { button: "5" },
        { button: "6" },
        { button: "*" },
        { button: "1" },
        { button: "2" },
        { button: "3" },
        { button: "-" },
        { button: "." },
        { button: "0" },
        { button: "=" },
        { button: "+" },
      ],

      display: "",
      result: null,
      quote: [],
    };
  }

  componentDidMount() {
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
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>9 REACT PROJECTS</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="project-container">
          <div className="counter-app">
            <h3>1. Counter App</h3>
            <p className="counter-display">Counter: {this.state.counter}</p>
            <div className="controls">
              <button
                className="button"
                onClick={() => {
                  this.setState((prevState) => ({
                    counter: prevState.counter + 1,
                  }));
                }}
              >
                Add
              </button>
              <button
                className="button"
                onClick={() => {
                  this.setState((prevState) => ({
                    counter: prevState.counter - 1,
                  }));
                }}
              >
                Subtract
              </button>
            </div>
          </div>
        </div>
        <div className="project-container">
          <h3>2. Calculator</h3>
          <div className="display">
            <input
              type="text"
              readonly
              className="calculator-display"
              value={this.state.display}
            />
          </div>
          <div className="grid-container">
            {this.state.buttons.map((button) => {
              return (
                <button
                  onClick={() => {
                    button.button !== "="
                      ? this.setState((prevState) => ({
                          display: prevState.display + button.button,
                        }))
                      : this.setState((prevState) => ({
                          // eslint-disable-next-line
                          display: eval(prevState.display),
                        }));
                  }}
                  className="grid-item"
                >
                  {button.button}
                </button>
              );
            })}
            <button
              onClick={() => {
                this.setState(() => ({
                  display: "",
                }));
              }}
              className="grid-item"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="project-container">
          <h3>3. Random Quote Generator</h3>
          <div className="quote-container">
            {this.state.quote.map((quote) => {
              return <p className="quote-text">{quote.quote}</p>;
            })}
            {this.state.quote.map((quote) => {
              return <p className="quote-author">- {quote.author}</p>;
            })}
          </div>
          <button
            onClick={()=>{fetch("https://api.api-ninjas.com/v1/quotes?", {
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
              )}}
            className="button"
          >
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default App;
