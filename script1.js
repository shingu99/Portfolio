

// ==== Animate on Scroll Initialize  ==== //
AOS.init();
const scrBtn = document.getElementById("arrowDown");
const scrUp = document.getElementById("arrowUp");
const webCard = document.getElementById("webdev");


  
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

const modaltitle = document.getElementById("projectModallabel"); 
const modalBody = document.getElementById("projectModalBody");


const awsBody = document.getElementById("awsCardBody");

function insertDataAws()
{
  modaltitle.innerHTML = "Frame Recognition using AWS Lambda"
  modalBody.innerHTML = awsBody.innerHTML;
}

const starBody = document.getElementById("starCardBody");

function insertDataStar()
{
  modaltitle.innerHTML = "Star Wars Blog"
  modalBody.innerHTML = starCardBody.innerHTML;
}

const sudBody = document.getElementById("sudokuCardBody");

function insertDataSud()
{
  modaltitle.innerHTML = "Value Based Sudoku"
  modalBody.innerHTML = sudBody.innerHTML;
}

const mobileCardBody = document.getElementById("mobileCardBody");

function insertDataMob()
{
  modaltitle.innerHTML = "Mobile Offloading"
  modalBody.innerHTML = mobileCardBody.innerHTML;
}

const modelCardBody = document.getElementById("modelCardBody");

function insertDataMod()
{
  modaltitle.innerHTML = "Package Delivery Route Optimization Model"
  modalBody.innerHTML = modelCardBody.innerHTML;
}


const amakartCardBody = document.getElementById("amakartCardBody");
function insertDataAma()
{
  modaltitle.innerHTML = "AmaKart Shopping"
  modalBody.innerHTML = amakartCardBody.innerHTML;
}

let tog = 1;
const toggler = document.getElementById("navbarTogglerBtn");
const itag = document.getElementById("navbarToggler");
toggler.addEventListener("click", function() {
  if(tog===1)
  {
    itag.classList.remove("fa-bars");
    itag.classList.add("fa-xmark");
    tog=0;
  }
  else{
    itag.classList.remove("fa-xmark");
    itag.classList.add("fa-bars");
    tog=1;
  }

});