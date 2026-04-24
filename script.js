


<!-- ================= script.js ================= -->
<script>
// Typing Effect
const text = ["AI Enthusiast", "IoT Developer", "Tech Innovator"];
let i = 0, j = 0;
const typing = document.querySelector('.typing');

function type() {
  if (j < text[i].length) {
    typing.innerHTML += text[i].charAt(j);
    j++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (j > 0) {
    typing.innerHTML = text[i].substring(0, j - 1);
    j--;
    setTimeout(erase, 50);
  } else {
    i = (i + 1) % text.length;
    setTimeout(type, 200);
  }
}

type();

// Scroll Animation
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
});

// Menu Toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Form Validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent successfully!');
});
</script>
