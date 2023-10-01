import React from 'react';

import { connect } from 'react-redux';

import TestIntro from "../TestIntro";
import TestContent from '../TestContent';
import TestResult from '../TestResult';

const App = ({start, result }) => {

  return(
    <main className="content">
      <div className="test">
        <div className="test__header container container--xs">
          <p className="text">Тест</p>
          <h2 className="test__title title">Угадай породу</h2>
        </div>
        { !(start || result) && <TestIntro /> }
        { start && <TestContent /> }
        { result && <TestResult /> }
      </div>
    </main>
  )
};

const mapStateToProps = ({test: { start, result }}) => {
  return { start, result };
};

export default connect(mapStateToProps)(App);
