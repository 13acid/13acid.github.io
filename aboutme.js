let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

showSlide(slideIndex);

function showSlide(n) {

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

  function prevSlide() {
  if(slideIndex === 0) {
    slideIndex = slides.length-1;
  } else {
    slideIndex -= 1;
  };
  showSlide(slideIndex);
}

function nextSlide() {
  if(slideIndex === slides.length-1) {
    slideIndex = 0;
  } else {
    slideIndex += 1;
  }
  showSlide(slideIndex);
}
