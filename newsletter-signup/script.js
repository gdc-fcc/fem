const qs = q => document.querySelector(q);

qs('button[type="submit"]').addEventListener('click', e => {
  e.preventDefault();
  const input = qs("input");
  const v = input.validity;
  const email = input.value
  if (v.valid && email !== "") {
    qs("#email").innerText = email;
    qs("dialog").showModal();
  } else {
    qs("input").required = true;
    qs(".error").classList.remove("shake");
    setTimeout(_ => qs(".error").classList.add("shake"), 50);
    setTimeout(_ => qs(".error").classList.remove("shake"), 500);
  }
})

qs("#close-modal").addEventListener('click', _ => {
  qs("dialog").close();
})