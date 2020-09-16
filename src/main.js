import 'babel-polyfill';
import $ from 'jquery';

import Header from './components/Header/Header'
$(document).ready(() => {
  // PUT LOADERS HERE
  Header.init();
});
