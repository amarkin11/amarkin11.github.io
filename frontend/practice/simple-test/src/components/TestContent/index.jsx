import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchQuestion, testResulted, onClickNextQuestion } from '../../actions';

import TestServices from '../../services/Test';

import AnswersList from '../AnswersList';
import Button from '../Button';
import Spinner from '../Spinner';

const testServices = new TestServices();

class TestContent extends Component {

  componentDidMount() {
    this.props.fetchQuestion();
  };

  render() {

    const {
      loading,
      answerClicked,
      count,
      question,
      total,
      isCorrect,
      onClickNextQuestion,
      testResulted
    } = this.props;

    if(loading) {
      return <Spinner />;
    }

    // console.log(this.props);

    const { title, image, answers, desc } = question;
    const button = total === count ?
      <Button
        onClick={() => testResulted()}
      >Узнать результат</Button> :
      <Button
        onClick={() => onClickNextQuestion()}
      >Следующий вопрос</Button>

    const signDesc = isCorrect ? 'Правильно!' : 'Неправильно!';

    return(
      <div className="container">
        <div className="question">
          <div className="question__item">
            <p className="question__title">
              {`${count + 1}. ${title}`}
            </p>
            { !answerClicked && <AnswersList answers={ answers }/> }

            { answerClicked &&
              <>
                <p className="question__desc text">
                  { `${signDesc}\n ${desc}` }
                </p>
                { button }
              </>
            }
          </div>
          <div className="question__item">
            <div className="question__img">
              <img className="cover" src={ image } alt=""/>
            </div>
          </div>
        </div>
      </div>
    )
  };
};

const mapStateToProps = ({questionList, test}) => {
  const { questions, loading } = questionList,
        { answerClicked, count, isCorrect } = test;
  const currentQuestion = questions[count],
        total = questions.length - 1;

  return {
    loading,
    answerClicked,
    count,
    total,
    question: currentQuestion,
    isCorrect
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: fetchQuestion(testServices, dispatch),
    onClickNextQuestion: () => dispatch(onClickNextQuestion()),
    testResulted: () => dispatch(testResulted()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestContent);
