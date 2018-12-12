import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Car from "./Car/Car";

class App extends Component {
  state = {
    cars: [
      {
        name: "Ford",
        year: "2010"
      },
      {
        name: "Mazda",
        year: "2002"
      },
      {
        name: "Lada",
        year: "2015"
      }
    ],
    pageTitle: "React components",
    showCars: false
  };

  changeTitleHandler = newTitle => {
    this.setState({
      pageTitle: newTitle
    });
  };

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    this.setState({ cars });
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);

    this.setState({
      cars
    });
  }

  toggleCars = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  render() {
    const divStyle = {
      color: "darkblue"
    };

    let cars = null;

    if (!this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            // onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
            onDelete={this.deleteHandler.bind(this, index)}
          />
        );
      });
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.toggleCars.bind(this, "Changed!")}>
          Toggle Cars
        </button>
        <div>{cars}</div>
      </div>
    );
  }
}

export default App;
