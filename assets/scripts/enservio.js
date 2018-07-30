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

// STATUS BARS
$(".show-error").click( function() {
  $(".status-bar.error").addClass("show");
  setTimeout(function() { 
    $(".status-bar.error").removeClass("show") }, 10000);
});
$(".dismiss.error").click( function() {
  $(".status-bar.error").removeClass("show");
});
$(".show-success").click( function() {
  $(".status-bar.success").addClass("show");
  setTimeout(function() { 
    $(".status-bar.success").removeClass("show") }, 10000);
});
$(".dismiss.success").click( function() {
  $(".status-bar.success").removeClass("show");
});
$(".show-system").click( function() {
  $(".status-bar.system").addClass("show");
  setTimeout(function() { 
    $(".status-bar.system").removeClass("show") }, 10000);
});
$(".dismiss.system").click( function() {
  $(".status-bar.system").removeClass("show");
});