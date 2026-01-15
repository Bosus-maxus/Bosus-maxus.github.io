const form = document.getElementById("waitlistForm");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const e1 = document.getElementById("email1").value.trim();
  const e2 = document.getElementById("email2").value.trim();
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!pattern.test(e1)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (e1 !== e2) {
    alert("Emails do not match. Please re-enter.");
    return;
  }

  statusMessage.textContent = "Submitting...";
  statusMessage.style.color = "#888";

  try {
    const response = await fetch("https://formspree.io/f/xbddldya", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: e1 })
    });

    if (response.ok) {
      window.location.href = "https://bosus-maxus.github.io/reserve.html";
    } else {
      statusMessage.textContent = "Submission failed. Please try again.";
      statusMessage.style.color = "red";
    }
  } catch (err) {
    statusMessage.textContent = "Network error. Please try again.";
    statusMessage.style.color = "red";
  }
});
