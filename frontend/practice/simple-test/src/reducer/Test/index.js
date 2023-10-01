import {
  TEST_STARTED,
  ANSWER_CLICKED,
  QUESTION_NEXT,
  TEST_RESULT,
  TEST_AGAIN
} from '../../actions/actionTypes';

const updateResult = ({ correct }) => {
  switch (correct) {
    case 0:
    case 1:
      return 'Все мимо!\n В породах вы разбираетесь из лап вон плохо. Да и зачем, если беспородные питомцы – такие же отличные друзья?'
    case 2:
    case 3:
    case 4:
      return 'Могло быть и лучше.\n Кажется, вам предстоит узнать еще много интересного о многообразии пород кошек и собак.'
    case 5:
    case 6:
      return 'Неплохо!\n В таком тесте половина правильных ответов – уже успех! А подтянуть свои знания вы можете, спрашивая у первых встречных с собаками (или в гостях, завидев кошку), что у них за порода такая любопытная.'
    case 7:
    case 8:
    case 9:
      return 'Очень хороший результат!\n Кое-где вы промахнулись, но в целом узнали почти всех хвостатых!'
    case 10:
      return 'Превосходно!\n И кошек, и собак вы знаете как свои пять пальцев! Точнее, как все четыре лапы. Признавайтесь, штудируете энциклопедии на досуге или штурмуете породные выставки?'
    default:
      return 'Извините, что то пошло не так...\n Попробуйте перезагрузить страницу и попробовать снова'
  };
};

const updateTest = (state, action) => {
  if(state === undefined) {
    return {
      start: false,
      result: false,
      answerClicked: false,
      count: 0,
      correct: 0,
      isCorrect: null,
      textResult: ''
    };
  }

  switch(action.type) {
    case TEST_STARTED:
      return {...state.test, start: true}
    case ANSWER_CLICKED:
      const { correct } = state.test,
            isCorrect = action.payload,
            result = isCorrect ? correct + 1 : correct;
      return {
        ...state.test,
        answerClicked: true,
        correct: result,
        isCorrect
      }
    case QUESTION_NEXT:
      return {
        ...state.test,
        answerClicked: false,
        count: state.test.count + 1
      }
    case TEST_RESULT:
      return {
        ...state.test,
        start: false,
        result: true,
        textResult: updateResult(state.test)
      }
    case TEST_AGAIN:
      return {
        start: true,
        result: false,
        answerClicked: false,
        count: 0,
        correct: 0,
        isCorrect: null,
        textResult: ''
      }
    default:
      return state.test;
  }
};

export default updateTest;
