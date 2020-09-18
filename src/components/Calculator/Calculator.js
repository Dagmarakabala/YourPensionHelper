import $ from 'jquery';

const Calculator = {
  settings: {
    target: '.calculator',
    input: '.calculator__input',
    age: '.calculator__input#age',
    span: '.calculator__start',
  },
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if ($(this.settings.target).length > 0) {
      this.catchDOM(this.settings);
      this.bindEvents();
    }
  },
  catchDOM(settings) {
    const target = $(settings.target);
    this.$target = {
      root: target,
      input: target.find(settings.input),
      age: target.find(settings.age),
      span: target.find(settings.span),
    };
  },
  bindEvents() {
    this.$target.root
      .find(this.$target.age)
      .on('click', this.removeSpan.bind(this));
  },
  removeSpan(event) {
    this.$target.span.addClass('-displayNone');
  },
};
export default Calculator;
