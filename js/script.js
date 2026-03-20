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
SCROLL REVEAL ANIMATIONS
========================= */

function revealOnScroll() {

const reveals = document.querySelectorAll(".reveal");

reveals.forEach((element) => {

```
const windowHeight = window.innerHeight;
const elementTop = element.getBoundingClientRect().top;
const revealPoint = 100;

if (elementTop < windowHeight - revealPoint) {
  element.classList.add("active");
}
```

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

```
constructor() {

  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;

  this.size = Math.random() * 2 + 1;

  this.speedX = Math.random() * 0.5 - 0.25;
  this.speedY = Math.random() * 0.5 - 0.25;

}

update() {

  this.x += this.speedX;
  this.y += this.speedY;

  if (this.x < 0 || this.x > canvas.width) {
    this.speedX *= -1;
  }

  if (this.y < 0 || this.y > canvas.height) {
    this.speedY *= -1;
  }

}

draw() {

  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI
```
