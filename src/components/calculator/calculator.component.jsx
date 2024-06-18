import "./calculator.styles.css";
import Buttons from "./buttons";
import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [calc, setCalc] = useState("");
  const [operator, setOperator] = useState("");
  const [clear, setClear] = useState(0);
  const handleCalcButton = (button) => {
    switch (button.button) {
      case "+/-":
        if (display > 0) {
          return setDisplay("-" + display);
        } else if (display === "") {
          break;
        } else {
          return setDisplay(display * -1);
        }

      case "<-":
        return setDisplay(display.slice(0, -1));
      case "+":
        setCalc(display);
        setOperator("+");
        setDisplay("");
        break;

      case "-":
        setCalc(display);
        setOperator("-");
        setDisplay("");
        break;

      case "x":
        setCalc(display);
        setOperator("*");
        setDisplay("");
        break;

      case "÷":
        setCalc(display);
        setOperator("/");
        setDisplay("");
        break;

      case "=":
        try {
          // eslint-disable-next-line
          const result = eval(calc + operator + display);
          setDisplay(result);
          setCalc(calc + operator + display);
          setOperator("");
          setClear(1);
          break;
        } catch (evalError) {
          return setDisplay("Syntax Error");
        }

      case "C":
        setDisplay("");
        setCalc("");
        break;

      case "CE":
        if (clear === 0) {
          return setDisplay("");
        } else {
          setDisplay("");
          setCalc("");
          setClear(0);
          break;
        }

      default:
        return setDisplay(display + button.button);
    }
  };
  return (
    <div className="calculator-container">
      <h3>Calculator</h3>
      <div className="display">
        {calc && (
          <input
            type="text"
            readOnly
            className="calculator-mini-display"
            value={calc + operator}
            placeholder="0"
          />
        )}
        <input
          type="text"
          readOnly
          className="calculator-display"
          value={display}
          placeholder="0"
        />
      </div>
      <div className="grid-container">
        {Buttons.map((button) => {
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
};

export default Calculator;
