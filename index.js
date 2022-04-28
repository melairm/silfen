const urlParams = new URLSearchParams(window.location.search);
fetch("http://mcvcreate.com/wp_silfen/wp-json/wp/v2/bag/?_embed")
  .then((res) => res.json())
  .then(gotData);

function gotData(bags) {
  bags.forEach(showBags);
}
function showBags(bags) {
  console.log(bags);
  const shCard = document.querySelector("#bagtemplate").content;
  const clone = shCard.cloneNode(true);
  clone
    .querySelector("a")
    .setAttribute("href", "productpage.html?id=" + bags.id);
  clone.querySelector(".name").textContent = bags.title["rendered"];
  clone.querySelector("img").src =
    bags._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
  clone.querySelector(".price").textContent = bags.price;
  const parent = document.querySelector(".small-image");
  parent.appendChild(clone);
}
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
$(".navbar-links").click(function () {
  navbarLinks.classList.toggle("active");
});
