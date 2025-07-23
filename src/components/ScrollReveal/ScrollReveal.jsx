import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealInit = () => {
  useEffect(() => {
    ScrollReveal().clean(".reveal");

    setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const origin = el.getAttribute("data-sr-origin") || "bottom";
        ScrollReveal().reveal(el, {
          distance: "50px",
          origin,
          duration: 1000,
          delay: 200,
          reset: false,
          easing: "ease-in-out",
          opacity: 0,
        });
      });
    }, 100);
  }, []);

  return null;
};

export default ScrollRevealInit;
