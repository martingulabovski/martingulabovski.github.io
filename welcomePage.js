document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  var h3 = document.querySelector("h3.hover");
  var bodyWidth = body.offsetWidth;
  var bodyHeight = body.offsetHeight;

  body.addEventListener("mousemove", function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var distanceX = Math.abs(mouseX - bodyWidth / 2);
    var distanceY = Math.abs(mouseY - bodyHeight / 2);

    var maxDistance = Math.max(distanceX, distanceY);
    var maxDistancePercentage = (maxDistance / (bodyWidth / 2)) * 100;

    body.style.backgroundColor =
      "rgba(128, 128, 128, " + (1 - maxDistancePercentage / 100) + ")";
  });

  h3.addEventListener("mouseenter", function () {
    body.style.backgroundColor = "rgba(128, 128, 128, 1)";
  });

  h3.addEventListener("mouseleave", function () {
    body.style.backgroundColor =
      "rgba(128, 128, 128, " + (1 - maxDistancePercentage / 100) + ")";
  });

  h3.addEventListener("click", function (event) {
    event.preventDefault();
    body.style.animation = "fade-out 0.5s ease forwards";
    setTimeout(function () {
      window.location.href = h3.querySelector("a").href;
    }, 500);
  });
});
