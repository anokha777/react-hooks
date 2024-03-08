import React, { useMemo, useState } from 'react';;
import { Button } from 'antd';
import { initialItems } from '../utils/utils';

const UseMemoComp = () => {
  const [count, setCount] = React.useState(0);
  const [ items ] = useState(initialItems);

  // 1st test
  // console.log(items.find(item => item.isSelected));
  // const selectedItem = items.find(item => item.isSelected);

  // 2nd test
  // const selectedItem = useMemo(
  //   () => items.find(item => item.isSelected), 
  //   [items]
  // );

  // 3rd test
  const selectedItem = useMemo(
    () => items.find(item => item.id === count), 
    [count, items]
  );

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </>
  )
}

export default UseMemoComp;
