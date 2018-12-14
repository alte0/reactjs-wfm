import React from "react";
import styles from "./Quiz.module.css";

class Quiz extends React.Component {
  state = {
    quiz: []
  }
  
  render() {
    return (
      <div className={styles.Quiz}>
        <h1>Quiz</h1>
      </div>
    );
  }
}

export default Quiz;
