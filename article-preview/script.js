const qs = q => document.querySelectorAll(q);

const toggleTooltip = () => {
  const tt = qs(".tooltip")[0];
  if (tt.style.display !== "flex") {
    tt.style.display = "flex";
  } else {
    tt.style.display = "none";
  }
}

qs(".tt-trigger").forEach(x => {
  x.addEventListener("click", toggleTooltip);
})