const qs = q => document.querySelectorAll(q);

qs('[rel="preload"]').forEach(el => {
  el.rel = "stylesheet";
  el.removeAttribute("as");
})

const toggleTooltip = () => {
  const tt = qs(".tooltip")[0];
  if (tt.style.display !== "flex") {
    tt.style.display = "flex";
  } else {
    tt.style.display = "none";
  }
}

closeOnClickOutside = (e) => {
  const tt = qs(".tooltip")[0];
  const inside = [tt, ...qs(".tt-trigger")].some(el => el.contains(e.target))
  if (!inside) {
    tt.style.display = "none"
  }
}

document.addEventListener("click", closeOnClickOutside)

qs(".tt-trigger").forEach(x => {
  x.addEventListener("click", toggleTooltip);
})

const octocat = {color: 'var(--light-blue)', fill: "hsl(169.18deg 29.76% 40.2%)",
  url: "https://github.com/gdc-fcc/fem/tree/main/article-preview"};