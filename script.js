// ===============================
// Brand Name Website Script
// ===============================

// Sticky Navbar
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (header) {
        header.classList.toggle("sticky", window.scrollY > 50);
    }
});

// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// ===============================
// Auto Slider
// ===============================

const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    if (slides.length > 0) {
        slides[index].style.display = "block";
    }

}

if (slides.length > 0) {

    showSlide(current);

    setInterval(() => {

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        showSlide(current);

    }, 4000);

}

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===============================
// Gallery Lightbox
// ===============================

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const lightbox = document.createElement("div");

        lightbox.style.position = "fixed";
        lightbox.style.top = "0";
        lightbox.style.left = "0";
        lightbox.style.width = "100%";
        lightbox.style.height = "100%";
        lightbox.style.background = "rgba(0,0,0,.9)";
        lightbox.style.display = "flex";
        lightbox.style.alignItems = "center";
        lightbox.style.justifyContent = "center";
        lightbox.style.cursor = "pointer";
        lightbox.style.zIndex = "9999";

        const image = document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "10px";

        lightbox.appendChild(image);

        document.body.appendChild(lightbox);

        lightbox.onclick = () => {

            document.body.removeChild(lightbox);

        };

    });

});

// ===============================
// Scroll Reveal Animation
// ===============================

const reveal = document.querySelectorAll(".card, .feature, .blog-card");

function revealItems() {

    const windowHeight = window.innerHeight;

    reveal.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

reveal.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = ".6s";

});

window.addEventListener("scroll", revealItems);

revealItems();

// ===============================
// Contact Form
// ===============================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {

    contactForm.addEventListener('submit', async function(e) {

        e.preventDefault();

        const data = {
            formType: "Contact Form",
            name: this.name.value,
            email: this.email.value,
            phone: this.phone.value,
            subject: this.subject.value,
            message: this.message.value
        };

        await fetch('https://script.google.com/macros/s/AKfycbyifo76t-ZJzC0f91i6yMLLMpBy6UaIGTnAVURKtpu2W5E_Yg4_1ku26mfIgBgn_o7-ig/exec', {
            method: 'POST',
            body: JSON.stringify(data)
        });

        alert('Message Sent Successfully');
        this.reset();

    });

}
// ===============================
// Dealership Form
// ===============================

const dealerForm = document.querySelector(".dealer-form");

if (dealerForm) {

    dealerForm.addEventListener("submit", function (e) {


        alert("🎉 Thank you for applying! Our team will contact you soon.");

    });

}

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const update = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(update, 20);

        } else {

            counter.innerText = target;

        }

    };

    update();

});

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#ff6b00";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
