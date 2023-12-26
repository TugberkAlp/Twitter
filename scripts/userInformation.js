
export const userInformation = {
  username: "Alpturk HARMAN",
  usernameTag: "@alpturk_harman",
  following: 10,
  followers: 12,
  twits: ["Bu bir twit", "Yeni bir twit"]
};

const setupButton = document.getElementById('js-setup');
const nameSetup = document.getElementById("js-nameInput");
const jsName = document.getElementById("js-name");
const jsNames = document.querySelectorAll(".js-name");
const tweetsList = document.querySelector(".tweets-list");

writeUserInfos(userInformation);
writeTwits(userInformation);

function writeUserInfos() {
  jsName.innerHTML= userInformation.username;
  document.getElementById('js-nameTag').innerHTML = userInformation.usernameTag;
  document.getElementById('following').innerHTML = userInformation.following;
  document.getElementById('follower').innerHTML = userInformation.followers;
}


setupButton.addEventListener("click", function () {
  if (setupButton.innerHTML === "Confirm") {
    if (nameSetup.value !== "") {
      setupButton.innerHTML = "Set up profile"
      jsName.style.display = "block";
      nameSetup.style.display = "none";
      userInformation.username = nameSetup.value;
      changeNames();
      writeTwits(userInformation);
      nameSetup.value = "";
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

export function writeTwits() {
  tweetsList.innerHTML = "";
  userInformation.twits.forEach(function (tweet) {
    tweetsList.innerHTML += `
  <div class="tweets">
                  <div class="tweets-img-div">
                    <img class="tweetsImg" src="https://xsgames.co/randomusers/avatar.php?g=male">
                  </div>
                  <div class="tweets-right">
                    <div class="tweetsNameDiv">
                      <div class="tweetsNameDiv2">
                        <div class="tweetsName js-name">${userInformation.username}</div>
                        <div class="tweetsNameTag js-nameTag">@alpturk_harman</div>
                      </div>
                      <div class="dots-img">
                        <img class="little-3-dot-img" src="images/3-dot.png">
                      </div>
                    </div>
                    <div class="tweets-contents">
                      ${tweet}
                    </div>
                    <div class="tweets-icons">
                      <div class="tweets-reply-div">
                        <img class="tweets-reply" src="images/reply.png">
                        <div class="tweets-reply-number"></div>
                      </div>
                      <div class="tweets-retweet-div">
                        <img class="tweets-retweet" src="images/retweet.png">
                        <div class="tweets-retweet-number"></div>
                      </div>
                      <div class="tweets-like-div">
                        <img class="tweets-like" src="images/like.png">
                        <div class="tweets-like-number"></div>
                      </div>
                      <div class="tweets-view-div">
                        <img class="tweets-view" src="images/views.png">
                        <div class="tweets-view-number"></div>
                      </div>
                      <div class="tweets-little-div">
                        <div class="tweets-bookmark-div">
                          <img class="tweets-bookmark" src="images/bookmark.png">
                        </div>
                        <div class="tweets-share-div">
                          <img class="tweets-share" src="images/share.png">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  `;
  })
};