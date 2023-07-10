import React, { useRef, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const increase = (step) => {
    setCounter(counter + step);
  };
  const decrease = () => {
    // setCounter(counter - 1);
    // setCounter(counter - 1);
    // setCounter(counter - 1);
    // setCounter(counter - 1);
    // setCounter(counter - 2);
    // setCounter((prev) => {
    //   console.log(prev);
    //   return prev - 1;
    // });
    // setCounter((prev) => {
    //   console.log(prev);
    //   return prev - 1;
    // });
    setCounter((prev) => prev - 1);
    setCounter((prev) => prev - 1);
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(firstNameRef.current.value);
    console.log(lastNameRef.current.value);
  };
  // console.log("mounting", counter);
  return (
    <div>
      <form onSubmit={submit}>
        <input ref={firstNameRef} type="text" placeholder="firstName" />
        <input ref={lastNameRef} type="text" placeholder="lastName" />
        <button type="submit">Submit</button>
      </form>
      <h3 style={{ textAlign: "center", fontSize: "30px" }}>{counter}</h3>
      <div style={{ textAlign: "center" }}>
        <button
          style={{ padding: "10px 20px", fontSize: "20px" }}
          onClick={decrease}
        >
          -
        </button>
        <button
          style={{ padding: "10px 20px", fontSize: "20px" }}
          onClick={() => increase(3)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
