// HEADROOM
var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement);
headroom.init(); 

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
$(".current-inventory-bar").click( function() {
  $(".current-inventory").toggleClass("open");
  $(".header--fixed").toggleClass("headroom--unpinned");
});
