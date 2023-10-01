import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAILURE,
  TEST_STARTED,
  ANSWER_CLICKED,
  QUESTION_NEXT,
  TEST_RESULT,
  TEST_AGAIN
} from './actionTypes';

const questionRequested = () => {
  return {
    type: FETCH_QUESTION_REQUEST
  }
};

const questionLoaded = (payload) => {
  return {
    type: FETCH_QUESTION_SUCCESS,
    payload
  }
};

const questionError = (payload) => {
  return {
    type: FETCH_QUESTION_FAILURE,
    payload
  }
};

const fetchQuestion = (testService, dispatch) => () => {
  // dispatch(questionRequested());
  testService
    .getData()
    .then((data) => dispatch(questionLoaded(data)))
    .catch((err) => dispatch(questionError(err)));
};

const testStarted = () => {
  return {
    type: TEST_STARTED
  }
};

const onClickAnswer = (payload) => {
  return {
    type: ANSWER_CLICKED,
    payload
  }
};

const onClickNextQuestion = () => {
  return {
    type: QUESTION_NEXT
  }
};

const testResulted = () => {
  return {
    type: TEST_RESULT
  }
};

const onClickAgainTest = () => {
  return {
    type: TEST_AGAIN
  }
};

export {
  fetchQuestion,
  questionLoaded,
  testStarted,
  onClickAnswer,
  onClickNextQuestion,
  testResulted,
  onClickAgainTest
};
