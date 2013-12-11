$(document).ready(function () {

  cataCommon.init();

  // Handle post hover
  $(".post-box").hover(function (event) {
    // change the brightness of the image
    $(this).addClass("hover");
  }, function (event) {
    $(this).removeClass("hover");
  });

  // Make a Masonry page, if necessary
//  var $flickrGallery = $('.flickr-gallery');
//  $flickrGallery.masonry({
//    'gutter': 10,
//    'itemSelector': '.figure'
//  });
  
  // Capture the clicks on a Flickr Gallery image
//  $flickrGallery.find('a').on('click', function(event) {
//    event.preventDefault();
//    var href = $(this).attr('href');
//    console.log(href);
//  });
  
//  $('.picasa-gallery').masonry({
//    columnWidth: 300,
//    itemSelector: '.picasa-image'
//  });
  
  
  // Animate the Twitter feed.

  var $twitterContainer = $('#js-twitter-list'),
      $twitterItems = $twitterContainer.find('.twitter-list__item'),
      tick = 0,
      offset = 0,
      delay = 4000,
      ticker = setInterval(function () {
    // Check that we're not at the end
    // but don't go all the way to the bottom.
    // 44 from the bottom chosen randomly.
    //if (tick < ($twitterItems.length - 4)) {
      // Get the height of the next one in line
      var activeItem = $twitterItems.eq(tick);
      offset -= (activeItem.height() + 40); // 40px bottom padding
      $twitterContainer.transition({y: offset}, 650, 'easeInOutQuad', _tweetAnimationDone);
      tick++;
    //} else {
      //clearInterval(ticker);
    //}
  }, delay);

function _tweetAnimationDone() {
  // if we are at the end, move back to the beginning without an animation
  if (tick == Math.round($twitterItems.length / 2)) {
    $twitterContainer.transition({y: 0}, 0, 'linear');
    tick = 0;
    offset = 0;
  }
}

});