import "./App.css";
import Clock from "./Clock.js";

function App() {
  return (
    <>
      <div className="App">
        <h1>World Clock</h1>
      </div>
      <Clock show country="ITALY" timezone="2" />
    </>
  );
}

export default App;
