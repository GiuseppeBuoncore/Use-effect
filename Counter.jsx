import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";
import Clock from "./Clock";

function Counter({initialValue = 0}) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log(`il valore del contatore è ${counter}`)
  })

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function decrementCounter() {
    setCounter(counter - 1);
  }

  function resetCounter() {
    setCounter(initialValue);
  }

  console.log(counter)

  return (
    <>
      <CounterDisplay counter= {counter} />
      <button onClick={incrementCounter}>Increment Count</button>
      <button onClick={decrementCounter}>Decrement Count</button>
      <button onClick={resetCounter}>Reset Count</button>
      <h2><Clock /></h2>
    </>
  );
}

export default Counter;
