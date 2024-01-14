const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

function onmobile(){
    window.addEventListener("touchmove", function(dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}
 

function navBar(){
    var Menu = document.querySelector('#btn');
var Hiddenmenu = document.querySelector('#hidden-menu ');
// var HiddenAfter = window.getComputedStyle(Hiddenmenu,"::after");

Menu.addEventListener('click',()=>{
    Menu.style.display = "none";
    Hiddenmenu.style.opacity = "1";
});
}



function firstPageAnim(){
    var t1 = gsap.timeline();

    t1.from("#nav",{
        y: '-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
    })
    .to(".boundingelem",{
        y: '0',
        duration:2,
        ease:Expo.easeInOut,
        stagger:0.2,
    })
   
}

function clock(){

    var time = setInterval(clocktime, 1000);   

function clocktime(){
var d = new Date();
var presentTime = d.toLocaleTimeString();

  document.getElementById('showClock').innerHTML = presentTime;

}
}


circleMouseFollower();
navBar();
onmobile();
firstPageAnim();
clock();

document.querySelectorAll(".elem").forEach(function (elem){
    var rotate =0;
    var diffrot =0;
  
   elem.addEventListener("mousemove", function (dets){
    // elem.querySelector("img").style.opacity = 1;
   
   var diff = dets.clientY-200+"px" - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX-100+"px",
            rotate:gsap.utils.clamp(-20 , 20 ,diffrot*.5),
            // transform: transition(-50),
          });

        //   elem.querySelector('h1').style.color = grey;
});

   elem.addEventListener('mouseleave',function (dets){
     gsap.to(elem.querySelector('img'),{
        opacity:0,
        ease:Power3,
     })
   }) 
   
  
});
//  document.querySelectorAll(".elem").forEach(function (elem){
   
//     var link = ["https://htm2rg-3000.csb.app/","https://kanisaket10.github.io/WeatherApp/","https://kanisaket10.github.io/calc./"]
//   elem.addEventListener("click",function (link) {
//       window.open(link[i])
//   })

//  });
//elem.querySelector("img").style.opacity = "1";
 

