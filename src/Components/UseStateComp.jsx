
import React, { useState } from 'react';
import { Button } from 'antd';

const UseStateComp = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Use State</h1>
      <h2>Current Count: {count}</h2>
      <Button onClick={() => setCount(count + 1)}>Increase</Button>
      <Button onClick={() => setCount(count - 1)}>Decrease</Button>
    </>
  );
}

export default UseStateComp;
