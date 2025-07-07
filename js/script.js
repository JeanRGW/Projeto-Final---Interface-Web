const themeBtn = document.getElementById("theme-toggle");
const body = document.getElementsByTagName("body")[0];

themeBtn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    themeBtn.textContent = isDark ? "dark_mode" : "light_mode";
});

const productListObservfer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    },
    {
        rootMargin: "-10% 0px -10% 0px",
        threshold: 0.1,
    }
);

document.querySelectorAll(".product-list > *").forEach((el) => {
    productListObservfer.observe(el);
});

const form = document.getElementById("contact-form");
const successMessage = document.querySelector(".form-success-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        return /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(phone);
    }

    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("telefone");

    if (!isValidEmail(emailInput.value.trim())) {
        emailInput.focus();
        emailInput.setCustomValidity("Digite um e-mail válido.");
        emailInput.reportValidity();
        return;
    } else {
        emailInput.setCustomValidity("");
    }

    if (!isValidPhone(phoneInput.value.trim())) {
        phoneInput.focus();
        phoneInput.setCustomValidity("Digite um telefone válido.");
        phoneInput.reportValidity();
        return;
    } else {
        phoneInput.setCustomValidity("");
    }

    if (form.checkValidity()) {
        form.style.display = "none";
        successMessage.style.display = "block";
    } else {
        form.reportValidity();
    }
});
