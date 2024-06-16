import { Component } from "react";
import './calculator.styles.css'

class Calculator extends Component {
  render() {
    const {buttons, display, handleCalcButton } = this.props;
    return (
      <div className="calculator-container">
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
                onClick={() => handleCalcButton(button)}
                className="grid-item"
              >
                {button.button}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Calculator;
