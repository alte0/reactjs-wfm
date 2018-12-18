import React, { Component } from "react";
import styles from "./Auth.module.css";
import Button from "../../component/UI/Button/Button";
import Input from "../../component/UI/Input/Input";

class Auth extends Component {
  state = {
    formControls: {
      email: {
        value: "",
        type: "Email",
        label: "Email",
        errroMessage: "Введите корректный email",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: "",
        type: "password",
        label: "Пароль",
        errroMessage: "Введите корректный пароль",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  };

  loginHandler = () => {};

  registerHandler = () => {};

  submitHandler = evt => {
    evt.preventDefault();
  };

  onChangeHandler = (event, controlName) => {
    console.log(`${controlName}: `, event.target.value);
  };

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          // eslint-disable-next-line no-restricted-globals
          onChange={() => this.onChangeHandler(event, controlName)}
        />
      );
    });
  }

  render() {
    return (
      <div className={styles.Auth}>
        <h1>Авторизация</h1>

        <form onSubmit={this.submitHandler} className={styles.AuthForm}>

          {this.renderInputs()}
          
          <Button type="success" onClick={this.loginHandler}>
            Войти
          </Button>
          <Button type="primary" onClick={this.registerHandler}>
            Зарегистрироваться
          </Button>
        </form>
      </div>
    );
  }
}

export default Auth;
