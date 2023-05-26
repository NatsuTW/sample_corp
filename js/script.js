const swiper = new Swiper('.swiper', {
  loop: true,
  loopedSlides: 6,
  slidesPerView: 'auto',
  width: 274,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    768: {
      width: 400,
      spaceBetween: 40,
    },
  }
});

// wow.js
new WOW().init();

//scroll
jQuery('a[href^="#"]').on('click', function () {
  let header = jQuery('.header').outerHeight();
  let id = jQuery(this).attr('href');
  let target = jQuery(id === "#" ? "html" : id)
  let position = jQuery(target).offset().top

  jQuery('html, body').animate({
    scrollTop: position - header,
  }, 300)
})

//drawer menu
jQuery('.js-hamburger-icon').on('click', function (e) {
  e.preventDefault();
  jQuery('.js-hamburger-icon').toggleClass('is-open');
  jQuery('.js-nav').toggleClass('is-open');
  jQuery('.js-drawer-bg').toggleClass('is-open');
  return false;
})

//drawer menu items
jQuery('.js-nav-link').on('click', function (e) {
  jQuery('.js-hamburger-icon').removeClass('is-open');
  jQuery('.js-nav').removeClass('is-open');
  jQuery('.js-drawer-bg').removeClass('is-open');
})

//Q & A box
jQuery('.faq-box').on('click', function () {
  jQuery(this).children('.faq-box__a').slideToggle();
  jQuery(this).find('.faq-box__icon').toggleClass('is-open')

  return false;
})

//kana input check
jQuery('#js-form input[id="kana"]').on('change', function () {
  if (!jQuery(this).val().match(/^[ァ-ロワヲンー 　\r\n\t]*$/)) {
    alert('カタカナで入力してください')
  }
})

// required form input check
let submit = jQuery('#js-submit')
jQuery('#js-form input, #js-form textarea').on('change', function () {
  if (
    jQuery('#js-form input[id="name"]').val() !== "" &&
    jQuery('#js-form input[id="kana"]').val() !== "" &&
    jQuery('#js-form input[type="checkbox"]').prop('checked') === true
  ) {
    // when form input is all entered
    submit.prop('disabled', false)
  } else {
    // when form input is not all entered
    submit.prop('disabled', true)
  }
})

//to-top button
jQuery(window).on('scroll', function () {
  let BtnShowScrollAmount = 100;
  let currentScrollAmount = jQuery(this).scrollTop()

  if (BtnShowScrollAmount < currentScrollAmount) {
    jQuery('.js-to-top-btn').addClass('is-show');
    jQuery('.js-to-top-btn').fadeIn(300)
  } else {
    jQuery('.js-to-top-btn').removeClass('is-show');
  }
})