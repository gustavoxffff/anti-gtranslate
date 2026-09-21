const clicked = new Set();

const languagesToTranslate = ["English"];

function clickTranslateButtons() {
  document.querySelectorAll('span[role="button"]').forEach((s) => {
    if (s.hasAttribute("aria-label")) return;

    const action = s.getAttribute("jsaction");

    if (!action || clicked.has(action)) return;

    const hasLanguage = languagesToTranslate.some(lang => s.innerHTML.includes(lang));
    if (!hasLanguage) return;

    clicked.add(action);

    s.click();
    setTimeout(() => {
      scroll({ top: 0, behavior: "instant" });
    }, 50);
  });
}


let timer;
const observer = new MutationObserver(() => {
  clearTimeout(timer);
  timer = setTimeout(clickTranslateButtons, 200);
});
observer.observe(document.documentElement, { childList: true, subtree: true });

clickTranslateButtons();
