import React from "react";
import styles from "./Quiz.module.css";
import ActiveQuiz from "../../component/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
  state = {
    quiz: [
      {
        question: "Какого цвета небо?",
        rightAnswerId: 3,
        answers: [
          { text: "Черное", id: 1 },
          { text: "Синее", id: 2 },
          { text: "Голубое", id: 3 },
          { text: "Красное", id: 4 }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    console.log("answerId ", answerId);
  };

  render() {
    return (
      <div className={styles.Quiz}>
        <div className={styles.QuizInnerWrap}>
          <h1>Quiz</h1>

          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
