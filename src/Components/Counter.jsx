import {useState} from "react";

function Counter() {
  const [count, setCount]= useState(0);
  return <h1>Count is {count}</h1>; 
}

export default Counter;