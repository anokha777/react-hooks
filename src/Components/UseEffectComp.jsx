
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

const UseEffectComp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('update count', count);

    return () => {
      console.log('clean up', count);
    }
  }, [count]);

  return (
    <>
      <h1>Use State</h1>
      <h2>Current Count: {count}</h2>
      <Button onClick={() => setCount(count + 1)}>Increase</Button>
      <Button onClick={() => setCount(count - 1)}>Decrease</Button>
    </>
  );
}

export default UseEffectComp;
