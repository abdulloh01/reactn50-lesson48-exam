// HTML elementini tanlash
var exButton = document.querySelector('.ex');

// Tugma bosilganda amalni bajarish
exButton.addEventListener('click', function() {
  // "notification__del" nomli classga ega bo'lgan elementni tanlash
  var notificationElement = document.querySelector('.notification__del');
  
  // Agar element mavjud bo'lsa, "delete" classini qo'shish
  if (notificationElement) {
    notificationElement.classList.add('delete');
  }
});


// script.js
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggle.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      body.classList.toggle('light-mode');

      // Save the user's preference in localStorage
      const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', currentTheme);
  });

  // Check for user's saved preference in localStorage
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
      body.classList.add(savedTheme + '-mode');
  } else {
      // Default theme
      body.classList.add('light-mode');
  }
});





const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);




