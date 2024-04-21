import React, { useState } from "react";

const IncreaseDecreaseCount = () => {
  const [clickCount, setClickCount] = useState(0);

  const increaseCount = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setClickCount((prevCount) => prevCount - 1);
  };

  const resetCount = () => {
    setClickCount(0);
  };

  return (
    <div>
      <p>Click Count: {clickCount}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default IncreaseDecreaseCount;
//In this component, we are using the useState hook to manage the state of the count. The useState hook returns an array with two elements: the current state value and a function to update it. We are destructuring this array to count and setCount.


// We have three functions increaseCount, decreaseCount, and resetCount that use setCount to update the count when the corresponding button is clicked. The increaseCount and decreaseCount functions use the previous state value to calculate the new state.