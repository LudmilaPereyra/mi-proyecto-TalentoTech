
const elementos = document.querySelectorAll('.animar');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

elementos.forEach(el => observer.observe(el));



const header = document.querySelector('.header');

let lastScroll = 0;

window.addEventListener('scroll', () => {
const currentScroll = window.scrollY;

// 👉 apenas empieza el scroll → ocultar
if (currentScroll > 10 && currentScroll < 200) {
header.classList.add('hide');
header.classList.remove('scrolled');
} 
// 👉 scroll más avanzado → mostrar fijo
else if (currentScroll >= 200) {
header.classList.remove('hide');
header.classList.add('scrolled');
} 
// 👉 volver arriba
else {
header.classList.remove('hide', 'scrolled');
}

lastScroll = currentScroll;
});



const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})