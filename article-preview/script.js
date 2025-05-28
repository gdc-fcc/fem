const qs = q => document.querySelector(q)

shareIcon = qs(".share-icon");
shareIcon2 = qs("[alt='share']");

console.log({shareIcon, shareIcon2})

shareIcon.addEventListener("click", () =>  {
  qs(".tooltip").style.display = "none"
})

shareIcon2.addEventListener("click", () =>  {
  qs(".tooltip").style.display = "flex"
})
