import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = (value: number) => {
    setCount(Math.max(0, count + value));
  };
  return {
    count,
    increment,
  };
};

export default useCounter;
