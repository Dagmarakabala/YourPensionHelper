import 'babel-polyfill';
import $ from 'jquery';

import Header from './components/Header/Header'
import Calculator from './components/Calculator/Calculator'
import Reviews from './components/Reviews/Reviews'
import Info from './components/Info/Info'
import HelpTips from './components/HelpTips/HelpTips'
import LatestArticles from './components/LatestArticles/LatestArticles'
import YouAreHere from './components/YouAreHere/YouAreHere'



$(document).ready(() => {
  // PUT LOADERS HERE
  Header.init();
  Calculator.init();
  Reviews.init();
  Info.init();
  HelpTips.init();
  LatestArticles.init();
  YouAreHere.init();
});
