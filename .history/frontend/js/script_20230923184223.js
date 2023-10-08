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
/*
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
*/
    nextBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 330;
    });

    backBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 330;
    });
});
