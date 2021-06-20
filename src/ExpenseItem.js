import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated!");
  };
  return (
    <div>
      <h1>{title}</h1>
      <div>{props.amount}</div>
      <input type="number" min="0.01" step="0.01" />
      <input type="date" min="2019-01-01" max="2021-12-31" />
      <button onClick={clickHandler}> click me </button>
    </div>
  );
};

export default ExpenseItem;
