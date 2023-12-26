let trendler = {
  "TürkiyeGüçlü": 35,
  "Yenibaşlangiçlar": 28,
  "TeknolojiHarikasi": 42,
  "SağlikÖnceliklidir": 38,
  "DijitalDönüşüm": 32
};

function trends() {
  let updateDiv = "";
  updateDiv += `
                <div class="trends-name">Trends for you</div>
               `;

  for (let trend in trendler) {
    let updateThisDiv = `
              <div class="trends-objects">
                <div class="trends-objects-div1">
                  <div class="trends-objects-line1">Trending in Turkey</div>
                  <div class="trends-objects-line2">#${trend}</div>
                  <div class="trends-objects-line3">${trendler[trend]}K posts</div>
                </div>
                <div class="trends-objects-div2">
                  <div class="trends-dots-img">
                    <img class="trends-little-3-dot-img" src="images/3-dot.png">
                  </div>
                </div>
              </div>
    `;
    updateDiv += updateThisDiv;
  }
  updateDiv += `
  <div class="yml-showmore">Show More</div>
  `;
  document.querySelector(".trends-div").innerHTML = updateDiv;
}

trends();