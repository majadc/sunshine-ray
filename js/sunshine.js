svg4everybody();

$('body').scrollspy({ target: '#navbarMain'});
$('#navbarMain a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();
    const hash = this.hash;
    const heightNavbar = $("#navbarMain").height();
    const marginSection = parseInt($(`${$(this).attr('href')}`).css('margin-top'));
    let offset = $(hash).offset().top - heightNavbar - marginSection;
    $('html, body').animate({
      scrollTop: offset
    }, 900, function () {
      if ( history.pushState ) {
        history.pushState(null, null, hash);
      } else {
        location.hash = hash;
      }
    
    });
  }
});
