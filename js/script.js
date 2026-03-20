// MENU MOVIL

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

toggle.onclick = () =>{
nav.classList.toggle("active");
}


// SCROLL ANIMATION

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () =>{

reveals.forEach(el =>{

const top = el.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if(top < windowHeight - 100){

el.classList.add("active");

}

})

})


// PARTICLES

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speedX:(Math.random()-0.5)*0.5,
speedY:(Math.random()-0.5)*0.5
});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x+=p.speedX;
p.y+=p.speedY;

ctx.fillStyle="rgba(255,255,255,0.5)";
ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();

})

requestAnimationFrame(animate);

}

animate();
