import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 2);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNum}>Click Me</button>
    </>
  );
};

export default App;
