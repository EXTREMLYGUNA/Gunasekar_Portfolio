
const typingText = document.getElementById("typing-text");
const words = ["Hii"," I am GUNASEKAR"," I recently started in MERN-Full stack web developer",
    "Previouly I am working style for manufacturing company at CEAT Tyres Ltd",
    "EDUCATION (Electrical and Electronics Engineering)",
    "Diploma (EEE), Rajagopal Polytechnic college,Gudiyatham,June 2017 – May 2019",
    "B.Tech (EEE), SRM Institute of Science and Technology,Chennai,July 2022 – December 2025",
    "Thanks for watching ...",
    "Have a Wonderful Day !",
    ""
];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function typeEffect() { 
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
      typingText.textContent = currentWord;
      setTimeout(typeEffect, 150);
    } else if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
      typingText.textContent = currentWord;
      setTimeout(typeEffect, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) i = (i + 1) % words.length;
      setTimeout(typeEffect, 1000);
    }
  }
}
typeEffect();

// Project filter
function filterProjects(type) {
  const items = document.querySelectorAll("#project-list li");
  items.forEach(item => {
    item.style.display = (type === 'all' || item.dataset.type === type) ? 'block' : 'none';
  });
}
filterProjects()
// Toggle Dark Mode
document.getElementById("toggle-mode").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// Form validation (basic)
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted successfully!")
});


