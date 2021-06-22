import React, { useState } from "react";
import axios from "axios";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    axios.get("https://swapi.dev/api/people/1").then((response) => {
      console.log(response);
      if (response.status === 200) {
        setTitle(response.data.name);
      }
    });
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
