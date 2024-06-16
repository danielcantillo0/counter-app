import { Component } from "react";
import "./counter-app.styles.css";

class CounterApp extends Component {
  render() {
    const { counter, addToCounter, substractFromCounter, animation } = this.props;
    return (
      <div className="counter-app">
        <h3>Click Counter</h3>
        <div className="counter-display-container">
          <div className={`counter-display ${animation}`}>{counter}</div>
        </div>

        <div className="controls">
          <button className="counter-button" onClick={substractFromCounter}>
            -
          </button>
          <button className="counter-button" onClick={addToCounter}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CounterApp;
