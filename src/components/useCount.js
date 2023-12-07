import React, { useState } from "react";

function useCount(ct, inc, dec) {
  const [count, setCount] = useState(ct);

  const increment = () => {
    setCount(count + inc);
  };

  const decrement = () => {
    setCount(count - dec);
  };

  return [count, increment, decrement];
}

export default useCount;
