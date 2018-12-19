import React, { Component } from "react";
import styles from "./QuizList.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

class QuizList extends Component {
  renderQuizList() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={"/quiz/" + quiz}>Тест {quiz}</NavLink>
        </li>
      );
    });
  }

  componentDidMount() {
    axios
      .get("https://reactjs-wfm.firebaseio.com/quiz.json")
      .then(response => console.log(response));
  }

  render() {
    return (
      <div className={styles.QuizList}>
        <div>
          <h1>Список тестов</h1>

          <ul>{this.renderQuizList()}</ul>
        </div>
      </div>
    );
  }
}

export default QuizList;
