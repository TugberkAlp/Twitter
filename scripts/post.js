import { userInformation, writeTwits } from "./userInformation.js";

const postButton = document.getElementById("js-post-button");
const postXButton = document.getElementById("js-post-x-button");
const mainArea = document.getElementById('js-main');
const postArea = document.getElementById('js-post-area');
const postInput = document.getElementById('js-post-input');
const postAreaButton = document.getElementById('js-post-area-button');

function checkInput() {
  const textAreaValue = postInput.value.trim();
  postAreaButton.disabled = textAreaValue === '';
}

postInput.addEventListener("input", checkInput);

postButton.addEventListener("click", function (event) {
  event.stopPropagation();
  postArea.style.display = 'block';

  mainArea.style.opacity = 0.5;
  mainArea.style.overflowY = 'hidden';

  document.addEventListener("click", function (event) {
    if (!postArea.contains(event.target)) {
      closePostArea();
    }
  });
});

postXButton.addEventListener("click", function () {
  postArea.style.display = 'none';
  closePostArea();
});

postAreaButton.addEventListener("click", function () {
  const textAreaValue = postInput.value;
  userInformation.twits.unshift(textAreaValue);
  writeTwits();
  closePostArea();
  postInput.value = "";
});

function closePostArea() {
  mainArea.style.opacity = '1';
  mainArea.style.overflowY = 'visible';
  postArea.style.display = 'none';
}