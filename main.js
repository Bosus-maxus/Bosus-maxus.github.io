function handleSignup() {
  const e1 = document.getElementById("email1").value.trim();
  const e2 = document.getElementById("email2").value.trim();
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!pattern.test(e1)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (e1 !== e2) {
    alert("Emails do not match. Please re-enter.");
    return false;
  }

  let waitlist = JSON.parse(localStorage.getItem("waitlistEmails")) || [];

  if (!waitlist.includes(e1)) {
    waitlist.push(e1);
    localStorage.setItem("waitlistEmails", JSON.stringify(waitlist));
  }

  window.location.href = "reserve.html";
  return false;
}
