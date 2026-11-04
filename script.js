const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const closeModal = document.getElementById("closeModal");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
    });
});

document.querySelectorAll(".details-button").forEach(function (button) {
    button.addEventListener("click", function () {
        modalTitle.textContent = button.dataset.project;
        modal.classList.add("show");
        modal.setAttribute("aria-hidden", "false");
    });
});

function hideModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
}

closeModal.addEventListener("click", hideModal);

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        hideModal();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        hideModal();
    }
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("formMessage").textContent = "Thanks! Your message is ready.";
    this.reset();
});
