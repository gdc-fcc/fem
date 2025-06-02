const qs = q => document.querySelector(q);

document.querySelectorAll('[rel="preload"]').forEach(el => {
    el.rel = "stylesheet";
    el.removeAttribute("as");
})

const tipCustom = qs(".tip-custom");
const tipButtons = document.querySelectorAll(".tip-percent-options > div");
const errorTip = document.querySelector(".input-with-label:has(#tip-custom) .error");
const errorBill = document.querySelector(".input-with-label:has(#bill) .error");
const errorNpeople = document.querySelector(".input-with-label:has(#npeople) .error");

tipButtons.forEach(el => {
    el.dataset.value = el.innerText.replace("%", "")
    el.addEventListener("click", e => {
        const value = e.target.dataset.value;
        setState("percentage", value);
        setBtnActive(value);
        tipCustom.value = "";
    })
})

tipCustom.addEventListener("input", e => {
    setBtnActive("");
    setState("percentage", e.target.value);
})

qs(".bill").addEventListener("input", e => {
    setState("bill", e.target.value);
})

qs(".npeople").addEventListener("input", e => {
    setState("people", e.target.value || 1);
})

const state = { percentage: 0, bill: 0, people: 1};

const numberValid = (input, error, checkZero = false) => {
    const validity = qs(input).validity;
    if (validity.badInput) {
        error.innerText = "Bad Input"
        return false;
    } else if (validity.rangeUnderflow) {
        if (checkZero && Number(input.value) === 0) {
            error.innerText = "Can't be zero"
        } else {
            error.innerText = "Can't be negative";
        }
        return false;
    } else if (validity.stepMismatch) {
        error.innerText = "Too many decimals"
    }
    return true;
}

const isValid = _ => {
    if (!numberValid(".bill", errorBill)) { return false; }
    if (!numberValid(".tip-custom", errorTip)) { return false; }
    if (!numberValid(".npeople", errorNpeople, true)) { return false; }
    return true;
}

const renderState = _ => {
    const {percentage, bill, people} = state;
    const total = bill * (1 + percentage/100);
    const tip = bill * percentage/100;
    qs("#tip").innerText = "$" + (tip/people).toFixed(2);
    qs("#total").innerText = "$" + (total/people).toFixed(2);
    qs(".reset-button").removeAttribute("disabled");
}

const showZeroOutput = _ => {
    qs("#tip").innerText = "$0.00";
    qs("#total").innerText = "$0.00";
}

const setState = (key, value) => {
    state[key] = Number(value);
    isValid() ? renderState() : showZeroOutput();
}

const setBtnActive = (val) => {
    tipButtons.forEach(el => {
        el.dataset.active = el.dataset.value == val;
    })
}

qs("button").addEventListener("click", _ => {
    state.percentage = 0;
    state.bill = 0;
    state.people = 1;
    setBtnActive("");
    tipCustom.value = "";
    qs(".bill").value = "";
    qs(".npeople").value = "";
    qs("#tip").innerText = "$0.00";
    qs("#total").innerText = "$0.00";
    qs(".reset-button").setAttribute("disabled", "true");
})

import {octocat} from "../octocat.js";
octocat({});