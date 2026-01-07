
const launchDate = new Date(2026, 0, 28, 12, 0).getTime(); 
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const diff = launchDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "Launching Now!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}, 1000);


