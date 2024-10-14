var animationTimeline = function () {
  gsap.set(".container", {
    visibility: "visible",
  });

  // Animation timeline
  const tl = gsap.timeline();

  tl.from(".thumbnail", {
    duration: 0.5,
    scale: 0.5,
    opacity: 0,
    ease: "power3.in",
  })
    .from(".name", { duration: 0.25, y: 10, opacity: 0, ease: "power3.in" })
    .from(".location", { duration: 0.25, y: 10, opacity: 0, ease: "power3.in" })
    .from(".description", { duration: 0.25, y: 10, opacity: 0, ease: "power3.in" })
    .from(".socials-links", { duration: 0.15, opacity: 0, ease: "power3.in" })
    .from(".socials-link", { duration: 0.15, y: 10, opacity: 0, ease: "power3.in", stagger: 0.1 });
};

window.onload = function (e) {
  window.ad = new animationTimeline();
};
