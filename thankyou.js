
const duration = 2 * 1000; 
const end = Date.now() + duration;

(function frame() {
  confetti({
    particleCount: 6,
    angle: 60,
    spread: 60,
    origin: { x: 0 }
  });
  confetti({
    particleCount: 6,
    angle: 120,
    spread: 60,
    origin: { x: 1 }
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();

setTimeout(() => {
  window.location.href = "Timer.html";  
}, 7000);
