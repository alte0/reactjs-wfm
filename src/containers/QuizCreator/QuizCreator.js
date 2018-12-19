import React, { Component } from "react";
import styles from "./QuizCreator.module.css";
import Button from "../../component/UI/Button/Button";
import Input from "../../component/UI/Input/Input";
import { createControl } from "../../form/formFramework";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

function createOptionControl(number) {
  return createControl(
    {
      label: `вариант ${number}`,
      errorMessage: "Значение не может быть пустым",
      id: number
    },
    { required: true }
  );
}

function createFormControls() {
  return {
    quiestion: createControl(
      {
        label: "Введите вопрос",
        errorMessage: "Вопрос не может быть пустым"
      },
      { required: true }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4)
  };
}

class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls: createFormControls()
  };

  submithandler(evt) {
    evt.preventDefault();
  }
  addQuestionHandler = () => {};
  createQuizHandler = () => {};
  onChangeHandler = (value, controlName) => {
    //
  };

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Auxiliary key={controlName + index}>
          <Input
            type={control.type}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            label={control.label}
            shouldValidate={!!control.validation}
            errorMessage={control.errorMessage}
            onChange={event =>
              this.onChangeHandler(event.target.value, controlName)
            }
          />
          {index === 0 ? <hr /> : null}
        </Auxiliary>
      );
    });
  }
  render() {
    return (
      <div className={styles.QuizCreator}>
        <div>
          <h1>Создание теста</h1>

          <form onSubmit={this.submithandler}>
            {this.renderInputs()}

            <select />
            <Button type="primary" onClick={this.addQuestionHandler}>
              Добавить вопрос
            </Button>
            <Button type="succes" onClick={this.createQuizHandler}>
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default QuizCreator;
