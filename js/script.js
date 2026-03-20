/* =========================
MENU MOVIL
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle) {
menuToggle.addEventListener("click", () => {
nav.classList.toggle("active");
});
}

/* =========================
SCROLL REVEAL
========================= */

function revealOnScroll() {

const reveals = document.querySelectorAll(".reveal");

reveals.forEach((element) => {

const windowHeight = window.innerHeight;
const elementTop = element.getBoundingClientRect().top;
const revealPoint = 100;

if (elementTop < windowHeight - revealPoint) {
element.classList.add("active");
}

});

}

window.addEventListener("scroll", revealOnScroll);

/* =========================
PARTICLES BACKGROUND
========================= */

const canvas = document.getElementById("particles");

if (canvas) {

const ctx = canvas.getContext("2d");

let particles = [];
const particleCount = 80;

function resizeCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {

constructor(){

this.x = Math.random() * canvas.width;
this.y = Math.random() * canvas.height;

this.size = Math.random() * 2 + 1;

this.speedX = Math.random() * 0.5 - 0.25;
this.speedY = Math.random() * 0.5 - 0.25;

}

update(){

this.x += this.speedX;
this.y += this.speedY;

if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

}

draw(){

ctx.beginPath();
ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
ctx.fillStyle = "rgba(250,204,21,0.7)";
ctx.fill();

}

}

function initParticles(){

particles = [];

for(let i=0;i<particleCount;i++){
particles.push(new Particle());
}

}

function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p => {
p.update();
p.draw();
});

requestAnimationFrame(animateParticles);

}

initParticles();
animateParticles();

}

/* =========================
NAVBAR SCROLL EFFECT
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if (window.scrollY > 50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}

});
