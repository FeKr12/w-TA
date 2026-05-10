const images = [
    "images/about.png",
    "images/bil2.jpg",
    "images/contact.png",
    "images/contact2.png",
    "images/oneway2.jpg",
    "images/turewebb.jpg",
    "images/work.png"
];

const galleryImages = document.querySelectorAll(".gallery img");
let currentIndex = 0;

function openImage(index) {
    currentIndex = index;

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightboxImg.src = galleryImages[currentIndex].src;
}

function closeImage(event) {
    if (
        !event ||
        event.target.id === "lightbox" ||
        event.target.classList.contains("close")
    ) {
        document.getElementById("lightbox").style.display = "none";
    }
}

function nextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryImages.length;
    document.getElementById("lightbox-img").src = galleryImages[currentIndex].src;
}

function prevImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    document.getElementById("lightbox-img").src = galleryImages[currentIndex].src;
}

document.addEventListener("keydown", function (event) {
    const lightbox = document.getElementById("lightbox");

    if (lightbox.style.display === "flex") {
        if (event.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            document.getElementById("lightbox-img").src = galleryImages[currentIndex].src;
        }

        if (event.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            document.getElementById("lightbox-img").src = galleryImages[currentIndex].src;
        }

        if (event.key === "Escape") {
            lightbox.style.display = "none";
        }
    }
});