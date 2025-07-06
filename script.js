const themeBtn = document.getElementById("theme-toggle");
const body = document.getElementsByTagName("body")[0];

console.log("ok");

themeBtn.addEventListener("click", () => {
    console.log("clicked");

    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    if (themeBtn?.textContent === "🌞") themeBtn.textContent = "🌙";
    else themeBtn.textContent = "🌞";
});
