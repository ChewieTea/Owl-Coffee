const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlide = 0;// assigns currentSlide with 0
const slideWidth = slider.clientWidth; // assigns the width, used for translation distance for each slide.
const totalSlides = slider.children.length;//calculates the nuymber of slides by the length of the children property?
const sliderNavLinks = document.querySelectorAll('.slider-nav a');

prevButton.addEventListener('click', () => {
    if (currentSlide === 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide--;
    }
    const slideTransform = currentSlide * slideWidth;
    Array.from(slider.children).forEach((slide) => {
      slide.style.transform = `translateX(-${slideTransform}px)`;
    });
  });
  
  nextButton.addEventListener('click', () => {
    if (currentSlide === totalSlides - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    const slideTransform = currentSlide * slideWidth;
    Array.from(slider.children).forEach((slide) => {
      slide.style.transform = `translateX(-${slideTransform}px)`;
    });
  });

  sliderNavLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      currentSlide = index;
      const slideTransform = currentSlide * slideWidth;
      Array.from(slider.children).forEach((slide) => {
        slide.style.transform = `translateX(-${slideTransform}px)`;
      });
    });
  });
