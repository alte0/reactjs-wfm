import React, { Component } from "react";
import styles from "./QuizCreator.module.css";
import Button from "../../component/UI/Button/Button";
import Input from "../../component/UI/Input/Input";

class QuizCreator extends Component {
  state = {};

  submithandler(evt) {
    evt.preventDefault();
  }
  addQuestionHandler = () => {
  }
  createQuizHandler = () => {
  }
  render() {
    return (
      <div className={styles.QuizCreator}>
        <div>
          <h1>Создание теста</h1>

          <form onSubmit={this.submithandler}>
            {/* <Input /> */}
            <input type="text"/>
            <hr/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>

            <select></select>
            <Button
              type="primary"
              onClick={this.addQuestionHandler}
            >
              Добавить вопрос
            </Button>
            <Button
              type="succes"
              onClick={this.createQuizHandler}
            >
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default QuizCreator;
