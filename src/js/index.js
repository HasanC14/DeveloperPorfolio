// Loader
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".loader-wrapper").style.display = "none";
});
// Back to top button
const backToTopBtn = document.getElementById('backToTopBtn')
window.onscroll = function (){
  if(document.body.scrollTop >800 || document.documentElement.scrollTop >800){
    backToTopBtn.classList.add("opacity-100");
    backToTopBtn.classList.remove("opacity-0");
  } else {
    backToTopBtn.classList.add("opacity-0");
    backToTopBtn.classList.remove("opacity-100");
  }
}

backToTopBtn.addEventListener('click', function () {
  // dhap kore jabe
  // document.body.scrollTop = 0; 
  // document.documentElement.scrollTop = 0;

  // aste dhire scroll animation hoe jabe
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


const faqElements = document.querySelectorAll(".faq-answer");
const toggleAnswer = (faqNo) => {
  faqElements.forEach(function (element) {
    if (element.getAttribute('id') === faqNo) {
      document.getElementById(faqNo).classList.toggle('open')
    } else {
      element.classList.remove('open');
    }
  });
}


document.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const parallaxElement = document.querySelector('.background');
  parallaxElement.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
