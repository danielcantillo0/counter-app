import "./App.css";
import ProjectList from "./components/project-list/project-list.component";
import CounterApp from "./components/counter-app/counter-app.component";
import Calculator from "./components/calculator/calculator.component";
import Quotes from "./components/quotes/quotes.component";
import { useState } from "react";

const App = () => {
  const [projectJsx, setProjectJsx] = useState(null);
  const handleSelector = (project) => {
    switch (project) {
      case "counter":
        setProjectJsx(<CounterApp />);
        break;

      case "calculator":
        setProjectJsx(<Calculator />);
        break;

      case "quotes":
        setProjectJsx(<Quotes />);
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="project-container">
        <h1> REACT PROJECTS</h1>
        <ProjectList handleSelector={handleSelector} projectJsx={projectJsx} />
      </div>
    </div>
  );
};

export default App;
