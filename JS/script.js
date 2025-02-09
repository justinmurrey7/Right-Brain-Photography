var bannerStatus = 1;
var bannerTimer = 9000;

window.onload = function () {
  bannerLoop();
};

var startBannerLoop = setInterval(function () {
  bannerLoop();
}, bannerTimer);

function bannerLoop() {
  if (bannerStatus === 1) {
    document.getElementById("carousel-item2").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("carousel-item1").style.transform =
        "translateX(0)";
      document.getElementById("carousel-item1").style.zIndex = "1000";
      document.getElementById("carousel-item2").style.transform =
        "translateX(-100%)";
      document.getElementById("carousel-item2").style.zIndex = "1500";
      document.getElementById("carousel-item3").style.transform =
        "translateX(100%)";
      document.getElementById("carousel-item3").style.zIndex = "500";
    }, 500);
    setTimeout(function () {
      document.getElementById("carousel-item2").style.opacity = "1";
    }, 1000);
    bannerStatus = 2;
  } else if (bannerStatus === 2) {
    document.getElementById("carousel-item3").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("carousel-item2").style.transform =
        "translateX(0)";
      document.getElementById("carousel-item2").style.zIndex = "1000";
      document.getElementById("carousel-item3").style.transform =
        "translateX(-100%)";
      document.getElementById("carousel-item3").style.zIndex = "1500";
      document.getElementById("carousel-item1").style.transform =
        "translateX(100%)";
      document.getElementById("carousel-item1").style.zIndex = "500";
    }, 500);
    setTimeout(function () {
      document.getElementById("carousel-item3").style.opacity = "1";
    }, 1000);
    bannerStatus = 3;
  } else if (bannerStatus === 3) {
    document.getElementById("carousel-item1").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("carousel-item3").style.transform =
        "translateX(0)";
      document.getElementById("carousel-item3").style.zIndex = "1000";
      document.getElementById("carousel-item1").style.transform =
        "translateX(-100%)";
      document.getElementById("carousel-item1").style.zIndex = "1500";
      document.getElementById("carousel-item2").style.transform =
        "translateX(100%)";
      document.getElementById("carousel-item2").style.zIndex = "500";
    }, 500);
    setTimeout(function () {
      document.getElementById("carousel-item1").style.opacity = "1";
    }, 1000);
    bannerStatus = 1;
  }
}
