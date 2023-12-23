const postButton = document.getElementById("js-post-button");
const postXButton = document.getElementById("js-post-x-button");
const mainArea = document.getElementById('js-main');
const postArea = document.getElementById('js-post-area');

function checkInput() {
  const textAreaValue = document.getElementById('js-post-input').value;
  const postAreaButton = document.getElementById('js-post-area-button');

  if (textAreaValue.trim() === '') {
    postAreaButton.disabled = true;
  } else {
    postAreaButton.disabled = false;
  }
}

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

function closePostArea() {
  mainArea.style.opacity = '1';
  mainArea.style.overflowY = 'visible';
  postArea.style.display = 'none';
}