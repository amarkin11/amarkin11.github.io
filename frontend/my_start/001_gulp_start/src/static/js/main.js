'use strict';
import {moduleOne, showClass} from './modules/moduleOne';
import moduleTwo from './modules/moduleTwo';
import {moduleThreeVersionTwo} from './modules/moduleThree';

$(function () {
  console.log(showClass);
  moduleOne();
  moduleTwo();
  moduleThreeVersionTwo();
});
