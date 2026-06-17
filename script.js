function showPage(id) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

function openModal(title, time, desc) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-time").textContent = time;
  document.getElementById("modal-desc").textContent = desc;

  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function submitForm(event) {
  event.preventDefault();

  document.querySelector(".reg-form").style.display = "none";

  document.getElementById("success-msg").style.display = "block";
}
