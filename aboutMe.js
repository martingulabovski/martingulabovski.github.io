$(function () {
    $(document).scroll(function(){
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.querySelector(".back-to-top");
  
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 200) {
        backButton.style.display = "block";
      } else {
        backButton.style.display = "none";
      }
    });
  
    backButton.addEventListener("click", function(e) {
      e.preventDefault();
      document.documentElement.scrollTop = 0; 
      document.body.scrollTop = 0; 
    });
  });
  