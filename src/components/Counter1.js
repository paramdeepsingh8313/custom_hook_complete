import React from "react";
import useCount from "./useCount";

function Counter1() {
  const [count, increment, decrement] = useCount(100, 1, 1);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter1;
