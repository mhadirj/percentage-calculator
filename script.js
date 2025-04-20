"use strict";

const form = document.querySelector("form");
const percentageField = document.getElementById("percentage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const correctInput = document.getElementById("correct-answers");
  const wrongInput = document.getElementById("wrong-answers");
  const allInput = document.getElementById("all-questions");

  const correctAnswers = Number(correctInput.value);
  const wrongAnswers = Number(wrongInput.value);
  const allQuestions = Number(allInput.value);
  const percentage =
    ((correctAnswers * 3 - wrongAnswers) / (allQuestions * 3)) * 100;
  correctInput.blur();
  wrongInput.blur();
  allInput.blur();
  percentageField.innerText = percentage.toFixed(1) + "%";
});
