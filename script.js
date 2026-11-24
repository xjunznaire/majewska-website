const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// IMPORTANT: replace this placeholder with your real business email before publishing.
const BUSINESS_EMAIL = "nabilaazhari@whtstore.my.id";
const emailLink = document.getElementById("emailLink");
if (BUSINESS_EMAIL !== "nabilaazhari@whtstore.my.id") {
  emailLink.textContent = BUSINESS_EMAIL;
  emailLink.href = `mailto:${BUSINESS_EMAIL}`;
} else {
  emailLink.textContent = "Ajoutez votre e-mail";
  emailLink.href = "#contact";
}

let currentLanguage = "fr";
const languageToggle = document.getElementById("languageToggle");
languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "fr" ? "en" : "fr";
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-fr][data-en]").forEach((element) => {
    element.textContent = element.dataset[currentLanguage];
  });
  languageToggle.textContent = currentLanguage === "fr" ? "EN" : "FR";
});
