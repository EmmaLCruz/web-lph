// Función de callback que se ejecuta cuando cambian las intersecciones
// function callback(entries, observer) {
//   entries.forEach((entry) => {
//     const element = entry.target.querySelector("a");

//     if (!entry.isIntersecting) {
//       // Aquí puedes ejecutar acciones, como añadir clases o cargar contenido.
//       element.classList.remove("hide");
//       element.classList.add("unset");
//     } else {
//       element.classList.add("hide");
//       setTimeout(() => {
//         element.classList.remove("unset");
//       }, 400);
//     }
//   });
// }

// // Opciones del observador
// let options = {
//   root: null, // El viewport (null) o un contenedor específico
//   rootMargin: "0px", // Márgenes alrededor del root (viewport o contenedor)
//   threshold: 0.8, // El % del elemento visible para que se active el callback
// };

// const observer = new IntersectionObserver(callback, options);
// // Elemento a observar
// const animationItems = document.querySelector(".intro");

// // Iniciar la observación
// const oper = () => observer.observe(animationItems);

// oper();

// const ourProductsTexts = document.querySelector(".our-products-texts");
