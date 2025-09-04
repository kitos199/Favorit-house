const btnSwitchRight = document.querySelector('.btn__switch--right');
const btnSwitchLeft = document.querySelector('.btn__switch--left');
const popularProjectBtnSwitch = document.querySelectorAll(
  '.popular-project__btn__switch'
);
const wrapperProjectSketch=document.querySelector('.wrapper__project-sketch');

btnSwitchRight.addEventListener("click", ()=>{
  wrapperProjectSketch.scrollBy({
  left: 350,
  top: 0,
  behavior: 'smooth'
});
})


btnSwitchLeft.addEventListener("click", ()=>{
  wrapperProjectSketch.scrollBy({
    left:-350,
    top:0,
    behavior:"smooth"
  })
})
