const themeBtn = document.getElementById("theme-toggle");
const body = document.getElementsByTagName("body")[0];

themeBtn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    themeBtn.textContent = isDark ? "🌙" : "🌞";
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
