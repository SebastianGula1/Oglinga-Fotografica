// When the user scrolls down 120px from the top of the document, resize the navbar's padding 
window.onscroll = function () {
  scrollFunction()
};

const navbar = document.getElementById("nav")

function scrollFunction() {
  if (document.body.scrollTop >= 120 || document.documentElement.scrollTop >= 120 || navbar.clientWidth <=600) {
    document.getElementById("nav").style.padding = "10px 10px";

  } else if (document.body.scrollTop <= 60 || document.documentElement.scrollTop <= 60) {
    document.getElementById("nav").style.padding = "20px 10px";
  }
}