gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

gsap.to(".circ", {
    scale: 1.6,
    opacity: 0,
    repeat: -1
})


gsap.from("#yellow-section", {
    y: 200,
    ease: Expo,
    duration:.5,
    opacity:0,

    scrollTrigger: {
        trigger: "#yellow-section",
        // markers: true,
        start: "top 98%",
        scroller: "#main"

    }
})
gsap.from("#yellow-section2", {
    y: 200,
    ease: Expo,
    duration:.5,
    opacity:0,

    scrollTrigger: {
        trigger: "#yellow-section2",
        scroller: "#main",
        // markers: true,
        start: "top 98%",
    }
})
gsap.from("#yellow-section3", {
    y: 200,
    ease: Expo,
    duration:.5,
    opacity:0,

    scrollTrigger: {
        trigger: "#yellow-section3",
        scroller: "#main",
        // markers: true,
        start: "top 98%",
    }
})
gsap.from("#yellow-section4", {
    y: 200,
    ease: Expo,
    duration:.5,
    opacity:0,

    scrollTrigger: {
        trigger: "#yellow-section4",
        // markers: true,
        scroller: "#main",
        start: "top 98%",
    }
})

gsap.from(".card2", {
    x: -350,
    duration: .8,
    ease: Expo,

    scrollTrigger:{
        trigger: ".card2",
        start: "top 90%",
        // markers: true
        scroller: "#main",
    }
})
gsap.from(".card3", {
    x: -600,
    duration: .8,
    ease: Expo,

    scrollTrigger:{
        trigger: ".card2",
        start: "top 90%",
        scroller: "#main",
        // markers: true
    }
})

gsap.to("#kutta img", {
    x: 1350,
    duration: 20,
    ease: "none",
    repeat: -1,
    scrollTrigger:{
        trigger:"#kutta img",
        scroller: "#main",
        start:"top 70%",
        // markers:true
    }
})

var item = document.querySelectorAll(".items-page3");
var cursor = document.querySelector("#cursor");
var fix = document.querySelector("#main button");
var pg4btn = document.querySelector("#page4 button");
var btnhov = document.querySelector("#fixicon");
var dbatxt = document.querySelector(".dibba h3");
var main = document.querySelector("#main");
var yellowsec = document.querySelector("#yellow-section");
var yellowsec2 = document.querySelector("#yellow-section2");
var yellowsec3 = document.querySelector("#yellow-section3");
var yellowsec4 = document.querySelector("#yellow-section4");
var img1 = document.querySelector(".image1");
var img2 = document.querySelector(".image2");
var img3 = document.querySelector(".image3");
var img4 = document.querySelector(".image4");


main.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.pageX +"px"
    cursor.style.top = dets.pageY +"px"
});

fix.addEventListener("mousemove", function(){
    cursor.style.height = "20px"
    cursor.style.width = "20px"
})
fix.addEventListener("mouseleave", function(){
    cursor.style.height = "40px"
    cursor.style.width = "40px"
})
btnhov.addEventListener("mousemove", function(){
    cursor.style.height = "20px";
    cursor.style.width = "20px";
    // cursor.style.transition = ".5s";

})
btnhov.addEventListener("mouseleave", function(){
    cursor.style.height = "40px"
    cursor.style.width = "40px"
    // cursor.style.transition = ".5s";
})
pg4btn.addEventListener("mousemove", function(){
    cursor.style.height = "20px"
    cursor.style.width = "20px"
})
pg4btn.addEventListener("mouseleave", function(){
    cursor.style.height = "40px"
    cursor.style.width = "40px"
})

yellowsec.addEventListener("mousemove", function(){
    yellowsec.style.scale = "1.1";
    img1.style.scale = "1.3";
})
yellowsec.addEventListener("mouseleave", function(){
    yellowsec.style.scale = "1";
    img1.style.scale = "1";
})
yellowsec2.addEventListener("mousemove", function(){
    yellowsec2.style.scale = "1.1";
    img2.style.scale = "1.3";
})
yellowsec2.addEventListener("mouseleave", function(){
    yellowsec2.style.scale = "1";
    img2.style.scale = "1";
})
yellowsec3.addEventListener("mousemove", function(){
    yellowsec3.style.scale = "1.1";
    img3.style.scale = "1.3";
})
yellowsec3.addEventListener("mouseleave", function(){
    yellowsec3.style.scale = "1";
    img3.style.scale = "1";
})
yellowsec4.addEventListener("mousemove", function(){
    yellowsec4.style.scale = "1.1";
    img4.style.scale = "1.3";
})
yellowsec4.addEventListener("mouseleave", function(){
    yellowsec4.style.scale = "1";
    img4.style.scale = "1";
})

var container = document.querySelectorAll(".dibba1");

for(var i = 0; i<container.length; i++){
    container[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })
}