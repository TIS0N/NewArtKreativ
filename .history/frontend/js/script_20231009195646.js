/*
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active-link");
        if (link.getAttribute("href").substring(1) === current) {
            link.classList.add("active-link");
        }
    });
});

$(document).ready(function(){
    $(".circle-left").click(function(){
        $(this).css('transform', 'scale(0.9)');

        setTimeout(() => {
            $(this).css('transform', 'scale(1)');
        }, 100);
    });
    $(".circle-right").click(function(){
        $(this).css('transform', 'scale(0.9)');

        setTimeout(() => {
            $(this).css('transform', 'scale(1)');
        }, 100);
    });

    let scrollContainer = document.querySelector(".gallery");

    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });


    nextBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 330;
    });

    backBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 330;
    });
});
*/

// Add this JavaScript to your script.js file
const lightbox = document.getElementById('custom-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.getElementById('close-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentImageIndex = 0;
const galleryImages = document.querySelectorAll('.gallery a');
const numImages = galleryImages.length;

// Function to open the lightbox with a specific image
function openLightbox(index) {
    if (index >= 0 && index < numImages) {
        lightboxImage.src = galleryImages[index].href;
        currentImageIndex = index;
        lightbox.style.display = 'block';
    }
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Function to change the image in the lightbox
function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = numImages - 1;
    }
    if (currentImageIndex >= numImages) {
        currentImageIndex = 0;
    }
    openLightbox(currentImageIndex);
}

// Event listeners
galleryImages.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(index);
    });
});

closeButton.addEventListener('click', closeLightbox);
prevButton.addEventListener('click', () => changeImage(-1));
nextButton.addEventListener('click', () => changeImage(1));

$(document).ready(function(){
    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
      });
});
