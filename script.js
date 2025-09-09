document.addEventListener("DOMContentLoaded", () => {
  const themeLink = document.getElementById("theme-style");
  const toggle = document.getElementById("theme-toggle");

  if (themeLink.getAttribute("href") === "./CSS/dark.css") {
    toggle.checked = true; 
  } else {
    toggle.checked = false; 
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      themeLink.setAttribute("href", "./CSS/dark.css"); 
    } else {
      themeLink.setAttribute("href", "./CSS/light.css"); 
    }
  });
});
