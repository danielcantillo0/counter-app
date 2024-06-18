import { useState } from "react";
import "./counter-app.styles.css";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const [animation, setAnimation] = useState("");
  const addToCounter = () => {
    setCounter(counter + 1);
    setAnimation("plus");
    setTimeout(() => setAnimation(""), 200);
  };
  const substractFromCounter = () => {
    setCounter(counter - 1);
    setAnimation("minus");
    setTimeout(() => setAnimation(""), 200);
  };

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
};

export default CounterApp;
