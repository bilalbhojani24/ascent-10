import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increement = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const decreement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increement}>Increement +5</button>
      <button onClick={decreement}>Decreement -5</button>
    </div>
  );
};

export default App;

// Whenever my state is getting updated it will batch the process and do the update
