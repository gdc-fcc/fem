const qs = q => document.querySelector(q);

document.querySelectorAll('[rel="preload"]').forEach(el => {
    el.rel = "stylesheet";
    el.removeAttribute("as");
})

qs('button[type="submit"]').addEventListener("click", e => {
    e.preventDefault();
    const rating = ratings.findIndex(rating => rating.ariaChecked === "true") + 1;
    if (rating === 0) {
        // TODO: accessible error message
        console.error("no rating selected");
        return;
    }
    qs("#rating-out").innerText = rating;
    qs("dialog").showModal();
    setTimeout(_ => document.addEventListener("click", showTarget), 0);
})

const showTarget = e => {
    const contained = qs(".modal-inner").contains(e.target);
    if (!contained) { qs("dialog").close(); }
}

qs("dialog").addEventListener("close", _ => {
    document.removeEventListener("click", showTarget);
})

// https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio/

const ratings = [...document.querySelectorAll('div[role="radio"]')];

const selectRadioButton = i => {
    i = i >= 5 ? i - 5 : i;
    i = i < 0 ? 4 : i;
    const button = ratings[i];
    button.focus();
    ratings.forEach(rating => {
        rating.ariaChecked = "false";
        rating.setAttribute("tabindex", "-1");
    })
    button.ariaChecked = "true";
    button.setAttribute("tabindex", "0");
    qs('button[type="submit"]').removeAttribute("disabled");
}

const hndleKeyDown = (event) => {
    const index = Number(event.currentTarget.innerText) - 1
    switch (event.key) {
        case ' ':
            selectRadioButton(index)
            break;
        case 'Down':
        case 'ArrowDown':
        case 'Right':
        case 'ArrowRight':
            selectRadioButton((index+1));
            break;
        case 'Up':
        case 'ArrowUp':
        case 'Left':
        case 'ArrowLeft':
            selectRadioButton(index - 1);
            break;
        case "Enter":
            qs('button[type="submit"]').click()
            break;
        default:
            break;
    }
}

document.querySelectorAll('[role="radiogroup"] > *').forEach((rb, i) => {
    rb.addEventListener("click", _ => selectRadioButton(i));
    rb.addEventListener("keydown", hndleKeyDown)
})

import {octocat} from "../octocat.js";
octocat({fill:'#fc7614', color: '#101215'});
