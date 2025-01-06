import { useState } from "react";

const Gallery = () => {
  const [counter, setCount] = useState(0);
  const increment = () => {
    setCount(counter + 1);
  };

  const decrement = () => {
    setCount(counter - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <section>
      <h1>This is the Gallery page</h1>
      <h2 style={{ textAlign: "center" }}>Learning state concept</h2>
      <h3>The state of my variable counter is: {counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </section>
  );
};

export default Gallery;
