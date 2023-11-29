document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('li');
    let activeSlide = 0;
  
    slides[activeSlide].classList.add('active');
  
    setInterval(() => {
      slides[activeSlide].classList.remove('active');
      activeSlide = (activeSlide + 1) % slides.length;
      slides[activeSlide].classList.add('active');
    }, 5000);
  });
  
