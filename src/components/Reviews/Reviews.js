import $ from 'jquery';

const Reviews = {
  settings: {
    target: '.reviews',
    reviews: '.reviewItem',
    photo: '.reviewItem__img',
    stars: '.reviewItem__star',
    text: '.reviewItem__text',
    name: '.reviewItem__name',
    img: '.reviews__img',
  },
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if ($(this.settings.target).length > 0) {
      this.catchDOM(this.settings);
      this.addReviews();
      const main = /main/;
      if(main.test(this.$target.root.prevObject[0].URL))
      {
        this.addClassMainPage();
        this.addImageToMainPage();
      }
    }
  },
  catchDOM(settings) {
    const target = $(settings.target);
    this.$target = {
      root: target,
      reviews: target.find(settings.reviews),
      photo: target.find(settings.photo),
      stars: target.find(settings.stars),
      text: target.find(settings.text),
      name: target.find(settings.name),
      img: target.find(settings.img),
    };
  },
  addReviews() {
    const photos = ["./assets/images/ReviewItem/photo1.png", "./assets/images/ReviewItem/photo2.png"];
    const howManyStars = [5, 4];
    const review = [ "A great service. Simple and Transparent. A fantastic way to find the right FCA regulated adviser for my requirements. They help from start to finish if you're not sure what to do.", "Brillant, they did exactly as promised. Introduced me to a helpful IFA assisted me through each part of the process and made sure I understood what I was doing. Thank You"];
    const names = ["Brendan Watters", "Angela Keepax"];
    $.each(this.$target.reviews, (index, element) => {
      this.$target.photo[index].src=photos[index];
      this.$target.text.eq(index).text(review[index]);
      this.$target.name.eq(index).text(names[index]);
      if(howManyStars[index] < 5) {
        const stars = $(element).find(this.$target.stars);
        let number = howManyStars[index];
        for(number; number < stars.length; number++) {
          stars.eq(number).addClass("-displayNone");
        }
      }
    });
  },
  addClassMainPage() {
    this.$target.root.addClass("-mainPage");
    this.$target.reviews.addClass("-mainPage");
    this.$target.text.addClass("-mainPage");
    this.$target.name.addClass("-mainPage");
  },
  addImageToMainPage(){
    this.$target.img[0].src="./assets/images/Reviews/review2.png";
  },
};
export default Reviews;
