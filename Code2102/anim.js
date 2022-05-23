function anim(){
  // réglages
  
  tl.pause();

tl.from("#arrow circle",{
  x: e => gsap.utils.random(1000,2000)*gsap.utils.random([-1,1]),
  y: e => gsap.utils.random(1000,2000)*gsap.utils.random([-1,1]),
  duration:5},0);


}