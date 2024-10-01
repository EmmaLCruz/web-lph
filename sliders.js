document.addEventListener("DOMContentLoaded", () => {
  const fatherElements = document.querySelectorAll(".animation-item");
  // console.log(fatherElements);

  const options = {
    threshold: 0.4, // Cuando el 40% del elemento esté visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const dataAnimation = entry.target.querySelector("div");
      // console.log(dataAnimation);

      const dataName = dataAnimation.getAttribute("data-animation");
      // console.log(dataName);

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
          // dataAnimation.classList.toggle(`${dataName}`, entry.isIntersecting);
          break;
        case "slide":
          addAnimation("slide");
          // dataAnimation.classList.toggle(`${dataName}`, entry.isIntersecting);
          break;
        case "unite":
          dataAnimation.classList.toggle(`${dataName}`, entry.isIntersecting);
          break;
        case "up":
          dataAnimation.classList.toggle(`${dataName}`, entry.isIntersecting);
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
