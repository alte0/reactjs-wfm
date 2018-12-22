import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from "./actionsTypes";
import axios from "../../axios/axios-quiz";

export function creteQuizQuistion(item) {
  return {
    type: CREATE_QUIZ_QUESTION,
    item
  };
}

export function resetQuizCreatin() {
  return {
    type: RESET_QUIZ_CREATION
  };
}

export function finisCreateQuiz() {
  return async (dispatch, getState) => {
    await axios.post("/quizes.json", getState().create.quiz);
    dispatch(resetQuizCreatin());
  };
}
