$("#content").css('margin-top',$("#header").css("height"));

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    // scroll
    $("#headerlogo").height("70px");
    $('#headerphone').css('font-size','1.1rem');
  } else {
    // initial
    $("#headerlogo").height("100px");
    $('#headerphone').css('font-size','1.3rem');
  }
}
