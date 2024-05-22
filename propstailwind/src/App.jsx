import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "vrushali",
    age: 21,
  };
  let newArr = [1, 3, 4, 6];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="vrushali" buttonText="click me" />
      <Card username="chai" />
    </>
  );
}

export default App;
