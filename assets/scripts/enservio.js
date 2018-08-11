// ATTACHMENT DELETE BUTTONS
$(".item-one").click(function() {
  $(".expanding-button-box.item-one").toggleClass("expand");
});
$(".item-two").click(function() {
  $(".expanding-button-box.item-two").toggleClass("expand");
});
$(".click-two").click(function() {
  $(".expanding-button-box.two").toggleClass("expand");
});
$(".no-two").click( function() {
  $(".expanding-button-box.two").removeClass("expand");
});
$(".yes-two").click( function() {
  $(".expanding-button-box.two").removeClass("expand");
});
$(".click-one").click(function() {
  $(".expanding-button-box.one").toggleClass("expand");
});
$(".no-one").click( function() {
  $(".expanding-button-box.one").removeClass("expand");
});
$(".yes-one").click( function() {
  $(".expanding-button-box.one").removeClass("expand");
});

// CURRENT INVENTORY BAR BEHAVIOR
/*
$(".current-inventory-bar").click( function() {
  $(".current-inventory").toggleClass("open");
  $(".header--fixed").toggleClass("headroom--unpinned");
});
*/

// STATUS BARS
$(".show-error").click( function() {
  $(".alert-bar.error").addClass("show");
  setTimeout(function() { 
    $(".alert-bar.error").removeClass("show") }, 10000);
});
$(".dismiss.error").click( function() {
  $(".alert-bar.error").removeClass("show");
});
$(".show-success").click( function() {
  $(".alert-bar.success").addClass("show");
  setTimeout(function() { 
    $(".alert-bar.success").removeClass("show") }, 10000);
});
$(".dismiss.success").click( function() {
  $(".alert-bar.success").removeClass("show");
});
$(".show-system").click( function() {
  $(".alert-bar.system").addClass("show");
  setTimeout(function() { 
    $(".alert-bar.system").removeClass("show") }, 10000);
});
$(".dismiss.system").click( function() {
  $(".alert-bar.system").removeClass("show");
});

// SHOW/HIDE PASSWORD
$(".show-hide-password").click( function() {
  $(".show-password").toggleClass("hide");
});

// TIMEOUT
$(".continue").click( function() {
  $(".timeout").removeClass("show");
});

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