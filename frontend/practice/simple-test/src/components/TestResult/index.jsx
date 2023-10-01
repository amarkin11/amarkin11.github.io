import React from 'react';

import { connect } from 'react-redux';

import { onClickAgainTest } from '../../actions';

import Button from '../Button';

const TestResult = ({ correct, total, textResult, onClickAgainTest }) => {

  return(
    <div className="result container container--xs">
      <p className="result__title title title--xxl">{ correct }/{ total }</p>
      <p className="result__text text text--xl">{ textResult }</p>
      <Button
        onClick={ () => onClickAgainTest() }
      >Пройти еще раз</Button>
    </div>
  )
};

const mapStateToProps = ({questionList, test}) => {
  const { questions } = questionList,
        { correct, textResult } = test;
  const total = questions.length;
  return { correct, total, textResult }
};

const mapDispatchToProps = {
  onClickAgainTest
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResult);
