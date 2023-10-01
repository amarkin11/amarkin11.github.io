import React from 'react';

import { connect } from 'react-redux';

import { testStarted } from '../../actions';

import Button from '../Button';

const TestIntro = ({ testStarted }) => {

  return(
    <div className="intro container container--xs">
      <p className="intro__desc text">
        Вместе с брендом кормов для домашних животных Hill's мы решили узнать, как хорошо вы разбираетесь в породах питомцев. Приготовьтесь, легко не будет! Никаких узнаваемых немецких овчарок и шотландских вислоухих, никаких известных Хатико и Мухтаров – здесь мы проверим ваш кругозор на более сложном уровне.
      </p>
      <Button
        onClick={ () => testStarted() }
      >Начать тест</Button>
    </div>
  )
};

const mapDispatchToProps = {
  testStarted
};

export default connect(null, mapDispatchToProps)(TestIntro);
