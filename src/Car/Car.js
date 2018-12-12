import React from "react";
import Radium from "radium";
import "./Car.css";

const Car = props => {
  const inputClases = ["input"];

  if (props.name !== "") {
    inputClases.push("green");
  } else {
    inputClases.push("red");
  }

  const style = {
    ':hover': {
      backgroundColor: 'gray',
      color: 'white'
    }
  }

  return (
    <div className="Car" style={style}>
      <h3>Car name: {props.name || "No name"}</h3>
      <p>Year: {props.year || "Non year"}</p>
      <input
        type="text"
        onChange={props.onChangeName}
        value={props.name}
        className={inputClases.join(" ")}
      />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default Radium(Car);
