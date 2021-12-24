import React, { useState } from "react";
import { useInterval } from "react-use-interval-hook";

const ExampleCounter = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <div>Count is: {count}</div>;
};

const App = () => {
  return ExampleCounter;
};

export default App;
