const qs = q => document.querySelector(q)

document.querySelectorAll('[rel="preload"]').forEach(el => {
    el.rel = "stylesheet";
    el.removeAttribute("as");
})

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
    setState("people", e.target.value || 1);
})

const state = { percentage: 0, bill: 0, people: 1};

const isValid = () => 
    qs(".bill").checkValidity() && 
    qs(".npeople").checkValidity() && 
    qs(".option-custom").checkValidity();

const renderState = () => {
    const {percentage, bill, people} = state;
    const total = bill * (1 + percentage/100);
    const tip = bill * percentage/100
    qs("#tip").innerText = "$" + (tip/people).toFixed(2);
    qs("#total").innerText = "$" + (total/people).toFixed(2);
}

const showZeroOutput = () => {
    qs("#tip").innerText = "$0.00";
    qs("#total").innerText = "$0.00";
}

const setState = (key, value) => {
    state[key] = Number(value);
    isValid() ? renderState() : showZeroOutput();
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
    state.people = 1;
    setBtnActive("")
    custom.value = ""
    qs(".bill").value = ""
    qs(".npeople").value = ""
    qs("#tip").innerText = "$0.00";
    qs("#total").innerText = "$0.00";
})

const octocat = {fill: "#00494d",  color: "#c5e4e7",
    url: "https://github.com/gdc-fcc/fem/tree/main/tip-calculator"};