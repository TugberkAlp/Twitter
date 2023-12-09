var adjective = ["Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan", "Broad", "Crooked", "Curved", "Deep", "Even", "Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan", "Broad", "Crooked", "Curved", "Deep", "Even", "Flat", "Hilly", "Jagged", "Round", "Shallow", "Square", "Steep", "Straight", "Thick", "Thin", "Cooing", "Deafening", "Faint", "Harsh", "High-pitched", "Hissing", "Hushed", "Husky", "Loud", "Melodic", "Moaning", "Mute", "Noisy", "Purring", "Quiet", "Raspy", "Screeching", "Shrill", "Silent", "Soft", "Squeaky", "Squealing", "Thundering", "Voiceless", "Whispering"]
var object = ["Taco", "Sphere", "Watermelon", "Cheeseburger", "Spider", "Dragon", "Soda", "Watch", "Sunglasses", "Purse", "Towel", "Hat", "Camera", "Photo"]
var list;

function generatorNameAndTag() {
  let firstName = adjective[Math.floor(Math.random() * adjective.length)];
  let secName = object[Math.floor(Math.random() * object.length)];
  let name = firstName + " " + secName;
  let tag = "@" + firstName + "_" + secName;
  return { name, tag };
}

function generateRandomPhotoURL() {
  let randomNumber = Math.floor(Math.random() * 79);
  let photoURL = `https://xsgames.co/randomusers/assets/avatars/female/${randomNumber}.jpg`;
  return photoURL;
}

function whoToFollows() {
  let updateDiv = "";
  updateDiv += `
                  <div class="whoToFollowDiv">
                    <a>Who to Follow</a>
                  </div>
                `;
  for (let i = 0; i < 3; i++) {
    let photoURL = generateRandomPhotoURL();
    let nameAndTag = generatorNameAndTag();
    let updateThisDiv = `
    <div class="whoFollow">
      <div>
        <img class="whoFollowImg" src="${photoURL}">
      </div>
      <div class="whoFollowNameDiv">
        <div class="whoFollowName">${nameAndTag.name}</div>
        <div class="whoFollowTag">${nameAndTag.tag}</div>
      </div>
      <div>
        <button class="whoFollowButton">Follow</button>
      </div>
    </div>
  `;
    updateDiv += updateThisDiv;
  }
  
  thisdiv = updateDiv + document.querySelector(".whoToFollowSection").innerHTML;
  document.querySelector(".whoToFollowSection").innerHTML = thisdiv;
}

whoToFollows();