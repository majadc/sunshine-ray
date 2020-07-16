"use strict";

svg4everybody();
$('body').scrollspy({
  target: '#navbarMain'
});
$('#navbarMain a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();
    var hash = this.hash;
    var heightNavbar = $("#navbarMain").height();
    var marginSection = parseInt($("".concat($(this).attr('href'))).css('margin-top'));
    var offset = $(hash).offset().top - heightNavbar - marginSection;
    $('html, body').animate({
      scrollTop: offset
    }, 900, function () {
      if (history.pushState) {
        history.pushState(null, null, hash);
      } else {
        location.hash = hash;
      }
    });
  }
});