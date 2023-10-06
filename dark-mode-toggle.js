// JavaScript code for a dark mode toggle feature
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.querySelector("#dark-mode-toggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", function () {
    // Toggle dark mode class on the <body> element
    body.classList.toggle("dark-mode");

    // Save the user's dark mode preference in localStorage
    const isDarkModeEnabled = body.classList.contains("dark-mode");
    localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
  });

  // Check if the user has a dark mode preference and apply it
  const isDarkModePreferred = localStorage.getItem("darkModeEnabled") === "true";
  if (isDarkModePreferred) {
    body.classList.add("dark-mode");
  }
});
