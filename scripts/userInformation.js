const userInformation = [
  username = "Alpturk HARMAN",
  usernameTag = "@alpturk_harman",
  follows = 10,
  followers = 12,
  twits = ["Bu bir twit", "Yeni bir twit"]
];

let names = document.querySelectorAll("js-name");
let nameTags = document.querySelectorAll("js-nameTag");

console.log(userInformation);

function changeNames() {
  names.forEach(function(names){
    names.innerHTML = userInformation.username;
  })
}

function changeNameTags() {
  names.forEach(function(names){
    names.innerHTML = userInformation.username;
  })
}