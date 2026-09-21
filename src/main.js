const clicked = new Set();

function clickTranslateButtons() {
  document.querySelectorAll('span[role="button"]').forEach((s) => {
    if (s.hasAttribute("aria-label")) return;

    const action = s.getAttribute("jsaction");
    if (!action || clicked.has(action)) return;

    clicked.add(action);
    s.click();
  });
}


let timer;
const observer = new MutationObserver(() => {
  clearTimeout(timer);
  timer = setTimeout(clickTranslateButtons, 200);
});
observer.observe(document.documentElement, { childList: true, subtree: true });

clickTranslateButtons();
