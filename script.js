// Highlight active navigation link when scrolling
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Handle comment form submission
document.getElementById("commentForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = event.target.name.value;
  
  document.getElementById("commentMessage").textContent = 
    `Thank you ${name}, your comment has been received!`;
  
  event.target.reset();
});
