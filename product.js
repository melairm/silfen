const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("id");
const id = 33;
const url = "http://mcvcreate.com/wp_silfen/wp-json/wp/v2/bag/" + id + "?_embed";

fetch(url)
.then(res => res.json())
.then((data) => {
    showBag(data);
    console.log(data);
  });



function showBag(item) {
    console.log("let's see");
    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
    clone.querySelector(".productname").textContent = item.title["rendered"];
    clone.querySelector(".pdescription").innerHTML = item.content["rendered"];
    clone.querySelector(".price").textContent = item.price;
    clone.querySelector("img").src =item._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
    document.querySelector(".productpg").appendChild(clone);
}