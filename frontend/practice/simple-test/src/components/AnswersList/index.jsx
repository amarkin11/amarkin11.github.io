import React, { Component } from 'react';

import { connect } from 'react-redux';
import { onClickAnswer } from '../../actions';

class AnswersList extends Component {

  shuffleArray = (arr) => {
    let j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }

    return arr;
  };

  render() {
    const { answers, onClickAnswer } = this.props;

    return(
      <div className="answers">
        {
          this.shuffleArray(answers).map(([answer, correct], i) => {
            return <AnswersItem
              title={answer}
              key={100 + i}
              onClickAnswer={ () => onClickAnswer(correct) }
            />
          }
        )}
      </div>
    )
  };
};

const AnswersItem = ({ title, onClickAnswer }) => {

  return(
    <p
      className="answers__item"
      onClick={ onClickAnswer }
    >
      { title }
    </p>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAnswer: (correct) => dispatch(onClickAnswer(correct))
  }
};

export default connect(null, mapDispatchToProps)(AnswersList);
