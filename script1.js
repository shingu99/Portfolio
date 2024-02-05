
// ==== Animate on Scroll Initialize  ==== //
AOS.init();
const scrBtn = document.getElementById("arrowDown");
const scrUp = document.getElementById("arrowUp");
const webCard = document.getElementById("webdev");

let bounceBtn = scrBtn;
  
gsap.from("#myName", {
   opacity: 0,
   y: -20,
   delay: 0.2,
   duration: 0.5,
   stagger: 0.3,
 });

 gsap.from("#hrTag", {
   opacity: 0,
   y: -20,
   delay: 0.5,
   duration: 0.5,
   stagger: 0.3,
 });

gsap.from(".nav_menu .nav-item", {
   opacity: 0,
   y: -20,
   delay: 1,
   duration: 0.5,
   stagger: 0.3,
 });

 gsap.from(webCard, {
   opacity: 0,
   x: 40,
   delay: 1.2,
   duration: 0.5,
   stagger: 0.3,
 });

 gsap.from("#webCardHead", {
   opacity: 0,
   x: 40,
   delay: 1.8,
   duration: 0.5,
   stagger: 0.3,
 });

 gsap.from("#webCardBody .webCardP", {
   opacity: 0,
   x: 40,
   delay: 2.2,
   duration: 0.5,
   stagger: 0.3,
 });

 gsap.from("#chehra", {
   opacity: 0,
   x: -40,
   delay: 2,
   duration: 0.5,
   stagger: 0.3,
 });



//  function arrDownClick()
//  {
//     scrUp.classList.remove("hide");
//     scrBtn.classList.add("hide");
    
//  }
//  function arrUpClick()
//  {
//     scrBtn.classList.remove("hide");
//     scrUp.classList.add("hide");
    
//  }

 function contactClick()
 {
   scrUp.classList.remove("hide");
 }

 window.onwheel = e => {
   if(e.deltaY >= 0){
     // Wheel Down
     console.log('Down');
     scrUp.classList.remove("hide");
   } else {
     // Wheel Up
     console.log('Up');
     scrBtn.classList.remove("hide");
   }
 }

 var tl2 = new TimelineMax({ repeat: 10, repeatDelay: 0.2  })
  .to(scrBtn, 0.5, { y: -20 })
  .to(scrBtn, 0.5, { y: 0 })
  .repeat(-1);
  var tl3 = new TimelineMax({ repeat: 10, repeatDelay: 0.2  })
  .to(scrUp, 0.5, { y: 20 })
  .to(scrUp, 0.5, { y: 0 })
  .repeat(-1);

 