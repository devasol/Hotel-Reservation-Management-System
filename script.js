const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let firstimg = document.querySelector(".first-img");
let secondimg = document.querySelector(".second-img");

let currentIndex = 0;

function updateSlidePosition() {
  slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function showSlide(index) {
  if (index < 0) {
    currentIndex = slide.length - 1;
  } else if (index >= slide.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  updateSlidePosition();
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
var accItem = document.getElementsByClassName("accordionItem");
var accHD = document.getElementsByClassName("accordionIHeading");

for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
  var itemClass = this.parentNode.className;
  for (var i = 0; i < accItem.length; i++) {
    accItem[i].className = "accordionItem close";
  }
  if (itemClass == "accordionItem close") {
    this.parentNode.className = "accordionItem open";
  }
}
