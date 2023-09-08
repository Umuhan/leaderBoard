// import "lodash";
import "./styles.css";
import submitScore from "./modules/submitScore.js";
import getScores from "./modules/getScore.js";

const refreshBtn = document.querySelector(".btn-fresh");
const listContainer = document.getElementById("scoreList");
const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("submitForm");

// function for displaying the scores
const display = async () => {
  const scores = await getScores();
  const scoreLists = scores.result;
  scoreLists.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("list-item");
    li.innerText = `${item.user}: ${item.score}`;
    listContainer.appendChild(li);
  });
};

// event listener for the refresh button
refreshBtn.addEventListener("click", () => {
  window.location.reload();
});

// Event listener for the submit button
submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const username = nameInput.value;
  const userscore = scoreInput.value;
  if (username !== "" && userscore !== "") {
    await submitScore({ user: username, score: userscore });
    form.reset();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  display();
});
