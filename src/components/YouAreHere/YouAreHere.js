import $ from 'jquery';

const YouAreHere = {
  settings: {
    target: '.youAreHere',
    text: '.youAreHere__text',
    articleTitle: '.article__title'
  },
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if ($(this.settings.target).length > 0) {
      this.catchDOM(this.settings);
      this.addText();
      
    }
  },
  catchDOM(settings) {
    const target = $(settings.target);
    this.$target = {
      root: target,
      text: target.find(settings.text),
      articleTitle: $(settings.articleTitle),
    };
  },
  addText() {
    const article = /article/;
    if(article.test(this.$target.root.prevObject[0].URL))
    {
      const title = this.$target.articleTitle.text()
      this.$target.text.text(`Home » News » ${title} `);
    }
    const calc = /calculator/;
    if(calc.test(this.$target.root.prevObject[0].URL))
    {
       this.$target.text.text(`Home » Calculator `);
    }
  },
  
};
export default YouAreHere;
