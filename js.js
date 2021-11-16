window.addEventListener("load", setup);
const endpoint = "http://mcvcreate.com/wp_silfen/wp-json/wp/v2/";

function setup() {
    setupBurgerNav();
    getCategories();
}

function setupAccordion() {
    const h2s = document.querySelectorAll(".container");
    if (h2s) {
        h2s.forEach(h2 => {
            h2.addEventListener("click", e => {
                h2.classList.toggle("open");
                h2.nextElementSibling.classList.toggle("open");
            });
        });
    }
}

function setupBurgerNav () {
    const burger = document.querySelector("header svg");
    const nav = document.querySelector("nav");
    burger.addEventListener("click", e => {
        burger.classList.toggle("open");
        nav.classList.toggle("open");

    });
}

function getCategories (){
    fetch(endpoint+"categories?parent=6&_fields=bag")
    .then(res => res.json())
    .then(setupCategories);
    getTheBags();

}

function getTheBags(){
    fetch("http://mcvcreate.com/wp_silfen/wp-json/wp/v2/bag?per_page=50")
    .then(res => res.json())
    .then(setupBags)
}


function setupBags(bagArray) {
        console.log(bagArray);
        const template = document.querySelector("template#bagtemplate").content;
        const parentElement = document.querySelector(".container");
        bagArray.forEach(bag => {
        const copy = template.cloneNode (true);
        copy.querySelector("img").src=bag._embedded[
            "wp:featuredmedia"
        ][0].media.details.sizes.medium_large.source_url;
        copy.querySelector("h3")
        .textContent= `${bag.title.content} [${bag.price}]`;
        parentElement.appendChild(copy);

}) 

function setupCategories(catArray) {
    const template = document.querySelector("template#categorytemplate").content;
    const parentElement = document.querySelector("main");
    catArray.forEach(cat => {
        const copy = template.cloneNode(true);
        copy.querySelector("h2").textContent=cat.name;
        parentElement.appendChild(copy);
    });
    document.querySelector("main h2").classList.add("open");
    setupAccordion();
    getTheBags();
}}