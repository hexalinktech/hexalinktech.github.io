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
