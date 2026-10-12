
/* MOBILE MENU */
let menuBtn = document.getElementById("menuBtn");
let navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("show");
});

/* CLOSE MOBILE MENU AFTER CLICKING A LINK */
let navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("show");
    });
});

/* OPEN VIDEO POPUP */
let openVideo = document.getElementById("openVideo");
let closeVideo = document.getElementById("closeVideo");
let videoModal = document.getElementById("videoModal");
let modalVideo = document.getElementById("modalVideo");

openVideo.addEventListener("click", function () {
    videoModal.style.display = "flex";

    modalVideo.src =
        "https://www.youtube-nocookie.com/embed/Scxs7L0vhZ4?autoplay=1";
});

/* CLOSE VIDEO POPUP */
closeVideo.addEventListener("click", function () {
    videoModal.style.display = "none";

    // Stop the video when the popup closes
    modalVideo.src = "";
});

/* CLOSE VIDEO WHEN CLICKING OUTSIDE IT */
videoModal.addEventListener("click", function (event) {
    if (event.target === videoModal) {
        videoModal.style.display = "none";
        modalVideo.src = "";
    }
});

/* TAKE ACTION FORM */
let actionForm = document.getElementById("actionForm");
let message = document.getElementById("message");

actionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let action = document.getElementById("action").value;

    if (name === "" || action === "") {
        message.textContent = "Please fill in all the required fields.";
    } else {
        message.textContent =
            "Thank you, " + name +
            "! You joined our mission to " + action.toLowerCase() + ".";

        actionForm.reset();
    }
});
