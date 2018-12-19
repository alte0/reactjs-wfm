import React, { Component } from "react";
import styles from "./QuizCreator.module.css";
import Button from "../../component/UI/Button/Button";
import Input from "../../component/UI/Input/Input";
import Select from "../../component/UI/Select/Select";
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
    rightAnswerId: 1,
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

  selectChangeHandler = event => {
    this.setState({
      rightAnswerId: +event.target.value
    })
  }
  render() {
    const select = <Select 
      label="Выбирите правильный ответ"
      value={this.state.rightAnswerId}
      onChange={this.selectChangeHandler}
      options={[
        {text: 1, value: 1},
        {text: 2, value: 2},
        {text: 3, value: 3},
        {text: 4, value: 4}
      ]}
    />

    return (
      <div className={styles.QuizCreator}>
        <div>
          <h1>Создание теста</h1>

          <form onSubmit={this.submithandler}>
            {this.renderInputs()}

            { select }
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
