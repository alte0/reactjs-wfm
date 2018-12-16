import React from "react";
import styles from "./Finished.module.css";

const Finished = props => {
  return (
    <div className={styles.Finished}>
      <ul>
        <li>
          <strong>1.</strong>
          How are you?
          <i className={"fa fa-times " + styles.error} />
        </li>
        <li>
          <strong>1.</strong>
          How are you?
          <i className={"fa fa-check " + styles.success} />
        </li>
      </ul>
      <p>Правильно 4 из 10</p>
      <div>
        <button>Повторить</button>
      </div>
    </div>
  );
};

export default Finished;
