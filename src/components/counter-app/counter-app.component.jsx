import { Component } from "react";
import './counter-app.styles.css'

class CounterApp extends Component {
  
  render() {
    const { counter, addToCounter, substractFromCounter } = this.props;
    return (
      <div className="counter-app">
        <h3>Counter App</h3>
        <p className="counter-display">Counter: {counter}</p>
        <div className="controls">
          <button
            className="counter-button"
            onClick={addToCounter}
          >
            Add
          </button>
          <button
            className="counter-button"
            onClick={substractFromCounter}
          >
            Subtract
          </button>
        </div>
      </div>
    );
  }
}

export default CounterApp;
