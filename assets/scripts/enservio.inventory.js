// CURRENT INVENTORY BAR BEHAVIOR
$('.current-inventory-bar').click(function() {
  $('.current-inventory').toggleClass('open');
});


// PIN/UNPIN CURRENT INVENTORY BAR
/*
$.fn.isOnScreen = function () {
    var win = $(window);
    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};
$(window).scroll(function () {
    if ($('.release-inventory').isOnScreen() == true) {
        $('.current-inventory').addClass('release');
    }
    else{
        $('.current-inventory').removeClass('release');
        $('.current-inventory').removeClass('open');
    }
});
*/


// STICK RELEASE-INVENTORY TO TOP
/*
$(window).scroll(function() {
    var distanceFromTop = $(this).scrollTop();
    if (distanceFromTop >= $('#create-inventory').height()) {
        $('.release-inventory').addClass('fixed');
    } else {
        $('.release-inventory').removeClass('fixed');
    }
});
*/


// ADD ITEM TO INVENTORY ANIMATION
$('.add-item').click(function() {
  $('#first.inventory-capture').addClass('add');
  $('.inventory-item').addClass('added');
  $('.inventory-item.new').addClass('added');
  $('.forms').addClass('new');
});


// DELETE INVENTORY ITEM ANIMATION
$('.yes-three').click(function() {
  $('.inventory-item.new').removeClass('added');
  $('.inventory-item.new').addClass('delete');
});