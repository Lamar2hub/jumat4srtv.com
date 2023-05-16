const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".container,.navbar-container,.toggle");
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})

function getDistanceFromTheTop(element){
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}
function nativeScroll(DistanceFromTheTop){
  window.scroll({
    top:DistanceFromTheTop,
  })
}


function scrollToSection(event){
event.preventDefault();
const DistanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
nativeScroll(DistanceFromTheTop);
}


const menulinks = document.querySelectorAll(".menu-list-item a");
menulinks.forEach((link)=>{
  link.addEventListener("click",scrollToSection);
}) ;