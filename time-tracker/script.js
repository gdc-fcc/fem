const qs = q => document.querySelector(q);

document.querySelectorAll('[rel="preload"]').forEach(el => {
  el.rel = "stylesheet";
  el.removeAttribute("as");
})

import iconExercise from "./images/icon-exercise.svg";
import iconPlay from "./images/icon-play.svg";
import iconSocial from "./images/icon-social.svg";
import iconStudy from "./images/icon-study.svg";
import iconWork from "./images/icon-work.svg";
import iconSelfCare from "./images/icon-self-care.svg";

const icons = {
  "exercise": iconExercise,
  "play": iconPlay,
  "social": iconSocial,
  "study": iconStudy,
  "work": iconWork,
  "self-care": iconSelfCare
};

const colors = {
  "work": "hsl(15, 100%, 70%)",
  "play": "hsl(195, 74%, 62%)",
  "study": "hsl(348, 100%, 68%)",
  "exercise": "hsl(145, 58%, 55%)",
  "social": "hsl(264, 64%, 52%)",
  "self-care": "hsl(43, 84%, 65%)"
}

const template = ({ name, current, previous, unit, img, color }) => `
<section class="card activity-card" style="background: ${color}">
  <img class="activity-img" src="${icons[img]}" alt="">
  <div class="card-top">
    <div class="activity-title">
      <h2>${name}</h2>
      <div class="activity-menu"></div>
    </div>
    <div class="activity-values">
      <div class="value-current">${current}hrs</div>
      <div class="value-previous">${unit} - ${previous}hrs</div>
    </div>
  </div>
</section>`;

const toKebapCase = str => str.toLowerCase().replace(" ", "-");
const lastText = {
  "daily": "Yesterday", "weekly": "Last Week",
  "monthly": "Last Month"
};

const insertCard = (activity, timeframe) => {
  const key = toKebapCase(activity);
  const el = data.find(x => x.title === activity);
  const tf = el.timeframes[timeframe];
  const res = template({
    name: activity,
    current: tf.current,
    previous: tf.previous,
    unit: lastText[timeframe],
    img: key,
    color: colors[key]
  });
  const div = document.createElement("div");
  div.setAttribute("class", "activity-wrap");
  div.innerHTML = res;
  qs(".cards-grid").appendChild(div);
}

const clearCards = () => document.querySelectorAll(".activity-wrap")
  .forEach(el => el.remove());

const insertAll = (timeframe) => {
  clearCards();
  data.forEach(x => insertCard(x.title, timeframe));
  document.querySelectorAll(".select-period > *")
    .forEach(el => el.removeAttribute("selected"));
  qs(`#${timeframe}`).setAttribute("selected", "selected");
}

qs("#daily").addEventListener("click", () => insertAll("daily"));
qs("#weekly").addEventListener("click", () => insertAll("weekly"));
qs("#monthly").addEventListener("click", () => insertAll("monthly"));

import { octocat } from "../octocat.js";
octocat({ fill: colors.exercise });

import data from "./data.json";
insertAll('weekly');