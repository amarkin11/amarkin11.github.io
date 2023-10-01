import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAILURE
} from '../../actions/actionTypes';

const updateQuestionList = (state, action) => {
  if(state === undefined) {
    return {
      questions: {},
      loading: true,
      error: null,
    }
  }

  switch(action.type) {
    // case FETCH_QUESTION_REQUEST:
    //   return {
    //     questions: {},
    //     loading: true,
    //     error: null,
    //   };
    case FETCH_QUESTION_SUCCESS:
      return {
        questions: action.payload,
        loading: false,
        error: null
      };
    case FETCH_QUESTION_FAILURE:
      return {
        questions: {},
        loading: false,
        error: action.payload,
      }
    default:
      return state.questionList
  };
};

export default updateQuestionList;
