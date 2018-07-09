$(document).ready(function() {
  
    var listMinHeight = 150;
    var list = $('.list');
    var listWrapper = $('.list-wrapper');
  console.log(list.height(), console.log(listWrapper.height()));
    // show more button if list too long
    if (list.height() > listWrapper.height()) {
      $('.more-info').show();
    }
    
    // When clicking more/less button
    $('.more-info').click(function() {
      
      var fullHeight = $('.list').height();
  
      if ($(this).hasClass('expand')) {
        // contract
        $('.list-wrapper').animate({'height': listMinHeight}, 'slow');
      }
      else {
        // expand 
        $('.list-wrapper').css({'height': listMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
      }
  
      $(this).toggleClass('expand');
      return false;
    });
  });
//For Future Playthroughs Section
$(document).ready(function() {
  
    var list2MinHeight = 150;
    var list2 = $('.list2');
    var list2Wrapper2 = $('.list-wrapper2');
  console.log(list2.height(), console.log(list2Wrapper2.height()));
    // show more button if list too long
    if (list2.height() > list2Wrapper2.height()) {
      $('.more-info2').show();
    }
    
    // When clicking more/less button
    $('.more-info2').click(function() {
      
      var fullHeight = $('.list2').height();
  
      if ($(this).hasClass('expand2')) {
        // contract
        $('.list-wrapper2').animate({'height': list2MinHeight}, 'slow');
      }
      else {
        // expand 
        $('.list-wrapper2').css({'height': list2MinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
      }
  
      $(this).toggleClass('expand2');
      return false;
    });
  });

//Return To Top Button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}