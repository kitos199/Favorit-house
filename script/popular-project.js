const btnSwitchRight = document.querySelector('.btn__switch--right');
const btnSwitchLeft = document.querySelector('.btn__switch--left');
const popularProjectBtnSwitch = document.querySelectorAll(
  '.popular-project__btn__switch'
);
const wrapperProjectSketch = document.querySelector('.wrapper__project-sketch');

// Перелистование картинок
const scrolBtnFooter = function(e){
   if (e.target.matches(".btn__switch--right")||e.target.matches("img.arrow-right")) {
      wrapperProjectSketch.scrollBy({
        left: 350,
        top: 0,
        behavior: 'smooth',
      });
    } else if (
      e.target.matches('.btn__switch--left') ||
      e.target.matches('img.arrow-left')
    ) {
      wrapperProjectSketch.scrollBy({
        left: -350,
        top: 0,
        behavior: 'smooth',
      });
    }
}

for (element of popularProjectBtnSwitch) {
  element.addEventListener('click', scrolBtnFooter);
}