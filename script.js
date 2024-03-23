function loding(){
    let tl=gsap.timeline();
tl.to("#yellow1",{
    top:"-100%",
    delay:"0.5",
    duration:"0.5",
    ease:" expo.out"
})

tl.from("#yellow2",{
    top:"-100%",
    delay:"0.6",
    duration:"0.7",
    ease:" expo.out"
},"anim")

tl.to("#loder h1",{
    color:"black",
    duration:"0.5",
    delay:"0.6",
 
},"anim")
tl.to("#loder",{
  opacity:0,
  display:"none"
})
}
loding();
const scroll=new LocomotiveScroll({
    el:document.querySelector('#main'),
    smooth:true,

})
var elems=document.querySelectorAll(".elem")
var page2=document.querySelector("#page2");
elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
     var bgimg= ele.getAttribute("data-img")
   page2.style.backgroundImage=`url(${bgimg})`
    })
})