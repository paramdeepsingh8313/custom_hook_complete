import React, { useState } from "react";
import useCount from "./useCount";

function Counter2() {
  const [count, Inc5, Dec5] = useCount(500, 5, 5);

  return (
    <div>
      <h2>Counter2 {count}</h2>
      <button onClick={Inc5}>Increent by 5</button>
      <button onClick={Dec5}>DEcrement by 5</button>
    </div>
  );
}

export default Counter2;
