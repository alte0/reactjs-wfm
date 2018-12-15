import React from "react";
import styles from "./Quiz.module.css";
import ActiveQuiz from "../../component/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: "Какого цвета небо?",
        rightAnswerId: 3,
        id: 1,
        answers: [
          { text: "Черное", id: 1 },
          { text: "Синее", id: 2 },
          { text: "Голубое", id: 3 },
          { text: "Красное", id: 4 }
        ]
      },
      {
        question: "В каком году основали Санкт-Петербург?",
        rightAnswerId: 3,
        id: 2,
        answers: [
          { text: "1300", id: 1 },
          { text: "905", id: 2 },
          { text: "1405", id: 3 },
          { text: "1325", id: 4 }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    console.log("answerId ", answerId);

    this.setState({
      activeQuestion: this.state.activeQuestion + 1
    });
  };

  render() {
    return (
      <div className={styles.Quiz}>
        <div className={styles.QuizInnerWrap}>
          <h1>Quiz</h1>

          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
