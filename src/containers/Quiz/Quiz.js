import React from "react";
import styles from "./Quiz.module.css";
import ActiveQuiz from "../../component/ActiveQuiz/ActiveQuiz";
import Finished from "../../component/Finished/Finished";
import Loader from "../../component/UI/Loader/Loader";
import { connect } from "react-redux";
import {
  fetchQuizById,
  quizAnswerClick,
  retryQuiz
} from "../../store/actions/quiz";

class Quiz extends React.Component {
  onAnswerClickHandler = answerId => {
    this.props.quizAnswerClick(answerId);
  };

  onRetryHandler = () => {
    this.props.retryQuiz();
  };
  
  componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id);
  }
  
  componentWillUnmount() {
    this.props.retryQuiz();
  }

  render() {
    return (
      <div className={styles.Quiz}>
        <div className={styles.QuizInnerWrap}>
          <h1>Quiz</h1>

          {this.props.loading || !this.props.quiz ? (
            <Loader />
          ) : this.props.isFinished ? (
            <Finished
              results={this.props.results}
              quiz={this.props.quiz}
              onRetry={this.onRetryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.props.quiz[this.props.activeQuestion].answers}
              question={this.props.quiz[this.props.activeQuestion].quiestion}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.props.quiz.length}
              answerNumber={this.props.activeQuestion + 1}
              state={this.props.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.quiz.results,
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState,
    quiz: state.quiz.quiz,
    loading: state.quiz.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: id => dispatch(fetchQuizById(id)),
    quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
