import React from "react";

export default props => (
  <div
    style={{
      border: "1px solid #ccc",
      marginBottom: "10px",
      display: "inline-block"
    }}
  >
    <h3>Car name: {props.name || "No name"}</h3>
    <p>Year: {props.year || "Non year"}</p>
    <input type="text" onChange={props.onChangeName} value={props.name} />
    <button onClick={props.onDelete}>Delete</button>
  </div>
);
