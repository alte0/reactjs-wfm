import React, { Component } from "react";
import styles from "./Auth.module.css";
import Button from "../../component/UI/Button/Button";
import Input from "../../component/UI/Input/Input";

class Auth extends Component {
  state = {};
  loginHandler = () => {};
  registerHandler = () => {};
  submitHandler = evt => {
    evt.preventDefault();
  };

  render() {
    return (
      <div className={styles.Auth}>
        <h1>Авторизация</h1>

        <form onSubmit={this.submitHandler} className={styles.AuthForm}>
          <Input 
            label="Email"
            />
          <Input 
            label="Пароль"
            errorMessage={'fwef'}
            />
          
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
