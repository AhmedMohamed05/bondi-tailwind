let menu = document.querySelector("header .icon");
menu.onclick = () => menu.classList.toggle("active");

let links = document.querySelectorAll("header nav ul.links li");
let doubleDownArrow = document.querySelector(".double-down");

activeClassHandler(links, "active");
doubleDownArrow.onclick = () => {
  links.forEach((link) => link.classList.remove("active"));
  links[1].classList.add("active");
};

let photosHolder = document.querySelector(".works .photos");

for (let i = 1; i <= 8; i++) {
  let imgSrc = `./dist/images/work-0${i}.jpg`;

  photosHolder.innerHTML += `
  <div class="img-holder">
    <img src="${imgSrc}" alt="Work Image"/>
  </div>`;
}

let worksCatgories = document.querySelectorAll(".works li");
activeClassHandler(worksCatgories, "btn");

function activeClassHandler(arr, className) {
  arr.forEach((item) => {
    item.onclick = () => {
      arr.forEach((item) => {
        item.classList.remove(className);
      });
      item.classList.add(className);
    };
  });
}

let members = document.querySelector(".team .members");

for (let i = 1; i <= 4; i++) {
  let imgSrc = `./dist/images/team-${i}.png`;

  members.innerHTML += `
  <div class="card">
    <img src="${imgSrc}" alt="Member Image"/>
    <p class="card-title">Luke Skywalker</p>
    <p class="desc text-desc-black">“I don't understand how we got by those troops. I thought we were dead.“</p>
  </div>`;
}

let blogs = document.querySelector(".blog .items");

for (let i = 1; i <= 3; i++) {
  let imgSrc = `./dist/images/blog-${i}.jpg`;

  blogs.innerHTML += `
  <div class="item">
    <img src="${imgSrc}" alt="Blog Image" />
    <p class="blog-date text-desc-black">Jan 17, 2022</p>
    <p class="blog-title">Some Awosome Title Here</p>
  </div>`;
}

let footerIcons = document.querySelectorAll("footer .icons *");

footerIcons.forEach((icon) => {
  icon.style.backgroundColor = icon.getAttribute("data-bg");
});
