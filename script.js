// Show Page Navigation
function showPage(id) {

  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Show selected page
  const selectedPage = document.getElementById(id);

  if (selectedPage) {
    selectedPage.classList.add('active');

    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}


// Open Modal
function openModal(title, time, desc) {

  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-time').textContent = `🕒 ${time}`;
  document.getElementById('modal-desc').textContent = desc;

  document.getElementById('modal').style.display = 'flex';
}


// Close Modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}


// Close Modal When Clicking Outside
window.addEventListener('click', function(e) {

  const modal = document.getElementById('modal');

  if (e.target === modal) {
    closeModal();
  }

});


// Registration Form
function submitForm(e) {

  e.preventDefault();

  const name =
    document.getElementById('fullname').value.trim();

  const email =
    document.getElementById('email').value.trim();

  if (name === '' || email === '') {

    alert('Please fill all required fields.');

    return;
  }

  document.querySelector('.reg-form').style.display = 'none';

  document.getElementById('success-msg').style.display = 'block';

}


// Countdown Timer
const conferenceDate =
new Date("December 20, 2026 09:00:00").getTime();

const timer = setInterval(() => {

  const now = new Date().getTime();

  const distance = conferenceDate - now;

  const days =
    Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours =
    Math.floor((distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60));

  const minutes =
    Math.floor((distance % (1000 * 60 * 60))
    / (1000 * 60));

  const seconds =
    Math.floor((distance % (1000 * 60))
    / 1000);

  if (document.getElementById("days")) {

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  if (distance < 0) {

    clearInterval(timer);

    document.querySelector(".countdown").innerHTML =
      "<h2>🎉 Conference Has Started!</h2>";
  }

}, 1000);
