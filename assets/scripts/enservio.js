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
