import $ from 'jquery';

const Info = {
  settings: {
    target: '.info',
    items: '.infoItem',
    link: '.infoItem__link',
    img: '.infoItem__img',
    title: '.infoItem__title',
    text: '.infoItem__text',
  },
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if ($(this.settings.target).length > 0) {
      this.catchDOM(this.settings);
      this.addItems();
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
    };
  },
  addItems() {
    const links = ["#", "#", "#", "#"];
    const imgs = ["./assets/images/InfoItem/img1.png", "./assets/images/InfoItem/img2.png", "./assets/images/InfoItem/img3.png", "./assets/images/InfoItem/img4.png"];
    const titles = [ "Final Salary Pension Transfers", "Pension Reviews & Transfer", "Pension Drawdown", "Retriment Options & Annuities"];
    const texts = ["Simple, convenient, effective pension advice", "Plan cerfully, review regularly, adjust accordingly", "You could release up to 25% of your pension tax free", "Taking into account your health and lifestyle"];
    $.each(this.$target.items, (index, element) => {
      this.$target.link[index].href=links[index];
      this.$target.img[index].src=imgs[index];
      this.$target.title.eq(index).text(titles[index]);
      this.$target.text.eq(index).text(texts[index]);
      
    });
  },
};
export default Info;
