window.addEventListener('load', () => {
    const textContext = document.getElementById('textContext');
    if (textContext) {
      textContext.classList.add('show');
    }
  });
  
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    // Validate or process input values here
  });
  
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  