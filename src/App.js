import "./App.css";
import { useEffect, useState } from "react";
import useTitleHook from "./components/useTitleCount";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";

function App() {
  // const [count, setCount] = useState(0);
  // useTitleHook(count);

  return (
    <div className="App">
      {/* <h1>Custom Hook</h1>
      <h2>Count value is {count <= 0 ? "0" : count}</h2>

      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment count
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement Count
      </button> */}
      {/*.................................................... */}
      <Counter1 />
      <br />
      <Counter2 />
    </div>
  );
}

export default App;
