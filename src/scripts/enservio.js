// ATTACHMENT DELETE BUTTONS
$('.item-one').click(function() {
  $('.expanding-button-box.item-one').toggleClass('expand');
});
$('.item-two').click(function() {
  $('.expanding-button-box.item-two').toggleClass('expand');
});
$('.click-three').click(function() {
  $('.expanding-button-box.three').toggleClass('expand');
});
$('.no-three').click( function() {
  $('.expanding-button-box.three').removeClass('expand');
});
$('.click-two').click(function() {
  $('.expanding-button-box.two').toggleClass('expand');
});
$('.no-two').click( function() {
  $('.expanding-button-box.two').removeClass('expand');
});
$('.yes-two').click( function() {
  $('.expanding-button-box.two').removeClass('expand');
});
$('.click-one').click(function() {
  $('.expanding-button-box.one').toggleClass('expand');
});
$('.no-one').click( function() {
  $('.expanding-button-box.one').removeClass('expand');
});
$('.yes-one').click( function() {
  $('.expanding-button-box.one').removeClass('expand');
});


// ATTACHMENT DELETE BUTTON ERROR
$('.attachment-error').click( function() {
  $('ul.attachment-list li').toggleClass('invalid');
});


// SPINNER BUTTONS
$('.delay.one').click(function() {
  $('.post-processing.one').toggleClass('active');
});
$('.delay.two').click(function() {
  $('.post-processing.two').toggleClass('active');
});
$('.delay.three').click(function() {
  $('.post-processing.three').toggleClass('active');
});
$('.delay.four').click(function() {
  $('.post-processing.four').toggleClass('active');
});


// ALERT BARS
$('.show-error').click( function() {
  $('.alert-bar.error').addClass('show');
  setTimeout(function() { 
    $('.alert-bar.error').removeClass('show') }, 10000);
});
$('.dismiss.error').click( function() {
  $('.alert-bar.error').removeClass('show');
});
$('.show-confirm').click( function() {
  $('.alert-bar.confirm').addClass('show');
});
$('.dismiss.confirm').click( function() {
  $('.alert-bar.confirm').removeClass('show');
});
$('.show-success').click( function() {
  $('.alert-bar.success').addClass('show');
  setTimeout(function() { 
    $('.alert-bar.success').removeClass('show') }, 10000);
});
$('.dismiss.success').click( function() {
  $('.alert-bar.success').removeClass('show');
});
$('.show-system').click( function() {
  $('.alert-bar.system').addClass('show');
  setTimeout(function() { 
    $('.alert-bar.system').removeClass('show') }, 10000);
});
$('.dismiss.system').click( function() {
  $('.alert-bar.system').removeClass('show');
});


// SHOW/HIDE PASSWORDS
$(".show-hide-password").click(function() {
  $(this).toggleClass("la-eye-slash la-eye");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});


// TIMEOUT
$('.show-timeout').click( function() {
  $('.timeout').addClass('show');
});
$('.continue').click( function() {
  $('.timeout').removeClass('show');
});


// LIVECHAT ONLINE/OFFLINE
var d = new Date();
if(d.getHours() >= 8 && d.getHours() <= 17 ){
  $(".livechat.online").show();
  $(".livechat.offline").hide();
}
else {  
  $(".livechat.offline").show();
  $(".livechat.online").hide();
}


// SMOOTH SCROLL
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#!"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - $("header").outerHeight(true)
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });