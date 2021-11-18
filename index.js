fetch("http://mcvcreate.com/wp_silfen/wp-json/wp/v2/bag?_embed")
  .then((res) => res.json())
  .then(gotData);

function gotData(bags) {
  bags.forEach(showBags);
}
function showBags(bags) {
  console.log(bags);
  const shCard = document.querySelector("#bagtemplate").content;
  const clone = shCard.cloneNode(true);
  clone.querySelector(".name").textContent = bags.name;
  clone.querySelector("img").src =
    bags._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
  clone.querySelector(".price").textContent = bags.price;
  const parent = document.querySelector(".container");
  parent.appendChild(clone);
}
