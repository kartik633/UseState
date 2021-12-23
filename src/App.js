import { useState } from "react";

function App() {
  const [count, setCount] = useState(4);

  function decrementCount() {
    if (count <= 0) {
      setCount = 0;
    } else {
      setCount(count - 1);
    }
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
