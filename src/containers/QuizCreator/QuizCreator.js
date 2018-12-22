import React, { Component } from "react";
import styles from "./QuizCreator.module.css";
import Button from "../../component/UI/Button/Button";
import Input from "../../component/UI/Input/Input";
import Select from "../../component/UI/Select/Select";
import {
  createControl,
  validate,
  validateForm
} from "../../form/formFramework";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
// import axios from "../../axios/axios-quiz";
import { connect } from "react-redux";
import { finisCreateQuiz, creteQuizQuistion } from "../../store/actions/create";

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
    // quiz: [],
    isFormValid: false,
    rightAnswerId: 1,
    formControls: createFormControls()
  };

  submithandler(evt) {
    evt.preventDefault();
  }

  addQuestionHandler = evt => {
    evt.preventDefault();

    // const quiz = this.state.quiz.concat();
    // const index = quiz.length + 1;

    const {
      quiestion,
      option1,
      option2,
      option3,
      option4
    } = this.state.formControls;

    const questionItem = {
      quiestion: quiestion.value,
      // id: index,
      id: this.props.quiz.length + 1,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        { text: option1.value, id: option1.id },
        { text: option2.value, id: option2.id },
        { text: option3.value, id: option3.id },
        { text: option4.value, id: option4.id }
      ]
    };

    // quiz.push(questionItem);
    this.props.creteQuizQuistion(questionItem);

    this.setState({
      // quiz,
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls()
    });
  };

  createQuizHandler = async evt => {
    evt.preventDefault();

    // try {
      // await axios.post("/quizes.json", this.state.quiz);

      this.setState({
        // quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls()
      });

      this.props.finisCreateQuiz()
    // } catch (e) {
    //   console.log(e);
    // }
  };

  onChangeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    this.setState({
      formControls,
      isFormValid: validateForm(formControls)
    });
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
    });
  };
  render() {
    const select = (
      <Select
        label="Выбирите правильный ответ"
        value={this.state.rightAnswerId}
        onChange={this.selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 }
        ]}
      />
    );

    return (
      <div className={styles.QuizCreator}>
        <div>
          <h1>Создание теста</h1>

          <form onSubmit={this.submithandler}>
            {this.renderInputs()}

            {select}
            <Button
              type="primary"
              onClick={this.addQuestionHandler}
              disabled={!this.state.isFormValid}
            >
              Добавить вопрос
            </Button>
            <Button
              type="succes"
              onClick={this.createQuizHandler}
              disabled={this.props.quiz === 0}
            >
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quiz: state.create.quiz
  };
}

function mapDispatchToProps(dispatch) {
  return {
    creteQuizQuistion: item => dispatch(creteQuizQuistion(item)),
    finisCreateQuiz: () => dispatch(finisCreateQuiz())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizCreator);
