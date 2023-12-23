let userInformation = {
  username: "Alpturk HARMAN",
  follows: 10,
  followers: 12,
  twits: ["Bu bir twit", "Yeni bir twit"]
};

const setupButton = document.getElementById('js-setup');
const nameSetup = document.getElementById("js-nameInput");
const jsName = document.getElementById("js-name");
const jsNames = document.querySelectorAll(".js-name");

setupButton.addEventListener("click", function () {
  if (setupButton.innerHTML === "Confirm") {
    if (nameSetup.value !== "") {
      setupButton.innerHTML = "Set up profile"
      jsName.style.display = "block";
      nameSetup.style.display = "none";
      userInformation.username = nameSetup.value;
      changeNames();
    } else {
      alert("Please enter a username.");
      return;
    }
  } else {
    setupButton.innerHTML = "Confirm";
    jsName.style.display = "none";
    nameSetup.style.display = "block";
  }
});

function changeNames() {
  jsNames.forEach(function (names) {
    names.innerHTML = userInformation.username;
  })
};

function writeTwits() {
  
}