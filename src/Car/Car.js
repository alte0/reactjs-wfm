import React from "react";
// import Radium from "radium";
import "./Car.css";
import styles from "./Car.module.scss";

class Car extends React.Component {
  // Жизненный цикл изменения
  componentWillReceiveProps(nextProps) {
    console.log("car componentWillReceiveProps", nextProps);
  }
  shouldComponentUpdate(nextProps, nexState) {
    console.log("car shouldComponentUpdate", nextProps, nexState);
    return true;
  }
  componentWillUpdate(nextProps, nexState) {
    console.log("car componentWillUpdate", nextProps, nexState);
  }
  componentDidUpdate() {
    console.log("car componentDidUpdate");
  }
  // 16.3+
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("car getDerivedStateFromProps", nextProps, prevState);
  //   return prevState;
  // }
  // обратиться к дом дереву до обновления state
  // getSnapshotBeforeUpdate() {
  //   console.log("car getSnapshotBeforeUpdate");
  // }
  // Жизненный цикл изменения

  // Жизненный цикл удаления
  componentWillUnmount() {
    console.log("car componentWillUnmount");
  }
  // Жизненный цикл удаления
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

    const style = {
      ":hover": {
        backgroundColor: "gray",
        color: "white"
      }
    };

    return (
      <div className={styles.Car} style={style}>
        <h3>Car name: {this.props.name || "No name"}</h3>
        <p>Year: {this.props.year || "Non year"}</p>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClases.join(" ")}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

// export default Radium(Car);
export default Car;
