const qs = q => document.querySelector(q);

const toggleTooltip = () => {
  const tt = qs(".tooltip");
  if (tt.style.display !== "flex") {
    tt.style.display = "flex";
  } else {
    tt.style.display = "none";
  }
}

qs(".share-icon").addEventListener("click", toggleTooltip);
qs("[alt='share']").addEventListener("click", toggleTooltip);
