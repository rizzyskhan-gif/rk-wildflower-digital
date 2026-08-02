// --- 1. TEMPLATE BUNDLE SLIDESHOW ---
let bundleImages = [
    "images/bulletinboard.png",
    "images/mindmap.png",
    "images/mininotepage.png",
    "images/monthlycalendar.png",
    "images/reminder.png",
    "images/todolist.png"
];

let currentImage = 0;

function nextImage() {
    currentImage++;
    if (currentImage >= bundleImages.length) {
        currentImage = 0;
    }
    document.getElementById("bundle-image").src = bundleImages[currentImage];
}

function previousImage() {
    currentImage--;
    if (currentImage < 0) {
        currentImage = bundleImages.length - 1;
    }
    document.getElementById("bundle-image").src = bundleImages[currentImage];
}

// --- 2. PSYCHOLOGY NOTES SLIDESHOW ---
let psychImages = [
    "images/slide1.png",
    "images/slide2.png",
    "images/slide3.png",
    "images/slide4.png",
    "images/slide5.png"
];

let currentPsychImage = 0;

function updatePsychImage() {
    let imgElement = document.getElementById("psych-image");
    imgElement.src = psychImages[currentPsychImage];

    // First image is clear, rest are blurred
    if (currentPsychImage === 0) {
        imgElement.style.filter = "none";
    } else {
        imgElement.style.filter = "blur(4px)";
    }
}

function nextPsychImage() {
    currentPsychImage++;
    if (currentPsychImage >= psychImages.length) {
        currentPsychImage = 0;
    }
    updatePsychImage();
}

function previousPsychImage() {
    currentPsychImage--;
    if (currentPsychImage < 0) {
        currentPsychImage = psychImages.length - 1;
    }
    updatePsychImage();
}