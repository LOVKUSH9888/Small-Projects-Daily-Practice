var hamburger = document.getElementById("hamburger");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";
hamburger.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
  } else {
    sideNav.style.right = "-250px";
  }
};

// Smooth scroll by the CDN link
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
