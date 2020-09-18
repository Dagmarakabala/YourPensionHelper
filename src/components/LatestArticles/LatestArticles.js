import $ from 'jquery';

const LatestArticles = {
  settings: {
    target: '.latestArticles',
    items: '.latestArticlesItem',
    link: '.latestArticlesItem__link',
    img: '.latestArticlesItem__img',
    title: '.latestArticlesItem__title',
    text: '.latestArticlesItem__text',
    day: '.latestArticlesItem__day',
    month: '.latestArticlesItem__month',
    readMore: '.latestArticles__link',
  },
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if ($(this.settings.target).length > 0) {
      this.catchDOM(this.settings);
      this.addItems();
      this.addClassToFirst();
    }
  },
  catchDOM(settings) {
    const target = $(settings.target);
    this.$target = {
      root: target,
      items: target.find(settings.items),
      link: target.find(settings.link),
      img: target.find(settings.img),
      title: target.find(settings.title),
      text: target.find(settings.text),
      day: target.find(settings.day),
      month: target.find(settings.month),
      readMore: target.find(settings.readMore),
    };
  },
  addItems() {
    const links = ["article.html", "#", "#"];
    const days = [ 12, 27, 27];
    const months = ["SEP", "AUG", "AUG"];
    const imgs = ["./assets/images/LatestArticlesItem/img1.png", "./assets/images/LatestArticlesItem/img1.png", "./assets/images/LatestArticlesItem/img1.png" ]
    const titles = [ "First Mortgage offers importial advice and support to first-time buyers to help them realise their home ownership dream", "Take the string out of moving home", "Take the string out of moving home"];
    const texts = ["Published on 6th September 2018 The UK's leading independent mortgage brokers, First Mortgage are encouraging first-time buyers to try their free advice service and reali...", "Published on 6th September 2018 The UK's leading independent mortgage brokers, First Mortgage are encouraging first-time buyers to try their free advice service and reali...", "Published on 6th September 2018 The UK's leading independent mortgage brokers, First Mortgage are encouraging first-time buyers to try their free advice service and reali..."];
    $.each(this.$target.items, (index, element) => {
      this.$target.link[index].href=links[index];
      this.$target.day.eq(index).text(days[index]);
      this.$target.month.eq(index).text(months[index]);
      this.$target.img[index].src=imgs[index];
      this.$target.title.eq(index).text(titles[index]);
      let textSplit = texts[index].split(" ");
      if(index == 0) {
        this.$target.readMore[index].href=links[index];
      }
      let i;
      let goodText;
      for(i = 0; i< 20; i++) {
        if( i == 0) {
          goodText = textSplit[i] + " ";
        }
        else {
          goodText += textSplit[i] + " ";
        }
      }
      this.$target.text.eq(index).text(goodText + "...");
    });
  },
  addClassToFirst() {
    this.$target.items.first().addClass('-main');
  },
};
export default LatestArticles;
