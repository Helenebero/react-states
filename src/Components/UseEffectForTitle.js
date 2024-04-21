import React, { useState, useEffect } from "react";

const UseEffectForTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Component is mounted");
  }, []);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Click Count: {count}</p>
      <button onClick={increaseCount}>Click Me</button>
    </div>
  );
};

export default UseEffectForTitle;
