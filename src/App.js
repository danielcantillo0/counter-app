
import "./App.css";
import Calculator from "./components/calculator/calculator.component";
import CounterApp from "./components/counter-app/counter-app.component";
import Quotes from "./components/quotes/quotes.component";
import Weather from "./components/weather/weather.component";
import ProjectList from "./components/project-list/project-list.component";

const App = ()=> {

    return (
      <div className="App">
        
        <div className="project-container">
          <h1> REACT PROJECTS</h1>
          <ProjectList />
        </div>
       
        <div className="project-container">
          <CounterApp />
        </div>
        <div className="project-container">
          <Calculator />
        </div>
        <div className="project-container">
          <Quotes />
        </div>
        <div className="project-container">
          <Weather />
        </div>
      </div>
    );
  }

export default App;
