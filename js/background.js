const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
];
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.id="bgImg";
bgImage.src = `img/${chosenImage}`;
bgImage.style.height="100%";
bgImage.style.width="100%";
document.body.appendChild(bgImage);