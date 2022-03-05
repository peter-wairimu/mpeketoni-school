// change navbar styles on scroll

window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle
    ("window-scroll", window.scrollY > 0)
})

// show faq hidden paragraph answer
const faqs = document.querySelectorAll(".faq")

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open")

        const icon = faq.querySelector(".faq_icon i");
        if (icon.className === 'bi bi-plus') {
            icon.className = "bi bi-dash"
        } else {
            icon.className = 'bi bi-plus'
        }
    })
})


// show/hide navbar on tablet
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
    
})


// close navbar on tablet

const closeNav = () => {
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
}

closeBtn.addEventListener("click", closeNav)

