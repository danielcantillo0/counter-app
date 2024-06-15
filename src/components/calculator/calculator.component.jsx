import { Component } from "react";
import './calculator.styles.css'

class Calculator extends Component {
  render() {
    const {buttons, display, isButtonEquals, reset } = this.props;
    return (
      <>
        <h3>Calculator</h3>
        <div className="display">
          <input
            type="text"
            readOnly
            className="calculator-display"
            value={display}
            placeholder="0"
          />
        </div>
        <div className="grid-container">
          {buttons.map((button) => {
            return (
              <button
                onClick={() => isButtonEquals(button)}
                className="grid-item"
              >
                {button.button}
              </button>
            );
          })}
          <button
            onClick={reset}
            className="grid-item"
          >
            Reset
          </button>
        </div>
      </>
    );
  }
}

export default Calculator;
