import updateQuestionList from "./QuestionList";
import updateTest from "./Test";

const reducer = (state, action) => {
  return {
    questionList: updateQuestionList(state, action),
    test: updateTest(state, action)
  };
};

export default reducer;
