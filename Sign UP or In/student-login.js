const form = document.getElementById("loginForm");
const msg = document.getElementById("loginMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.email.value.trim();
  const password = form.password.value;

  const data = localStorage.getItem("student_" + email);

  if (!data) {
    msg.textContent = "User not found!";
    msg.style.color = "red";
    return;
  }

  const user = JSON.parse(data);

  if (user.password === password) {
    msg.textContent = "Login successful!";
    msg.style.color = "green";

    // Optionally redirect to dashboard
    setTimeout(() => {
      window.location.href = "../Student/dashboard.html"; // create this if needed
    }, 1000);
  } else {
    msg.textContent = "Incorrect password!";
    msg.style.color = "red";
  }
});
