document.addEventListener("DOMContentLoaded", () => {
  const fatherElements = document.querySelectorAll(".animation-item");

  const options = {
    threshold: 0.4, // Cuando el 40% del elemento esté visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const dataAnimation = entry.target.querySelector("div");
      const dataName = dataAnimation.getAttribute("data-animation");

      const addAnimation = (animationName) => {
        if (entry.isIntersecting) {
          dataAnimation.classList.add(`${animationName}`);
        }
      };

      switch (dataName) {
        case "fade":
          dataAnimation.classList.toggle(`${dataName}`, !entry.isIntersecting);
          break;
        case "show":
          addAnimation("show");
          break;
        case "slide":
          addAnimation("slide");
          break;
        case "unite":
          addAnimation("unite");
          break;
        case "up":
          addAnimation("up");
          break;
        default:
          break;
      }
    });
  }, options);

  fatherElements.forEach((box) => {
    observer.observe(box);
  });
});
