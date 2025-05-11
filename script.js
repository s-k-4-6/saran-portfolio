document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your message, SARAN KARTHIK !");
});

const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const icon = toggleButton.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});
