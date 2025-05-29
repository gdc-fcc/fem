const qs = q => document.querySelector(q);

qs('button[type="submit"]').addEventListener('click', e => {
    e.preventDefault();
    qs("dialog").showModal();
})

qs("dialog button").addEventListener('click', _ => {
    qs("dialog").close()
})