// When the user scrolls down 80px from the top of the document, resize the navbar's padding 
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop >= 120 || document.documentElement.scrollTop >= 120) {
    document.getElementById("nav").style.padding = "10px 10px";
  } else if (document.body.scrollTop <= 60 || document.documentElement.scrollTop <= 60) {
    document.getElementById("nav").style.padding = "30px 10px";
  }
}