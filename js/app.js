const tl = gsap.timeline({ defaults: { ease: 'power1.out'}});

tl.to('.text', {y:'0%', duration: 1, stagger: 0.25});
tl.to('.slider', {y:'-100%', duration: 1.7, delay: 0.5});
tl.to('.intro', {y: '-100%', duration:1}, "-=1");
tl.fromTo('.hero-intro', {opacity: 0}, {opacity:1, duration:1}, '-=1');