const form = document.getElementById("registrationForm");
const captchaBox = document.getElementById("captchaBox");
const captchaInput = document.getElementById("captchaInput");
const msg = document.getElementById("msg");

// Simple math CAPTCHA
let a = Math.floor(Math.random() * 10 + 1);
let b = Math.floor(Math.random() * 10 + 1);
captchaBox.textContent = `${a} + ${b} = ?`;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const answer = parseInt(captchaInput.value);
  if (answer !== a + b) {
    alert("Incorrect CAPTCHA");
    return;
  }

  const user = {
    name: form.name.value,
    email: form.email.value,
    course: form.course.value,
    roll: form.roll.value,
    personal: form.personal.value,
    parent: form.parent.value,
    hostel: form.hostel.value,
    permanent: form.permanent.value,
    temporary: form.temporary.value,
    dob: form.dob.value,
    password: form.password.value,
  };

  localStorage.setItem("student_" + user.email, JSON.stringify(user));
  msg.textContent = "Registration successful!";
  form.reset();
});
