import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function PracUseEffect() {
  const sayHello = () => console.log('Hello');

  const [num, setNum] = useState(0);
  const [aNum, setANum] = useState(0);

  useEffect(() => {
    sayHello();
  }, [num]);


  return (
    <div>
      <h1>num : {num}</h1>
      <button onClick={() => setNum(num + 1)}>{num}</button>
      <h1>ANum : {aNum}</h1>
      <button onClick={() => setANum(aNum + 1)}>{aNum}</button>
    </div>
  )
}
