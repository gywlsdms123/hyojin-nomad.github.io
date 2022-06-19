const images = ["0.jpeg", "1.jpeg", "2.jpeg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("bgImage");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);