import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const removeValue = () => {
    setCounter(counter--);
  };
  const addValue = () => {
    setCounter(counter++);
    //console.log("clicked", counter);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
