const qs = q => document.querySelector(q)

const custom = document.querySelector(".option-custom")
const tipButtons = document.querySelectorAll(".tip-percent-options > div");

tipButtons.forEach(el => {
    el.addEventListener("click", e => {
        const value = e.target.dataset.value;
        setPercentage(value)
        setBtnActive(value)
        custom.value = ""
    })
})

custom.addEventListener("input", e => {
    setBtnActive("")
    setPercentage(e.target.value)
})

qs(".bill").addEventListener("input", e => {
    setState("bill", e.target.value)
})

qs(".npeople").addEventListener("input", e => {
    setState("people", e.target.value);
})

const state = {
    percentage: 15,
    bill: 142.00,
    people: 5
}

const isValid = () => state.percentage > 0 && state.bill > 0 && state.people > 0;

const renderState = () => {
    const {percentage, bill, people} = state;
    const total = bill * (1 + percentage/100);
    const tip = bill * percentage/100
    qs("#tip").innerText = "$" + (tip/people).toFixed(2);
    qs("#total").innerText = "$" + (total/people).toFixed(2);
}

const setState = (key, value) => {
    state[key] = Number(value);
    if (isValid()) {
        renderState()
    }
}

const setPercentage = (x) => {
    setState("percentage", x);
}

const setBtnActive = (val) => {
    tipButtons.forEach(el => {
        el.dataset.active = el.dataset.value == val
    })
}

qs("button").addEventListener("click", e => {
    state.percentage = 0;
    state.bill = 0;
    state.people = 0;
    setBtnActive("")
    custom.value = ""
    qs(".bill").value = ""
    qs(".npeople").value = ""
    qs("#tip").innerText = "$0";
    qs("#total").innerText = "$0";
})