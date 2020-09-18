import $ from 'jquery';

const HelpTips = {
  settings: {
    target: '.helpTips',
    items: '.helpTipsItem',
    link: '.helpTipsItem__link',
    title: '.helpTipsItem__title',
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
      title: target.find(settings.title),
    };
  },
  addItems() {
    const links = ["#", "#", "#", "#"];
    const titles = [ "How a Pension Scheme Works", "Leaving Your Pension Scheme", "Choosing Investment Funds", "Pensions and Tax", "When Can I Take My Pension", "Top Tips For Your Pension"];
    $.each(this.$target.items, (index, element) => {
      this.$target.link[index].href=links[index];
      this.$target.title.eq(index).text(titles[index]);
    });
  },
};
export default HelpTips;
