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




