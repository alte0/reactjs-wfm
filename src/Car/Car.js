import React from "react";
// import Radium from "radium";
import "./Car.css";
import styles from "./Car.module.scss";
import withClass from "../hoc/withClass";

class Car extends React.Component {
  render() {
    console.log("car render");
    // if (Math.random() > 0.7) {
    //   throw new Error('Car random fail')
    // }
    const inputClases = ["input"];

    if (this.props.name !== "") {
      inputClases.push("green");
    } else {
      inputClases.push("red");
    }

    // const style = {
    //   ":hover": {
    //     backgroundColor: "gray",
    //     color: "white"
    //   }
    // };

    return (
      <React.Fragment>
        <h3>Car name: {this.props.name || "No name"}</h3>
        <p>Year: {this.props.year || "Non year"}</p>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClases.join(" ")}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </React.Fragment>
    );
  }
}

// export default Radium(Car);
export default withClass(Car, styles.Car);
