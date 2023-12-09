var adjective = ["Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan", "Broad", "Crooked", "Curved", "Deep", "Even", "Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan", "Broad", "Crooked", "Curved", "Deep", "Even", "Flat", "Hilly", "Jagged", "Round", "Shallow", "Square", "Steep", "Straight", "Thick", "Thin", "Cooing", "Deafening", "Faint", "Harsh", "High-pitched", "Hissing", "Hushed", "Husky", "Loud", "Melodic", "Moaning", "Mute", "Noisy", "Purring", "Quiet", "Raspy", "Screeching", "Shrill", "Silent", "Soft", "Squeaky", "Squealing", "Thundering", "Voiceless", "Whispering"]
var object = ["Taco", "Sphere", "Watermelon", "Cheeseburger","Spider", "Dragon", "Soda", "Watch", "Sunglasses", "Purse", "Towel", "Hat", "Camera", "Photo"]
var list;

function generator() {
  let firstName = adjective[Math.floor(Math.random() * adjective.length)];
  let secName = object[Math.floor(Math.random() * object.length)];
  let name = firstName + " " + secName;
  let tag ="@" + firstName + "_" + secName;
  document.querySelector(".whoFollowName").innerHTML = name;
  document.querySelector(".whoFollowTag").innerHTML = tag;
}

generator();