


const toggleMenu = document.getElementById("toggleMenu");
const toggleIcon = document.getElementById("toggleIcon");

toggleMenu.addEventListener("change", function () {
  if (toggleMenu.checked) {
    toggleIcon.classList.remove("fa-bars");
    toggleIcon.classList.add("fa-times");
  } else {
    toggleIcon.classList.remove("fa-times");
    toggleIcon.classList.add("fa-bars");
  }
});




// faq

const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));