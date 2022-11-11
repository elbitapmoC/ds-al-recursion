import { useState, useEffect } from 'react';

// Recursion / Recursive in react
function CountDown() {
  const [count, setCount] = useState(10);

  function countDown() {
    setCount(count - 1);
  }

  useEffect(() => {
    if (count > 0) {
      const timerId = setInterval(countDown, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }
  });

  return (
    <span>
      {count}
    </span>
  );
} export default CountDown;