import React, {useState, useMemo, useCallback} from "react";
import ChildComponent from "./ChildComponent";

export default function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("First");

  // if the second argument is empty -> [], the better solution is to
  // put myArr out of the component...
  const myArr = useMemo(() => {
    return ["1", "2", "3"];
  }, []);

  // this doesn't re-render...
  const logger = useCallback((arg) => {
    console.log(arg);
  }, []);

  // this re-renders...
  // const logger = (arg) => {
  //   console.log(arg);
  // };

  return (
    <div>
      <h1>Count is: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <button
        onClick={() => {
          setTitle("second");
        }}
      >
        title change
      </button>
      <ChildComponent title={title} arr={myArr} foo={logger}>
        child text...
      </ChildComponent>
    </div>
  );
}
