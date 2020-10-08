  function openModalFoto() {
    document.querySelector(".imgParentOverlay").style.display = "block";
  }

  function closeModalFoto() {
    document.querySelector(".imgParentOverlay").style.display = "none";
  }

  var slideIndex = 0;
  showSlidesFoto(slideIndex);

  function plusSlidesFoto(n) {
    showSlidesFoto((slideIndex += n));
  }

  function currentSlideFoto(n) {
    showSlidesFoto((slideIndex = n));
  }

  function showSlidesFoto(n) {
    var i;
    var slides = document.querySelectorAll(".imgGuideParent img");
    var imgOverlay = document.querySelector(".imgOverlay");
    var imgOverlayShadow = document.querySelector(".imgOverlayShadow");
    if (n > slides.length) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length;
    }
    var src = slides[slideIndex].getAttribute("src");
    imgOverlay.setAttribute("src", src);
    imgOverlayShadow.setAttribute("src", src);
  }
