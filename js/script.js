const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click",()=>{
nav.classList.toggle("active");
});

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

const elements = document.querySelectorAll(".card");

elements.forEach(el=>{
observer.observe(el);
});

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles=[];

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*0.5,
vy:(Math.random()-0.5)*0.5
});
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x+=p.vx;
p.y+=p.vy;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle="#facc15";
ctx.fill();

particles.forEach(p2=>{
let dist=Math.hypot(p.x-p2.x,p.y-p2.y);

if(dist<120){

ctx.beginPath();
ctx.moveTo(p.x,p.y);
ctx.lineTo(p2.x,p2.y);
ctx.strokeStyle="rgba(255,255,255,0.05)";
ctx.stroke();

}

});

});

requestAnimationFrame(animate);

}

animate();
