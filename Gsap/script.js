// Hero content animation
gsap.from(".hero-title", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".hero-subtitle", {
  y: -30,
  opacity: 0,
  delay: 0.4,
  duration: 1
});

gsap.from(".hero-btn", {
  duration: 1.2,
  scale: 0,
  opacity: 0,
  ease: "elastic.out(1, 0.5)",
  delay: 0.6
});

// Scroll animations for sections
gsap.utils.toArray(".section").forEach((section, i) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    y: 60,
    opacity: 0,
    duration: 1.2,
    ease: "expo.out",
    delay: i * 0.1,
  });
});
