import React from "react";
import styles from "./answerItem.module.css";

const answerItem = props => {
  return (
    <li className={styles.answerItem}>
      {props.answer.text}
    </li>
  )
}

export default answerItem