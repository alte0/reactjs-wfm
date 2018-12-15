import React from "react";
import styles from "./AnswersList.module.css";
import answerItem from "./answerItem/answerItem";

const AnswersList = props => (
  <ul className={styles.AnswersList}>
    {props.answers.map((answer, index) => {
      return <answerItem key={index} answer={answer} />;
    })}
  </ul>
);

export default AnswersList;
