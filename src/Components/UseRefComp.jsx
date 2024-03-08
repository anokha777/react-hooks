import { Button, Input } from "antd";
import { useEffect, useRef, useState } from "react";

export default function UseRefComp() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("State:", count);
    console.log("Ref:", countRef.current);
  };

  return (
    <div className="tutorial">
      Count: {count}
      <Button onClick={handleIncrement}>Increment</Button>
    </div>
  );
}

export function UseRefComp2() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="tutorial">
      <Input ref={inputRef} type="text" placeholder="Type something..." />
    </div>
  );
}