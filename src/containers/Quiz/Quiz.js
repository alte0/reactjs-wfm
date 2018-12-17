import React from "react";
import styles from "./Quiz.module.css";
import ActiveQuiz from "../../component/ActiveQuiz/ActiveQuiz";
import Finished from "../../component/Finished/Finished";

class Quiz extends React.Component {
  state = {
    results: {},
    isFinished: false,
    // isFinished: true,
    activeQuestion: 0,
    answerState: null,
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
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }
      this.setState({
        answerState: { [answerId]: "success" },
        results
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = "error";
      this.setState({
        answerState: { [answerId]: "error" },
        results
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }
  onRetryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  componentDidMount() {
    console.log('Quiz ID =', this.props.match.params.id);
  }

  render() {
    return (
      <div className={styles.Quiz}>
        <div className={styles.QuizInnerWrap}>
          <h1>Quiz</h1>

          {this.state.isFinished ? (
            <Finished
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.onRetryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
