// import "lodash";
import "./styles.css";
import submitScore from "./modules/submitScore.js";
import getScores from "./modules/getScore.js";

const btn = document.querySelector(".btn-fresh");
const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("submitForm");

// event listener for the refresh button
btn.addEventListener("click", () => {
  console.log("clicked");
  console.log(getScores());
});

// Event listener for the submit button
submitBtn.addEventListener("click", (e) => {
  console.log("clicked");
  e.preventDefault();

  const name = nameInput.value;
  const score = scoreInput.value;
  console.log(name, score);
  submitScore(name, score);
  // nameInput.value = "";
  // scoreInput.value = "";
  form.reset();
});
