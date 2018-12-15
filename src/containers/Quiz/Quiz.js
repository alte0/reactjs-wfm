import React from "react";
import styles from "./Quiz.module.css";
import ActiveQuiz from "../../component/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
  state = {
    quiz: [
      {
        answers: [
          { text: "Вопрос 1" },
          { text: "Вопрос 2" },
          { text: "Вопрос 3" },
          { text: "Вопрос 4" }
        ]
      }
    ]
  };

  render() {
    return (
      <div className={styles.Quiz}>
        <div className={styles.QuizInnerWrap}>
          <h1>Quiz</h1>

          <ActiveQuiz answers={this.state.quiz[0].answers} />
        </div>
      </div>
    );
  }
}

export default Quiz;
