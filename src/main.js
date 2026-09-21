window.onload = (e) => {
  const buttonSpans = document.querySelectorAll("span").values().filter((span) => span.role == "button");
  const translateSpans = buttonSpans.filter((span) => span.ariaLabel == null);

  let alreadyClicked = [];
  translateSpans.forEach((s) => {
    if (alreadyClicked.find((e) => e == s.attributes.jsaction.nodeValue) != undefined) return;

    s.click();
    alreadyClicked.push(s.attributes.jsaction.nodeValue);
  })
}
